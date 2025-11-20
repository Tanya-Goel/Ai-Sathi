import { Lesson } from '@/types/languageLearning';
import { vocabularyData } from './vocabulary';

export const hindiLessons: Lesson[] = [
    {
        id: 'hindi-1',
        title: 'Greetings',
        titleHindi: 'अभिवादन',
        description: 'Learn basic Hindi greetings',
        descriptionHindi: 'बुनियादी हिंदी अभिवादन सीखें',
        language: 'hi',
        level: 1,
        vocabulary: vocabularyData.greetings,
        exercises: [
            {
                id: 'ex-1',
                type: 'vocab-viewer',
                instruction: 'Learn these greeting words',
                instructionHindi: 'इन अभिवादन शब्दों को सीखें',
                audioUrl: '/assets/audio/instructions/greetings.mp3',
                data: {
                    words: vocabularyData.greetings
                }
            },
            {
                id: 'ex-2',
                type: 'matching',
                instruction: 'Match Hindi words with English meanings',
                instructionHindi: 'हिंदी शब्दों को अंग्रेजी अर्थों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-greetings.mp3',
                data: {
                    pairs: vocabularyData.greetings.map(v => ({
                        left: v.hindi,
                        right: v.english,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: true,
        completed: false,
        bestScore: 0
    },
    {
        id: 'hindi-2',
        title: 'Numbers 1-5',
        titleHindi: 'संख्याएं 1-5',
        description: 'Learn to count from 1 to 5 in Hindi',
        descriptionHindi: 'हिंदी में 1 से 5 तक गिनना सीखें',
        language: 'hi',
        level: 2,
        vocabulary: vocabularyData.numbers,
        exercises: [
            {
                id: 'ex-3',
                type: 'vocab-viewer',
                instruction: 'Learn numbers 1 to 5',
                instructionHindi: '1 से 5 तक की संख्याएं सीखें',
                audioUrl: '/assets/audio/instructions/numbers.mp3',
                data: {
                    words: vocabularyData.numbers
                }
            },
            {
                id: 'ex-4',
                type: 'matching',
                instruction: 'Match numbers with their names',
                instructionHindi: 'संख्याओं को उनके नामों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-numbers.mp3',
                data: {
                    pairs: vocabularyData.numbers.map(v => ({
                        left: v.hindi,
                        right: v.english,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },
    {
        id: 'hindi-3',
        title: 'Family Words',
        titleHindi: 'परिवार के शब्द',
        description: 'Learn family member names in Hindi',
        descriptionHindi: 'हिंदी में परिवार के सदस्यों के नाम सीखें',
        language: 'hi',
        level: 3,
        vocabulary: vocabularyData.family,
        exercises: [
            {
                id: 'ex-5',
                type: 'vocab-viewer',
                instruction: 'Learn family words',
                instructionHindi: 'परिवार के शब्द सीखें',
                audioUrl: '/assets/audio/instructions/family.mp3',
                data: {
                    words: vocabularyData.family
                }
            },
            {
                id: 'ex-6',
                type: 'matching',
                instruction: 'Match family members',
                instructionHindi: 'परिवार के सदस्यों को मिलाएं',
                audioUrl: '/assets/audio/instructions/match-family.mp3',
                data: {
                    pairs: vocabularyData.family.map(v => ({
                        left: v.hindi,
                        right: v.english,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    }
];

export const englishLessons: Lesson[] = [
    {
        id: 'english-1',
        title: 'Animals',
        titleHindi: 'जानवर',
        description: 'Learn animal names in English',
        descriptionHindi: 'अंग्रेजी में जानवरों के नाम सीखें',
        language: 'en',
        level: 1,
        vocabulary: vocabularyData.animals,
        exercises: [
            {
                id: 'ex-7',
                type: 'vocab-viewer',
                instruction: 'Learn animal names',
                instructionHindi: 'जानवरों के नाम सीखें',
                audioUrl: '/assets/audio/instructions/animals.mp3',
                data: {
                    words: vocabularyData.animals
                }
            },
            {
                id: 'ex-8',
                type: 'matching',
                instruction: 'Match animals with their names',
                instructionHindi: 'जानवरों को उनके नामों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-animals.mp3',
                data: {
                    pairs: vocabularyData.animals.map(v => ({
                        left: v.english,
                        right: v.hindi,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: true,
        completed: false,
        bestScore: 0
    },
    {
        id: 'english-2',
        title: 'Food Items',
        titleHindi: 'खाद्य पदार्थ',
        description: 'Learn food names in English',
        descriptionHindi: 'अंग्रेजी में खाद्य पदार्थों के नाम सीखें',
        language: 'en',
        level: 2,
        vocabulary: vocabularyData.food,
        exercises: [
            {
                id: 'ex-9',
                type: 'vocab-viewer',
                instruction: 'Learn food names',
                instructionHindi: 'खाद्य पदार्थों के नाम सीखें',
                audioUrl: '/assets/audio/instructions/food.mp3',
                data: {
                    words: vocabularyData.food
                }
            },
            {
                id: 'ex-10',
                type: 'matching',
                instruction: 'Match food items',
                instructionHindi: 'खाद्य पदार्थों को मिलाएं',
                audioUrl: '/assets/audio/instructions/match-food.mp3',
                data: {
                    pairs: vocabularyData.food.map(v => ({
                        left: v.english,
                        right: v.hindi,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    }
];
