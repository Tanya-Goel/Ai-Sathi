// Type definitions for Language Learning Module

export type LanguageCode = 'hi' | 'en' | 'kn';

export interface VocabEntry {
    id: string;
    hindi: string;
    english: string;
    romanization: string;
    imageUrl: string;
    audioUrl: string;
    category: string;
}

export interface Lesson {
    id: string;
    title: string;
    titleHindi: string;
    description: string;
    descriptionHindi: string;
    language: LanguageCode;
    level: number;
    vocabulary: VocabEntry[];
    exercises: Exercise[];
    unlocked: boolean;
    completed: boolean;
    bestScore: number;
}

export interface Exercise {
    id: string;
    type: 'vocab-viewer' | 'matching' | 'translation' | 'pronunciation' | 'sentence-builder' | 'tracing' | 'phonics';
    instruction: string;
    instructionHindi: string;
    audioUrl: string;
    data: any; // Specific to exercise type
}

export interface Story {
    id: string;
    title: string;
    titleHindi: string;
    content: string;
    contentHindi: string;
    audioUrl: string;
    imageUrl: string;
    words: string[];
    vocabulary: VocabEntry[];
}

export interface StudentProfile {
    id: string;
    name: string;
    avatar: string;
    grade: number;
    preferredLanguage: LanguageCode;
    hindiScore: number;
    englishScore: number;
    lessonsCompleted: string[];
    wordsLearned: string[];
    pronunciationAccuracy: number;
    voiceLogs: VoiceLog[];
    createdAt: string;
    lastActive: string;
}

export interface VoiceLog {
    word: string;
    timestamp: string;
    accuracy: number;
    transcription: string;
}

export interface AssessmentResult {
    hindiScore: number;
    englishScore: number;
    placement: 'hindi-literacy' | 'english-literacy' | 'both' | 'skip-to-tutor';
    completedAt: string;
}

export interface ProgressData {
    studentId: string;
    lessonsCompleted: number;
    wordsLearned: number;
    pronunciationAccuracy: number;
    recentMistakes: string[];
    suggestedPractice: string[];
    lastUpdated: string;
}

export interface DemoModeConfig {
    enabled: boolean;
    unlockAllLessons: boolean;
    preFillProgress: boolean;
    autoLoadModels: boolean;
}
