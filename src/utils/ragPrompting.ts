import { chapterContent } from '@/data/chapterContent';

/**
 * Generates a grounded prompt for the Qwen model using RAG (Retrieval-Augmented Generation).
 * This ensures the model's response is strictly based on the curriculum content.
 * 
 * @param userQuery - The student's question
 * @param subject - The subject (e.g., "Maths" or "Science")
 * @param chapterName - The chapter name (e.g., "numbers", "human-body")
 * @returns The final prompt string formatted for the Qwen chat template
 */
export function generateGroundedPrompt(
    userQuery: string,
    subject: string,
    chapterName: string
): string {
    // 1. Retrieve the curriculum context (RAG step)
    let curriculumContext = '';

    // Safety check for lookup
    if (chapterContent[subject as keyof typeof chapterContent]) {
        const subjectData = chapterContent[subject as keyof typeof chapterContent];
        if (subjectData[chapterName as keyof typeof subjectData]) {
            curriculumContext = subjectData[chapterName as keyof typeof subjectData] as string;
        }
    }

    // Fallback for missing content, prevents crashing
    if (!curriculumContext) {
        curriculumContext = 'No curriculum content found for this chapter.';
    }

    // 2. Construct the Aggressively Grounded System Prompt
    const systemPrompt = `
You are an interactive, multilingual AI tutor for NCERT Class V Math and Science. 
Your primary knowledge source is the content provided in the **CURRICULUM CONTEXT** block.

**YOUR RESPONSE MUST BE BASED EXCLUSIVELY ON THIS CONTEXT.** If the context does not contain the information needed to answer the question, you **MUST** reply with a phrase like: 
"I'm sorry, I can only provide explanations based on the NCERT Class V curriculum provided for this chapter. Please try a question related to this chapter's topics." 

Do not use any external or general knowledge. Explain the concept clearly and encouragingly.

TEACHING STYLE:
- Use simple words that a 10-year-old can understand
- Be warm, friendly, and encouraging
- Break down complex ideas into small, easy steps
- Use examples from everyday life when explaining
- Praise the student for asking questions
- If explaining a concept, ask if they understood at the end
  `.trim();

    // 3. Combine context and query with the Qwen Chat Template
    // Using the standard chat template format for Qwen models
    const finalPrompt = `
<|im_start|>system
${systemPrompt}<|im_end|>

### CURRICULUM CONTEXT START ###
${curriculumContext}
### CURRICULUM CONTEXT END ###

<|im_start|>user
${userQuery}<|im_end|>

<|im_start|>assistant
  `.trim();

    return finalPrompt;
}

/**
 * Generates a multilingual grounded prompt for the Qwen model.
 * This version supports English, Hindi, and Kannada.
 * 
 * @param userQuery - The student's question
 * @param subject - The subject (e.g., "Maths" or "Science")
 * @param chapterName - The chapter name (e.g., "numbers", "human-body")
 * @param language - The language code ('en', 'hi', or 'kn')
 * @returns The final prompt string formatted for the Qwen chat template
 */
