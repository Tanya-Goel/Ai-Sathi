import { Story } from '@/types/languageLearning';

export const stories: Story[] = [
    {
        id: 'story-1',
        title: 'The Cat and the Ball',
        titleHindi: 'बिल्ली और गेंद',
        content: 'A small cat sees a red ball. The cat plays with the ball. The ball rolls away. The cat runs after the ball. The cat is happy!',
        contentHindi: 'एक छोटी बिल्ली एक लाल गेंद देखती है। बिल्ली गेंद के साथ खेलती है। गेंद लुढ़क जाती है। बिल्ली गेंद के पीछे दौड़ती है। बिल्ली खुश है!',
        audioUrl: '/assets/audio/stories/cat-ball.mp3',
        imageUrl: '/assets/stories/cat-ball.png',
        words: ['cat', 'ball', 'red', 'play', 'happy'],
        vocabulary: [
            {
                id: 'story-vocab-1',
                hindi: 'बिल्ली',
                english: 'Cat',
                romanization: 'Billi',
                imageUrl: '/assets/vocab/cat.png',
                audioUrl: '/assets/audio/billi.mp3',
                category: 'animals'
            },
            {
                id: 'story-vocab-2',
                hindi: 'गेंद',
                english: 'Ball',
                romanization: 'Gend',
                imageUrl: '/assets/vocab/ball.png',
                audioUrl: '/assets/audio/gend.mp3',
                category: 'toys'
            }
        ]
    },
    {
        id: 'story-2',
        title: 'My Family',
        titleHindi: 'मेरा परिवार',
        content: 'I love my family. My mother cooks food. My father reads books. My brother plays games. We are happy together!',
        contentHindi: 'मुझे अपने परिवार से प्यार है। मेरी माँ खाना बनाती है। मेरे पिता किताबें पढ़ते हैं। मेरा भाई खेल खेलता है। हम साथ में खुश हैं!',
        audioUrl: '/assets/audio/stories/family.mp3',
        imageUrl: '/assets/stories/family.png',
        words: ['family', 'mother', 'father', 'brother', 'happy'],
        vocabulary: [
            {
                id: 'story-vocab-3',
                hindi: 'माँ',
                english: 'Mother',
                romanization: 'Maa',
                imageUrl: '/assets/vocab/mother.png',
                audioUrl: '/assets/audio/maa.mp3',
                category: 'family'
            },
            {
                id: 'story-vocab-4',
                hindi: 'पिता',
                english: 'Father',
                romanization: 'Pita',
                imageUrl: '/assets/vocab/father.png',
                audioUrl: '/assets/audio/pita.mp3',
                category: 'family'
            }
        ]
    }
];
