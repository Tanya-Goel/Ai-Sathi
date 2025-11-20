import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Lock, Check, Star } from 'lucide-react';
import { hindiLessons, englishLessons } from '@/data/languageLearning/lessons';
import { Lesson } from '@/types/languageLearning';

const LessonsList = () => {
    const navigate = useNavigate();
    const { language } = useParams<{ language: 'hi' | 'en' }>();
    const [lessons, setLessons] = useState<Lesson[]>([]);
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);

    useEffect(() => {
        // Load lessons based on language
        const lessonData = language === 'hi' ? hindiLessons : englishLessons;
        setLessons(lessonData);

        // Load progress from localStorage
        const savedProgress = localStorage.getItem('lessonProgress');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            setCompletedLessons(progress.completed || []);
        }

        // Check for demo mode
        const demoMode = localStorage.getItem('demoMode') === 'true';
        if (demoMode) {
            // Unlock all lessons in demo mode
            const unlockedLessons = lessonData.map(l => ({ ...l, unlocked: true, bestScore: 5 }));
            setLessons(unlockedLessons);
        }
    }, [language]);

    const handleLessonClick = (lesson: Lesson) => {
        if (lesson.unlocked || localStorage.getItem('demoMode') === 'true') {
            navigate(`/language-learning/lesson/${lesson.id}`);
        }
    };

    const calculateProgress = () => {
        if (lessons.length === 0) return 0;
        return (completedLessons.length / lessons.length) * 100;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 p-6">
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-8">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate('/language-learning')}
                    className="mb-4 rounded-full hover:bg-muted"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                </Button>

                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-4xl">
                            {language === 'hi' ? '🇮🇳' : '🇬🇧'}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-foreground">
                                {language === 'hi' ? 'Hindi Lessons' : 'English Lessons'}
                            </h1>
                            <p className="text-muted-foreground">
                                {language === 'hi' ? 'हिंदी पाठ' : 'अंग्रेजी पाठ'}
                            </p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="p-4 bg-card rounded-xl border border-border space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold">Your Progress</span>
                            <span className="text-sm text-muted-foreground">
                                {completedLessons.length} / {lessons.length} lessons
                            </span>
                        </div>
                        <Progress value={calculateProgress()} className="h-2" />
                    </div>
                </div>
            </div>

            {/* Lessons Grid */}
            <div className="max-w-4xl mx-auto space-y-4">
                {lessons.map((lesson, index) => {
                    const isCompleted = completedLessons.includes(lesson.id);
                    const isLocked = !lesson.unlocked && localStorage.getItem('demoMode') !== 'true';

                    return (
                        <Card
                            key={lesson.id}
                            onClick={() => handleLessonClick(lesson)}
                            className={`p-6 transition-all ${isLocked
                                    ? 'opacity-50 cursor-not-allowed'
                                    : 'cursor-pointer hover:scale-105 hover:shadow-lg'
                                } ${isCompleted ? 'bg-success/5 border-success/20' : ''}`}
                        >
                            <div className="flex items-center gap-4">
                                {/* Lesson Number */}
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${isCompleted
                                        ? 'bg-success/20 text-success'
                                        : isLocked
                                            ? 'bg-muted text-muted-foreground'
                                            : 'bg-gradient-to-br from-primary/20 to-secondary/20 text-primary'
                                    }`}>
                                    {isLocked ? (
                                        <Lock className="w-6 h-6" />
                                    ) : isCompleted ? (
                                        <Check className="w-6 h-6" />
                                    ) : (
                                        index + 1
                                    )}
                                </div>

                                {/* Lesson Info */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-foreground">{lesson.title}</h3>
                                    <p className="text-sm text-muted-foreground">{lesson.titleHindi}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{lesson.description}</p>
                                </div>

                                {/* Score */}
                                {lesson.bestScore > 0 && (
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <Star className="w-5 h-5 fill-current" />
                                        <span className="font-bold">{lesson.bestScore}</span>
                                    </div>
                                )}
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Demo Mode Banner */}
            {localStorage.getItem('demoMode') === 'true' && (
                <div className="fixed bottom-4 right-4 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-xl">
                    <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                        🎯 Demo Mode Active - All lessons unlocked
                    </p>
                </div>
            )}
        </div>
    );
};

export default LessonsList;
