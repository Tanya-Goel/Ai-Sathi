import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Image, Trophy, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const LanguageLearningHub = () => {
    const navigate = useNavigate();
    const [demoMode, setDemoMode] = useState(false);

    useEffect(() => {
        setDemoMode(localStorage.getItem('demoMode') === 'true');
    }, []);

    const toggleDemoMode = () => {
        const newDemoMode = !demoMode;
        setDemoMode(newDemoMode);
        localStorage.setItem('demoMode', newDemoMode.toString());
        if (newDemoMode) {
            // Pre-fill demo data
            const demoProgress = {
                completed: ['hindi-1', 'english-1'],
                wordsLearned: 15,
                pronunciationAccuracy: 85
            };
            localStorage.setItem('lessonProgress', JSON.stringify(demoProgress));
        }
    };

    const features = [
        {
            id: 'select-language',
            title: 'Start Learning',
            titleHindi: 'सीखना शुरू करें',
            description: 'Choose your language and take a quick assessment',
            descriptionHindi: 'अपनी भाषा चुनें और एक त्वरित मूल्यांकन लें',
            icon: BookOpen,
            color: 'from-blue-500/20 to-blue-600/20',
            route: '/language-learning/select'
        },
        {
            id: 'picture-dictionary',
            title: 'Picture Dictionary',
            titleHindi: 'चित्र शब्दकोश',
            description: 'Learn words with pictures and audio',
            descriptionHindi: 'चित्रों और ऑडियो के साथ शब्द सीखें',
            icon: Image,
            color: 'from-purple-500/20 to-purple-600/20',
            route: '/language-learning/dictionary'
        },
        {
            id: 'hindi-lessons',
            title: 'Hindi Lessons',
            titleHindi: 'हिंदी पाठ',
            description: 'Interactive Hindi learning modules',
            descriptionHindi: 'इंटरैक्टिव हिंदी सीखने के मॉड्यूल',
            icon: Trophy,
            color: 'from-orange-500/20 to-orange-600/20',
            route: '/language-learning/lessons/hi'
        },
        {
            id: 'english-lessons',
            title: 'English Lessons',
            titleHindi: 'अंग्रेजी पाठ',
            description: 'Interactive English learning modules',
            descriptionHindi: 'इंटरैक्टिव अंग्रेजी सीखने के मॉड्यूल',
            icon: Trophy,
            color: 'from-green-500/20 to-green-600/20',
            route: '/language-learning/lessons/en'
        }
    ];

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
                    Back to Subjects
                </Button>

                <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shadow-lg">
                        <span className="text-5xl">📚</span>
                    </div>
                    <h1 className="text-4xl font-bold text-foreground">Language Learning</h1>
                    <p className="text-xl text-muted-foreground">भाषा सीखना</p>
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        Learn Hindi and English with interactive lessons, games, and audio support. Perfect for all ages!
                    </p>
                </div>

                {/* Demo Mode Toggle */}
                <div className="mt-6 flex justify-center">
                    <Button
                        onClick={toggleDemoMode}
                        variant={demoMode ? 'default' : 'outline'}
                        className="rounded-full"
                    >
                        <Zap className="w-4 h-4 mr-2" />
                        {demoMode ? '🎯 Demo Mode Active' : 'Enable Demo Mode'}
                    </Button>
                </div>

                {demoMode && (
                    <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-center">
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                            <strong>Demo Mode:</strong> All lessons unlocked • Pre-filled progress • Perfect for presentations!
                        </p>
                    </div>
                )}
            </div>

            {/* Features Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature) => (
                    <Card
                        key={feature.id}
                        onClick={() => navigate(feature.route)}
                        className="p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
                    >
                        <div className="flex items-start gap-4">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                                <feature.icon className="w-8 h-8 text-foreground" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-foreground mb-1">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{feature.titleHindi}</p>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Info Section */}
            <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-card rounded-xl border border-border">
                    <div className="text-4xl mb-2">🎮</div>
                    <h3 className="font-semibold mb-1">Interactive Games</h3>
                    <p className="text-sm text-muted-foreground">Fun matching games and exercises</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl border border-border">
                    <div className="text-4xl mb-2">🔊</div>
                    <h3 className="font-semibold mb-1">Audio Support</h3>
                    <p className="text-sm text-muted-foreground">Hear every word pronounced correctly</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl border border-border">
                    <div className="text-4xl mb-2">📊</div>
                    <h3 className="font-semibold mb-1">Track Progress</h3>
                    <p className="text-sm text-muted-foreground">See your improvement over time</p>
                </div>
            </div>
        </div>
    );
};

export default LanguageLearningHub;
