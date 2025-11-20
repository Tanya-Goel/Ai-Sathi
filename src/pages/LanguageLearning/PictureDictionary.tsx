import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Volume2, ArrowLeft, BookOpen } from 'lucide-react';
import { vocabularyData } from '@/data/languageLearning/vocabulary';
import { VocabEntry } from '@/types/languageLearning';

const categories = [
    { id: 'greetings', name: 'Greetings', nameHindi: 'अभिवादन', icon: '👋', color: 'from-blue-500/20 to-blue-600/20' },
    { id: 'numbers', name: 'Numbers', nameHindi: 'संख्याएं', icon: '🔢', color: 'from-green-500/20 to-green-600/20' },
    { id: 'family', name: 'Family', nameHindi: 'परिवार', icon: '👨‍👩‍👧‍👦', color: 'from-purple-500/20 to-purple-600/20' },
    { id: 'animals', name: 'Animals', nameHindi: 'जानवर', icon: '🐾', color: 'from-orange-500/20 to-orange-600/20' },
    { id: 'food', name: 'Food', nameHindi: 'खाद्य पदार्थ', icon: '🍎', color: 'from-red-500/20 to-red-600/20' },
    { id: 'school', name: 'School', nameHindi: 'स्कूल', icon: '🎒', color: 'from-yellow-500/20 to-yellow-600/20' },
    { id: 'home', name: 'Home', nameHindi: 'घर', icon: '🏠', color: 'from-pink-500/20 to-pink-600/20' }
];

const PictureDictionary = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedWord, setSelectedWord] = useState<VocabEntry | null>(null);

    const playAudio = (text: string, lang: 'hi' | 'en') => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    };

    const handleWordClick = (word: VocabEntry) => {
        setSelectedWord(word);
        playAudio(word.hindi, 'hi');
        setTimeout(() => playAudio(word.english, 'en'), 1500);
    };

    if (selectedCategory) {
        const words = vocabularyData[selectedCategory] || [];
        const category = categories.find(c => c.id === selectedCategory);

        return (
            <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 p-6">
                {/* Header */}
                <div className="max-w-6xl mx-auto mb-8">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedCategory(null)}
                        className="mb-4 rounded-full hover:bg-muted"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Categories
                    </Button>

                    <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category?.color} flex items-center justify-center text-3xl`}>
                            {category?.icon}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-foreground">{category?.name}</h1>
                            <p className="text-xl text-muted-foreground">{category?.nameHindi}</p>
                        </div>
                    </div>
                </div>

                {/* Word Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {words.map((word) => (
                        <Card
                            key={word.id}
                            onClick={() => handleWordClick(word)}
                            className={`p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${selectedWord?.id === word.id ? 'ring-2 ring-primary bg-primary/5' : ''
                                }`}
                        >
                            <div className="space-y-3">
                                {/* Image Placeholder */}
                                <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                                    <span className="text-6xl">{category?.icon}</span>
                                </div>

                                {/* Word Info */}
                                <div className="text-center space-y-1">
                                    <div className="flex items-center justify-center gap-2">
                                        <h3 className="text-2xl font-bold text-foreground">{word.hindi}</h3>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 rounded-full"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                playAudio(word.hindi, 'hi');
                                            }}
                                        >
                                            <Volume2 className="w-4 h-4 text-primary" />
                                        </Button>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{word.romanization}</p>
                                    <p className="text-lg font-semibold text-foreground">{word.english}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Selected Word Detail */}
                {selectedWord && (
                    <div className="fixed bottom-0 left-0 right-0 p-6 bg-background/95 backdrop-blur-lg border-t border-border">
                        <div className="max-w-2xl mx-auto flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl">
                                    {category?.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">{selectedWord.hindi}</h3>
                                    <p className="text-muted-foreground">{selectedWord.romanization} • {selectedWord.english}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full"
                                    onClick={() => playAudio(selectedWord.hindi, 'hi')}
                                >
                                    <Volume2 className="w-5 h-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full"
                                    onClick={() => playAudio(selectedWord.english, 'en')}
                                >
                                    <Volume2 className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 p-6">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-8">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate('/subjects')}
                    className="mb-4 rounded-full hover:bg-muted"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                </Button>

                <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shadow-lg">
                        <BookOpen className="w-12 h-12 text-primary" />
                    </div>
                    <h1 className="text-4xl font-bold text-foreground">Picture Dictionary</h1>
                    <p className="text-xl text-muted-foreground">चित्र शब्दकोश</p>
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        Tap any category to explore words with pictures and audio. Perfect for visual learners!
                    </p>
                </div>
            </div>

            {/* Category Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category) => (
                    <Card
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className="p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
                    >
                        <div className="space-y-4">
                            <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                <span className="text-6xl">{category.icon}</span>
                            </div>
                            <div className="text-center space-y-1">
                                <h3 className="text-lg font-bold text-foreground">{category.name}</h3>
                                <p className="text-sm text-muted-foreground">{category.nameHindi}</p>
                                <p className="text-xs text-muted-foreground">
                                    {vocabularyData[category.id]?.length || 0} words
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PictureDictionary;
