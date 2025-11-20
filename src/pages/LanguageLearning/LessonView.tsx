import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Volume2, Check, X, Trophy } from 'lucide-react';
import { hindiLessons, englishLessons } from '@/data/languageLearning/lessons';
import { Lesson, VocabEntry } from '@/types/languageLearning';
import confetti from 'canvas-confetti';

const LessonView = () => {
    const navigate = useNavigate();
    const { lessonId } = useParams<{ lessonId: string }>();
    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [exerciseType, setExerciseType] = useState<'vocab-viewer' | 'matching'>('vocab-viewer');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [matchingPairs, setMatchingPairs] = useState<Array<{ left: string; right: string; id: string }>>([]);
    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    const [selectedRight, setSelectedRight] = useState<string | null>(null);
    const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
    const [score, setScore] = useState(0);
    const [showCompletion, setShowCompletion] = useState(false);

    useEffect(() => {
        // Find the lesson
        const allLessons = [...hindiLessons, ...englishLessons];
        const foundLesson = allLessons.find(l => l.id === lessonId);
        if (foundLesson) {
            setLesson(foundLesson);
            if (foundLesson.exercises.length > 0) {
                setExerciseType(foundLesson.exercises[0].type as any);
                if (foundLesson.exercises[0].type === 'matching') {
                    setupMatchingGame(foundLesson.exercises[0].data.pairs);
                }
            }
        }
    }, [lessonId]);

    const setupMatchingGame = (pairs: Array<{ left: string; right: string; id: string }>) => {
        // Shuffle the pairs
        const shuffledLeft = [...pairs].sort(() => Math.random() - 0.5);
        const shuffledRight = [...pairs].sort(() => Math.random() - 0.5);
        setMatchingPairs(pairs.map((p, i) => ({
            left: shuffledLeft[i].left,
            right: shuffledRight[i].right,
            id: p.id
        })));
    };

    const playAudio = (text: string, lang: 'hi' | 'en') => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    };

    const handleWordNext = () => {
        if (lesson && currentWordIndex < lesson.vocabulary.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1);
        } else {
            // Move to next exercise
            if (lesson && currentExercise < lesson.exercises.length - 1) {
                const nextExercise = lesson.exercises[currentExercise + 1];
                setCurrentExercise(currentExercise + 1);
                setExerciseType(nextExercise.type as any);
                setCurrentWordIndex(0);
                if (nextExercise.type === 'matching') {
                    setupMatchingGame(nextExercise.data.pairs);
                }
            } else {
                completeLesson();
            }
        }
    };

    const handleMatchingSelect = (item: string, side: 'left' | 'right') => {
        if (side === 'left') {
            setSelectedLeft(item);
            if (selectedRight) {
                checkMatch(item, selectedRight);
            }
        } else {
            setSelectedRight(item);
            if (selectedLeft) {
                checkMatch(selectedLeft, item);
            }
        }
    };

    const checkMatch = (left: string, right: string) => {
        const pair = matchingPairs.find(p => p.left === left && p.right === right);
        if (pair && !matchedPairs.includes(pair.id)) {
            // Correct match!
            setMatchedPairs([...matchedPairs, pair.id]);
            setScore(score + 1);
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.6 }
            });
            playAudio('Correct!', 'en');
        } else {
            // Wrong match
            playAudio('Try again', 'en');
        }
        setSelectedLeft(null);
        setSelectedRight(null);

        // Check if all matched
        if (matchedPairs.length + 1 === matchingPairs.length) {
            setTimeout(() => {
                if (lesson && currentExercise < lesson.exercises.length - 1) {
                    setCurrentExercise(currentExercise + 1);
                    setMatchedPairs([]);
                } else {
                    completeLesson();
                }
            }, 1500);
        }
    };

    const completeLesson = () => {
        // Save progress
        const progress = JSON.parse(localStorage.getItem('lessonProgress') || '{"completed":[]}');
        if (!progress.completed.includes(lessonId)) {
            progress.completed.push(lessonId);
            localStorage.setItem('lessonProgress', JSON.stringify(progress));
        }

        // Update lesson score
        if (lesson) {
            const newScore = Math.max(lesson.bestScore, score);
            // Save score logic here
        }

        setShowCompletion(true);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    if (!lesson) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading lesson...</p>
            </div>
        );
    }

    if (showCompletion) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 p-6 flex items-center justify-center">
                <Card className="max-w-2xl w-full p-8 space-y-6">
                    <div className="text-center space-y-4">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center">
                            <Trophy className="w-12 h-12 text-success" />
                        </div>
                        <h2 className="text-4xl font-bold text-foreground">
                            Lesson Complete! 🎉
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            पाठ पूर्ण हुआ!
                        </p>
                        <div className="text-6xl font-bold text-primary">
                            {score} / {lesson.vocabulary.length}
                        </div>
                        <p className="text-muted-foreground">Words Mastered</p>
                    </div>

                    <div className="flex gap-4">
                        <Button
                            onClick={() => navigate(`/language-learning/lessons/${lesson.language}`)}
                            variant="outline"
                            className="flex-1 h-14 text-lg rounded-2xl"
                        >
                            Back to Lessons
                        </Button>
                        <Button
                            onClick={() => window.location.reload()}
                            className="flex-1 h-14 text-lg rounded-2xl bg-gradient-to-r from-primary to-secondary"
                        >
                            Practice Again
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }

    if (exerciseType === 'vocab-viewer') {
        const word = lesson.vocabulary[currentWordIndex];
        return (
            <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 p-6">
                <div className="max-w-2xl mx-auto">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate(`/language-learning/lessons/${lesson.language}`)}
                        className="mb-4 rounded-full hover:bg-muted"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>

                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-foreground mb-2">{lesson.title}</h2>
                        <p className="text-muted-foreground">
                            Word {currentWordIndex + 1} of {lesson.vocabulary.length}
                        </p>
                    </div>

                    <Card className="p-8 space-y-6">
                        {/* Image Placeholder */}
                        <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                            <span className="text-9xl">
                                {word.category === 'animals' && '🐾'}
                                {word.category === 'food' && '🍎'}
                                {word.category === 'family' && '👨‍👩‍👧‍👦'}
                                {word.category === 'greetings' && '👋'}
                                {word.category === 'numbers' && '🔢'}
                                {word.category === 'school' && '🎒'}
                                {word.category === 'home' && '🏠'}
                            </span>
                        </div>

                        {/* Word Info */}
                        <div className="text-center space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center justify-center gap-2">
                                    <h3 className="text-5xl font-bold text-foreground">{word.hindi}</h3>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full"
                                        onClick={() => playAudio(word.hindi, 'hi')}
                                    >
                                        <Volume2 className="w-6 h-6 text-primary" />
                                    </Button>
                                </div>
                                <p className="text-2xl text-muted-foreground">{word.romanization}</p>
                            </div>

                            <div className="pt-4 border-t border-border">
                                <div className="flex items-center justify-center gap-2">
                                    <h4 className="text-3xl font-bold text-foreground">{word.english}</h4>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full"
                                        onClick={() => playAudio(word.english, 'en')}
                                    >
                                        <Volume2 className="w-6 h-6 text-primary" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <Button
                            onClick={handleWordNext}
                            className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-primary to-secondary"
                        >
                            {currentWordIndex < lesson.vocabulary.length - 1 ? 'Next Word →' : 'Start Practice →'}
                        </Button>
                    </Card>
                </div>
            </div>
        );
    }

    // Matching Exercise
    const leftItems = matchingPairs.map(p => p.left);
    const rightItems = matchingPairs.map(p => p.right);

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 p-6">
            <div className="max-w-4xl mx-auto">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate(`/language-learning/lessons/${lesson.language}`)}
                    className="mb-4 rounded-full hover:bg-muted"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                </Button>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Match the Words</h2>
                    <p className="text-muted-foreground">
                        Tap a word on the left, then tap its match on the right
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                        Score: {matchedPairs.length} / {matchingPairs.length}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-3">
                        {leftItems.map((item, index) => {
                            const pair = matchingPairs.find(p => p.left === item);
                            const isMatched = pair && matchedPairs.includes(pair.id);
                            const isSelected = selectedLeft === item;

                            return (
                                <Card
                                    key={index}
                                    onClick={() => !isMatched && handleMatchingSelect(item, 'left')}
                                    className={`p-4 cursor-pointer transition-all ${isMatched
                                            ? 'opacity-50 bg-success/10 border-success'
                                            : isSelected
                                                ? 'ring-2 ring-primary bg-primary/5 scale-105'
                                                : 'hover:scale-105'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold">{item}</span>
                                        {isMatched && <Check className="w-5 h-5 text-success" />}
                                    </div>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-3">
                        {rightItems.map((item, index) => {
                            const pair = matchingPairs.find(p => p.right === item);
                            const isMatched = pair && matchedPairs.includes(pair.id);
                            const isSelected = selectedRight === item;

                            return (
                                <Card
                                    key={index}
                                    onClick={() => !isMatched && handleMatchingSelect(item, 'right')}
                                    className={`p-4 cursor-pointer transition-all ${isMatched
                                            ? 'opacity-50 bg-success/10 border-success'
                                            : isSelected
                                                ? 'ring-2 ring-primary bg-primary/5 scale-105'
                                                : 'hover:scale-105'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold">{item}</span>
                                        {isMatched && <Check className="w-5 h-5 text-success" />}
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonView;
