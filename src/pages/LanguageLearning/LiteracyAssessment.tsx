import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Volume2, Check, X } from 'lucide-react';
import { AssessmentResult } from '@/types/languageLearning';

interface Question {
    id: string;
    type: 'letter' | 'word' | 'sound';
    language: 'hi' | 'en';
    question: string;
    questionHindi: string;
    audioUrl: string;
    options: { id: string; text: string; image?: string; correct: boolean }[];
}

const assessmentQuestions: Question[] = [
    // Hindi Questions
    {
        id: 'q1',
        type: 'letter',
        language: 'hi',
        question: 'Which letter is this?',
        questionHindi: 'यह कौन सा अक्षर है?',
        audioUrl: '/assets/audio/assessment/q1.mp3',
        options: [
            { id: 'a', text: 'क', correct: true },
            { id: 'b', text: 'म', correct: false },
            { id: 'c', text: 'अ', correct: false }
        ]
    },
    {
        id: 'q2',
        type: 'word',
        language: 'hi',
        question: 'Match the word to the picture',
        questionHindi: 'चित्र से शब्द मिलाएं',
        audioUrl: '/assets/audio/assessment/q2.mp3',
        options: [
            { id: 'a', text: 'बिल्ली', image: '/assets/vocab/cat.png', correct: true },
            { id: 'b', text: 'कुत्ता', image: '/assets/vocab/cat.png', correct: false },
            { id: 'c', text: 'गाय', image: '/assets/vocab/cat.png', correct: false }
        ]
    },
    // English Questions
    {
        id: 'q3',
        type: 'letter',
        language: 'en',
        question: 'Which letter is this?',
        questionHindi: 'यह कौन सा अक्षर है?',
        audioUrl: '/assets/audio/assessment/q3.mp3',
        options: [
            { id: 'a', text: 'A', correct: true },
            { id: 'b', text: 'B', correct: false },
            { id: 'c', text: 'C', correct: false }
        ]
    },
    {
        id: 'q4',
        type: 'word',
        language: 'en',
        question: 'Which word matches the picture?',
        questionHindi: 'कौन सा शब्द चित्र से मेल खाता है?',
        audioUrl: '/assets/audio/assessment/q4.mp3',
        options: [
            { id: 'a', text: 'Cat', image: '/assets/vocab/cat.png', correct: true },
            { id: 'b', text: 'Dog', image: '/assets/vocab/cat.png', correct: false },
            { id: 'c', text: 'Cow', image: '/assets/vocab/cat.png', correct: false }
        ]
    }
];

const LiteracyAssessment = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, boolean>>({});
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);

    const question = assessmentQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

    const playAudio = (text: string, lang: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    const handleOptionSelect = (optionId: string) => {
        setSelectedOption(optionId);
    };

    const handleNext = () => {
        if (selectedOption) {
            const option = question.options.find(o => o.id === selectedOption);
            setAnswers({
                ...answers,
                [question.id]: option?.correct || false
            });

            if (currentQuestion < assessmentQuestions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption(null);
            } else {
                calculateResults();
            }
        }
    };

    const calculateResults = () => {
        const hindiQuestions = assessmentQuestions.filter(q => q.language === 'hi');
        const englishQuestions = assessmentQuestions.filter(q => q.language === 'en');

        const hindiCorrect = hindiQuestions.filter(q => answers[q.id]).length;
        const englishCorrect = englishQuestions.filter(q => answers[q.id]).length;

        const hindiScore = (hindiCorrect / hindiQuestions.length) * 100;
        const englishScore = (englishCorrect / englishQuestions.length) * 100;

        const result: AssessmentResult = {
            hindiScore,
            englishScore,
            placement: determinePlacement(hindiScore, englishScore),
            completedAt: new Date().toISOString()
        };

        localStorage.setItem('assessmentResult', JSON.stringify(result));
        setShowResult(true);
    };

    const determinePlacement = (hindiScore: number, englishScore: number): AssessmentResult['placement'] => {
        if (hindiScore >= 70 && englishScore >= 70) return 'skip-to-tutor';
        if (hindiScore < 50 && englishScore < 50) return 'both';
        if (hindiScore < englishScore) return 'hindi-literacy';
        return 'english-literacy';
    };

    const handleContinue = () => {
        const learningLanguage = localStorage.getItem('learningLanguage');
        navigate(`/language-learning/lessons/${learningLanguage}`);
    };

    if (showResult) {
        const result = JSON.parse(localStorage.getItem('assessmentResult') || '{}');
        return (
            <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 p-6 flex items-center justify-center">
                <Card className="max-w-2xl w-full p-8 space-y-6">
                    <div className="text-center space-y-4">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center">
                            <Check className="w-12 h-12 text-success" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">
                            Assessment Complete!
                        </h2>
                        <p className="text-muted-foreground">
                            मूल्यांकन पूर्ण हुआ!
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-muted rounded-xl">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold">Hindi Score</span>
                                <span className="text-2xl font-bold text-primary">
                                    {Math.round(result.hindiScore)}%
                                </span>
                            </div>
                            <Progress value={result.hindiScore} className="h-2" />
                        </div>

                        <div className="p-4 bg-muted rounded-xl">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold">English Score</span>
                                <span className="text-2xl font-bold text-primary">
                                    {Math.round(result.englishScore)}%
                                </span>
                            </div>
                            <Progress value={result.englishScore} className="h-2" />
                        </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
                        <h3 className="font-semibold text-lg mb-2">Recommended Path</h3>
                        <p className="text-muted-foreground">
                            {result.placement === 'skip-to-tutor' && 'Great job! You can start with advanced lessons.'}
                            {result.placement === 'hindi-literacy' && 'Let\'s start with Hindi literacy lessons.'}
                            {result.placement === 'english-literacy' && 'Let\'s start with English literacy lessons.'}
                            {result.placement === 'both' && 'We\'ll start with both Hindi and English basics.'}
                        </p>
                    </div>

                    <Button
                        onClick={handleContinue}
                        className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-primary to-secondary"
                    >
                        Start Learning! 🚀
                    </Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 p-6">
            {/* Progress Header */}
            <div className="max-w-2xl mx-auto mb-8 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        Question {currentQuestion + 1} of {assessmentQuestions.length}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                        {Math.round(progress)}%
                    </span>
                </div>
                <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="max-w-2xl mx-auto p-8 space-y-6">
                <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                        <h3 className="text-2xl font-bold text-foreground">
                            {question.question}
                        </h3>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            onClick={() => playAudio(question.question, question.language)}
                        >
                            <Volume2 className="w-5 h-5 text-primary" />
                        </Button>
                    </div>
                    <p className="text-lg text-muted-foreground">
                        {question.questionHindi}
                    </p>
                </div>

                {/* Options */}
                <div className="grid gap-4">
                    {question.options.map((option) => (
                        <Card
                            key={option.id}
                            onClick={() => handleOptionSelect(option.id)}
                            className={`p-6 cursor-pointer transition-all hover:scale-105 ${selectedOption === option.id
                                    ? 'ring-2 ring-primary bg-primary/5'
                                    : ''
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                {option.image && (
                                    <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center">
                                        <span className="text-4xl">🐱</span>
                                    </div>
                                )}
                                <span className="text-3xl font-bold">{option.text}</span>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Next Button */}
                <Button
                    onClick={handleNext}
                    disabled={!selectedOption}
                    className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-primary to-secondary"
                >
                    {currentQuestion < assessmentQuestions.length - 1 ? 'Next →' : 'Finish'}
                </Button>
            </Card>
        </div>
    );
};

export default LiteracyAssessment;
