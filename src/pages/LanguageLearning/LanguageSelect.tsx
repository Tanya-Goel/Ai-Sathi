import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Volume2, ArrowLeft } from 'lucide-react';

interface LanguageOption {
    code: 'hi' | 'en';
    name: string;
    nativeName: string;
    flag: string;
    audioUrl: string;
}

const languages: LanguageOption[] = [
    {
        code: 'hi',
        name: 'Hindi',
        nativeName: 'हिन्दी',
        flag: '🇮🇳',
        audioUrl: '/assets/audio/lang-hindi.mp3'
    },
    {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        flag: '🇬🇧',
        audioUrl: '/assets/audio/lang-english.mp3'
    }
];

const LanguageSelect = () => {
    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState<'hi' | 'en' | null>(null);

    const playAudio = (audioUrl: string) => {
        // For MVP, we'll use Web Speech API as fallback
        const utterance = new SpeechSynthesisUtterance();
        if (audioUrl.includes('hindi')) {
            utterance.text = 'हिन्दी';
            utterance.lang = 'hi-IN';
        } else {
            utterance.text = 'English';
            utterance.lang = 'en-US';
        }
        window.speechSynthesis.speak(utterance);
    };

    const handleLanguageSelect = (code: 'hi' | 'en') => {
        setSelectedLanguage(code);
        localStorage.setItem('learningLanguage', code);
    };

    const handleContinue = () => {
        if (selectedLanguage) {
            navigate('/language-learning/assessment');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 p-6">
            {/* Back Button */}
            <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/subjects')}
                className="mb-6 rounded-full hover:bg-muted"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
            </Button>

            {/* Header */}
            <div className="text-center space-y-4 mb-12">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shadow-lg">
                    <span className="text-5xl">📚</span>
                </div>
                <h1 className="text-3xl font-bold text-foreground">
                    Select Your Language
                </h1>
                <p className="text-xl text-muted-foreground font-semibold">
                    अपनी भाषा चुनें
                </p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Choose the language you want to learn. You can change this later.
                </p>
            </div>

            {/* Language Options */}
            <div className="max-w-2xl mx-auto space-y-4 mb-8">
                {languages.map((lang) => (
                    <Card
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.code)}
                        className={`p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${selectedLanguage === lang.code
                                ? 'ring-2 ring-primary bg-primary/5'
                                : ''
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl">{lang.flag}</span>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">
                                        {lang.nativeName}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{lang.name}</p>
                                </div>
                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full hover:bg-primary/10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    playAudio(lang.audioUrl);
                                }}
                            >
                                <Volume2 className="w-6 h-6 text-primary" />
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Continue Button */}
            {selectedLanguage && (
                <div className="max-w-2xl mx-auto">
                    <Button
                        onClick={handleContinue}
                        className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all"
                    >
                        Continue / जारी रखें →
                    </Button>
                </div>
            )}

            {/* Info Footer */}
            <div className="mt-12 text-center">
                <p className="text-xs text-muted-foreground">
                    🎯 Interactive lessons • 🎮 Fun games • 🏆 Track progress
                </p>
            </div>
        </div>
    );
};

export default LanguageSelect;
