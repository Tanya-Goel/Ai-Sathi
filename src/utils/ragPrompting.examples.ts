/**
 * Example usage and test cases for the RAG prompting functions
 * 
 * This file demonstrates how to use the RAG utilities to generate
 * grounded prompts for the Qwen model.
 */

import {
    generateGroundedPrompt,
    generateMultilingualGroundedPrompt,
    debugGroundedPrompt
} from './ragPrompting';

// ============================================
// Example 1: Basic English Prompt
// ============================================
console.log("=== EXAMPLE 1: Basic English Prompt ===\n");

const basicPrompt = generateGroundedPrompt(
    "What is the function of the skull?",
    "Science",
    "human-body"
);

console.log("Generated Prompt:");
console.log(basicPrompt);
console.log("\n");

// ============================================
// Example 2: Multilingual Prompt (Hindi)
// ============================================
console.log("=== EXAMPLE 2: Hindi Prompt ===\n");

const hindiPrompt = generateMultilingualGroundedPrompt(
    "खोपड़ी का कार्य क्या है?",
    "Science",
    "human-body",
    "hi"
);

console.log("Generated Hindi Prompt:");
console.log(hindiPrompt);
console.log("\n");

// ============================================
// Example 3: Multilingual Prompt (Kannada)
// ============================================
console.log("=== EXAMPLE 3: Kannada Prompt ===\n");

const kannadaPrompt = generateMultilingualGroundedPrompt(
    "ತಲೆಬುರುಡೆಯ ಕಾರ್ಯ ಏನು?",
    "Science",
    "human-body",
    "kn"
);

console.log("Generated Kannada Prompt:");
console.log(kannadaPrompt);
console.log("\n");

// ============================================
// Example 4: Math Question
// ============================================
console.log("=== EXAMPLE 4: Math Question ===\n");

const mathPrompt = generateMultilingualGroundedPrompt(
    "How do I add large numbers?",
    "Maths",
    "numbers",
    "en"
);

console.log("Generated Math Prompt:");
console.log(mathPrompt);
console.log("\n");

// ============================================
// Example 5: Using Debug Function
// ============================================
console.log("=== EXAMPLE 5: Debug Function ===\n");

debugGroundedPrompt(
    "What are the conditions needed for seed germination?",
    "Science",
    "plants",
    "en"
);

// ============================================
// Example 6: Handling Missing Content
// ============================================
console.log("=== EXAMPLE 6: Missing Content Handling ===\n");

const missingPrompt = generateMultilingualGroundedPrompt(
    "Tell me about chemistry",
    "Science",
    "chemistry", // This chapter doesn't exist
    "en"
);

console.log("Prompt with missing content:");
console.log(missingPrompt);
console.log("\n");

// ============================================
// Test Cases for Integration
// ============================================

/**
 * Test Case 1: Valid question within context
 * 
 * Subject: Science
 * Chapter: human-body
 * Question: "What is the function of the skull?"
 * 
 * Expected Behavior:
 * - Retrieves human-body chapter content
 * - Includes content about skeletal system
 * - Model should answer: "The skull protects the brain..."
 */

/**
 * Test Case 2: Question outside context
 * 
 * Subject: Science
 * Chapter: human-body
 * Question: "What is photosynthesis?"
 * 
 * Expected Behavior:
 * - Retrieves human-body chapter content
 * - Content doesn't mention photosynthesis
 * - Model should respond: "I'm sorry, I can only provide explanations..."
 */

/**
 * Test Case 3: Math calculation
 * 
 * Subject: Maths
 * Chapter: numbers
 * Question: "How do I multiply 4521 by 25?"
 * 
 * Expected Behavior:
 * - Retrieves numbers chapter content
 * - Content includes multiplication examples
 * - Model should explain the process step-by-step
 */

/**
 * Test Case 4: Language switching
 * 
 * Subject: Science
 * Chapter: weather
 * Question (Hindi): "मौसम और जलवायु में क्या अंतर है?"
 * 
 * Expected Behavior:
 * - System prompt in Hindi
 * - Context in English (from chapterContent)
 * - Model responds in Hindi
 */

/**
 * Test Case 5: Edge case - Empty question
 * 
 * Subject: Maths
 * Chapter: shapes
 * Question: ""
 * 
 * Expected Behavior:
 * - Prompt still generated
 * - Model should ask for clarification
 */

// ============================================
// Usage in Chat Component
// ============================================

/**
 * In Chat.tsx, the function is used like this:
 * 
 * ```typescript
 * const getAIResponse = async (userMessage: string): Promise<string> => {
 *   if (aiPipeline && context?.subject && context?.chapter) {
 *     try {
 *       // Generate grounded prompt
 *       const groundedPrompt = generateMultilingualGroundedPrompt(
 *         userMessage,
 *         context.subject,
 *         context.chapter,
 *         language
 *       );
 * 
 *       // Send to model
 *       const result = await aiPipeline.chat.completions.create({
 *         messages: [{ role: "user", content: groundedPrompt }],
 *         temperature: 0.7,
 *         max_tokens: 200,
 *       });
 * 
 *       return result.choices[0].message.content;
 *     } catch (error) {
 *       console.error("AI generation error:", error);
 *     }
 *   }
 *   
 *   // Fallback to rule-based responses
 *   return getFallbackResponse(userMessage);
 * };
 * ```
 */

// ============================================
// Performance Considerations
// ============================================

/**
 * Prompt Length Analysis:
 * 
 * - System prompt: ~500-800 characters (varies by language)
 * - Chapter content: ~500-1500 characters
 * - User query: ~50-200 characters
 * - Total: ~1000-2500 characters
 * 
 * Token Estimation:
 * - Average: ~250-600 tokens for input
 * - Max response: 200 tokens
 * - Total: ~450-800 tokens per interaction
 * 
 * This is well within Qwen 2.5-0.5B's context window.
 */

// ============================================
// Debugging Tips
// ============================================

/**
 * 1. Check Console Logs:
 *    - Look for "=== RAG GROUNDED PROMPT DEBUG ==="
 *    - Verify subject and chapter are correct
 *    - Check if curriculum context is populated
 * 
 * 2. Verify Context Retrieval:
 *    - Ensure chapterContent has the chapter
 *    - Check spelling of subject/chapter names
 *    - Verify case sensitivity (e.g., "Maths" not "maths")
 * 
 * 3. Test Grounding:
 *    - Ask questions clearly outside the context
 *    - Model should refuse to answer
 *    - If it answers, grounding may be weak
 * 
 * 4. Language Issues:
 *    - Verify language code is correct ('en', 'hi', 'kn')
 *    - Check if system prompt is in the right language
 *    - Model may still respond in English if trained primarily on English
 */

export {
    // Export examples for testing
    basicPrompt,
    hindiPrompt,
    kannadaPrompt,
    mathPrompt,
    missingPrompt
};