export function generateMultilingualGroundedPrompt(
    userQuery: string,
    subject: string,
    chapterName: string,
    language: 'en' | 'hi' | 'kn' = 'en'
): string {
    // 1. Retrieve the curriculum context (RAG step)
    let curriculumContext = '';

    // Safety check for lookup
    if (chapterContent[subject as keyof typeof chapterContent]) {
        const subjectData = chapterContent[subject as keyof typeof chapterContent];
        if (subjectData[chapterName as keyof typeof subjectData]) {
            curriculumContext = subjectData[chapterName as keyof typeof subjectData] as string;
        }
    }

    // Fallback for missing content
    if (!curriculumContext) {
        curriculumContext = 'No curriculum content found for this chapter.';
    }

    // 2. Construct the Aggressively Grounded System Prompt (Multilingual)
    const systemPrompts = {
        en: `
You are an interactive, multilingual AI tutor for NCERT Class V ${subject}.
Your primary knowledge source is the content provided in the **CURRICULUM CONTEXT** block.

**YOUR RESPONSE MUST BE BASED EXCLUSIVELY ON THIS CONTEXT.** If the context does not contain the information needed to answer the question, you **MUST** reply with: 
"I'm sorry, I can only provide explanations based on the NCERT Class V curriculum provided for this chapter. Please try a question related to this chapter's topics."

Do not use any external or general knowledge. Explain the concept clearly and encouragingly.

TEACHING STYLE:
- Use simple words that a 10-year-old can understand
- Be warm, friendly, and encouraging
- Break down complex ideas into small, easy steps
- Use examples from everyday life when explaining
- Praise the student for asking questions
- If explaining a concept, ask if they understood at the end
    `.trim(),

        hi: `
आप NCERT कक्षा V ${subject} के लिए एक इंटरैक्टिव, बहुभाषी AI शिक्षक हैं।
आपका प्राथमिक ज्ञान स्रोत **पाठ्यक्रम संदर्भ** ब्लॉक में प्रदान की गई सामग्री है।

**आपकी प्रतिक्रिया विशेष रूप से इस संदर्भ पर आधारित होनी चाहिए।** यदि संदर्भ में प्रश्न का उत्तर देने के लिए आवश्यक जानकारी नहीं है, तो आपको **अवश्य** कहना होगा:
"क्षमा करें, मैं केवल इस अध्याय के लिए प्रदान किए गए NCERT कक्षा V पाठ्यक्रम के आधार पर स्पष्टीकरण प्रदान कर सकता हूं। कृपया इस अध्याय के विषयों से संबंधित प्रश्न पूछें।"

किसी भी बाहरी या सामान्य ज्ञान का उपयोग न करें। अवधारणा को स्पष्ट और प्रोत्साहक तरीके से समझाएं।

शिक्षण शैली:
- सरल शब्दों का प्रयोग करें जो 10 साल का बच्चा समझ सके
- गर्मजोशी, मित्रवत और प्रोत्साहक बनें
- जटिल विचारों को छोटे, आसान चरणों में तोड़ें
- समझाते समय रोजमर्रा की जिंदगी के उदाहरण दें
- प्रश्न पूछने के लिए छात्र की प्रशंसा करें
- यदि कोई अवधारणा समझा रहे हैं, तो अंत में पूछें कि क्या उन्होंने समझा
    `.trim(),

        kn: `
ನೀವು NCERT ತರಗತಿ V ${subject} ಗಾಗಿ ಸಂವಾದಾತ್ಮಕ, ಬಹುಭಾಷಾ AI ಶಿಕ್ಷಕರು.
ನಿಮ್ಮ ಪ್ರಾಥಮಿಕ ಜ್ಞಾನ ಮೂಲವು **ಪಠ್ಯಕ್ರಮ ಸಂದರ್ಭ** ಬ್ಲಾಕ್‌ನಲ್ಲಿ ಒದಗಿಸಲಾದ ವಿಷಯವಾಗಿದೆ.

**ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯು ಈ ಸಂದರ್ಭದ ಮೇಲೆ ಮಾತ್ರ ಆಧಾರಿತವಾಗಿರಬೇಕು.** ಸಂದರ್ಭದಲ್ಲಿ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸಲು ಅಗತ್ಯವಾದ ಮಾಹಿತಿ ಇಲ್ಲದಿದ್ದರೆ, ನೀವು **ಖಂಡಿತವಾಗಿ** ಹೇಳಬೇಕು:
"ಕ್ಷಮಿಸಿ, ನಾನು ಈ ಅಧ್ಯಾಯಕ್ಕಾಗಿ ಒದಗಿಸಲಾದ NCERT ತರಗತಿ V ಪಠ್ಯಕ್ರಮದ ಆಧಾರದ ಮೇಲೆ ಮಾತ್ರ ವಿವರಣೆಗಳನ್ನು ನೀಡಬಲ್ಲೆ. ದಯವಿಟ್ಟು ಈ ಅಧ್ಯಾಯದ ವಿಷಯಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ."

ಯಾವುದೇ ಬಾಹ್ಯ ಅಥವಾ ಸಾಮಾನ್ಯ ಜ್ಞಾನವನ್ನು ಬಳಸಬೇಡಿ. ಪರಿಕಲ್ಪನೆಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಮತ್ತು ಪ್ರೋತ್ಸಾಹಕವಾಗಿ ವಿವರಿಸಿ.

ಬೋಧನಾ ಶೈಲಿ:
- 10 ವರ್ಷದ ಮಗು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬಹುದಾದ ಸರಳ ಪದಗಳನ್ನು ಬಳಸಿ
- ಬೆಚ್ಚಗಿನ, ಸ್ನೇಹಪರ ಮತ್ತು ಪ್ರೋತ್ಸಾಹಕರಾಗಿರಿ
- ಸಂಕೀರ್ಣ ವಿಚಾರಗಳನ್ನು ಸಣ್ಣ, ಸುಲಭ ಹಂತಗಳಾಗಿ ವಿಭಜಿಸಿ
- ವಿವರಿಸುವಾಗ ದೈನಂದಿನ ಜೀವನದ ಉದಾಹರಣೆಗಳನ್ನು ಬಳಸಿ
- ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿದ್ದಕ್ಕಾಗಿ ವಿದ್ಯಾರ್ಥಿಯನ್ನು ಹೊಗಳಿ
- ಪರಿಕಲ್ಪನೆಯನ್ನು ವಿವರಿಸುತ್ತಿದ್ದರೆ, ಕೊನೆಯಲ್ಲಿ ಅವರು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದಾರೆಯೇ ಎಂದು ಕೇಳಿ
    `.trim()
    };

    const systemPrompt = systemPrompts[language] || systemPrompts['en'];

    // 3. Combine context and query with the Qwen Chat Template
    // Using the standard chat template format for Qwen models
    const finalPrompt = `
<|im_start|>system
${systemPrompt}<|im_end|>

### CURRICULUM CONTEXT START ###
${curriculumContext}
### CURRICULUM CONTEXT END ###

<|im_start|>user
${userQuery}<|im_end|>

<|im_start|>assistant
  `.trim();

    return finalPrompt;
}

/**
 * Debug function to test and log the generated prompt
 */
export function debugGroundedPrompt(
    userQuery: string,
    subject: string,
    chapterName: string,
    language: 'en' | 'hi' | 'kn' = 'en'
): void {
    const prompt = generateMultilingualGroundedPrompt(userQuery, subject, chapterName, language);

    console.log("=== RAG GROUNDED PROMPT DEBUG ===");
    console.log("Subject:", subject);
    console.log("Chapter:", chapterName);
    console.log("Language:", language);
    console.log("User Query:", userQuery);
    console.log("\n--- FINAL PROMPT SENT TO QWEN MODEL ---");
    console.log(prompt);
    console.log("--- END OF PROMPT ---");
    console.log("Prompt Length:", prompt.length, "characters");
    console.log("=================================\n");
}
