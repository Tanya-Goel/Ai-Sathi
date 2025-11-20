# RAG Implementation for Grounded AI Responses

## Overview
This document describes the implementation of Retrieval-Augmented Generation (RAG) to ensure the Qwen 2.5-0.5B model provides responses strictly grounded in NCERT Class V curriculum content.

## Problem Statement
Previously, the AI tutor was generating generic responses that weren't strictly based on the curriculum content from `chapterContent.ts`. This implementation resolves that issue by:

1. **Retrieving** the exact curriculum content for the selected chapter
2. **Augmenting** the prompt with strict grounding instructions
3. **Generating** responses that are exclusively based on the provided context

## Implementation Components

### 1. RAG Utility Module (`src/utils/ragPrompting.ts`)

This module contains three main functions:

#### `generateGroundedPrompt()`
- **Purpose**: Creates a basic grounded prompt in English
- **Parameters**: 
  - `userQuery`: Student's question
  - `subject`: "Maths" or "Science"
  - `chapterName`: Chapter identifier (e.g., "numbers", "human-body")
- **Returns**: Formatted prompt string with Qwen chat template

#### `generateMultilingualGroundedPrompt()`
- **Purpose**: Creates a grounded prompt with multilingual support
- **Parameters**: Same as above + `language` ('en', 'hi', or 'kn')
- **Returns**: Formatted prompt string in the selected language
- **Features**:
  - Supports English, Hindi, and Kannada
  - Includes aggressive grounding instructions
  - Uses Qwen's chat template format (`<|im_start|>` and `<|im_end|>`)

#### `debugGroundedPrompt()`
- **Purpose**: Debug utility to log the generated prompt
- **Usage**: Automatically called in development to verify prompt structure

### 2. Prompt Structure

The generated prompt follows this structure:

```
<|im_start|>system
[System prompt with strict grounding rules]<|im_end|>

### CURRICULUM CONTEXT START ###
[Retrieved chapter content from chapterContent.ts]
### CURRICULUM CONTEXT END ###

<|im_start|>user
[User's question]<|im_end|>

<|im_start|>assistant
```

### 3. Grounding Rules

The system prompt includes these **CRITICAL RULES**:

1. ✅ Answer ONLY using information from the provided context
2. ✅ If context doesn't contain the answer, explicitly state: "I'm sorry, I can only provide explanations based on the NCERT Class V curriculum provided for this chapter."
3. ❌ NEVER use external or general knowledge
4. ❌ NEVER make up information

### 4. Teaching Style Guidelines

The prompt also includes teaching style instructions:
- Use simple words for 10-year-olds
- Be warm, friendly, and encouraging
- Break down complex ideas into small steps
- Use everyday life examples
- Praise students for asking questions
- Check for understanding

## Integration in Chat Component

### Modified `getAIResponse()` Function

The function in `src/pages/Chat.tsx` now:

1. **Checks** if AI pipeline and context are available
2. **Generates** the grounded prompt using `generateMultilingualGroundedPrompt()`
3. **Logs** the prompt for debugging (via `debugGroundedPrompt()`)
4. **Sends** the formatted prompt to the Qwen model
5. **Returns** the model's response
6. **Falls back** to rule-based responses if AI is unavailable

### Key Changes

```typescript
// OLD: Manual context retrieval and prompt construction
let contextText = "";
const systemPrompts = { en: `...`, hi: `...`, kn: `...` };
const messages = [
  { role: "system", content: systemPrompts[language] },
  { role: "user", content: userMessage }
];

// NEW: Using RAG utility function
const groundedPrompt = generateMultilingualGroundedPrompt(
  userMessage,
  context.subject,
  context.chapter,
  language
);
const result = await aiPipeline.chat.completions.create({
  messages: [{ role: "user", content: groundedPrompt }]
});
```

## How It Works

### Step-by-Step Flow

1. **User selects a chapter** (e.g., Science → Human Body)
2. **User asks a question** (e.g., "What is the function of the skull?")
3. **RAG retrieval**: System looks up `chapterContent['Science']['human-body']`
4. **Prompt generation**: Creates formatted prompt with:
   - System instructions (in selected language)
   - Full chapter content as context
   - User's question
5. **Model inference**: Qwen 2.5-0.5B processes the grounded prompt
6. **Response validation**: Model should only use the provided context
7. **Display**: Response shown to user

### Example Debug Output

When you ask a question, the console will show:

```
=== RAG GROUNDED PROMPT DEBUG ===
Subject: Science
Chapter: human-body
Language: en
User Query: What is the function of the skull?

--- FINAL PROMPT SENT TO QWEN MODEL ---
<|im_start|>system
You are an interactive, multilingual AI tutor for NCERT Class V Science...
<|im_end|>

### CURRICULUM CONTEXT START ###
Chapter: The Human Body
Key Concepts:
1. Skeletal System: Bones, joints...
### CURRICULUM CONTEXT END ###

<|im_start|>user
What is the function of the skull?<|im_end|>

<|im_start|>assistant
--- END OF PROMPT ---
Prompt Length: 1234 characters
=================================

=== MODEL RESPONSE ===
The skull protects the brain. It's like a hard helmet...
=====================
```

## Benefits of This Implementation

1. **✅ Grounded Responses**: Model can only use curriculum content
2. **✅ Multilingual Support**: Works in English, Hindi, and Kannada
3. **✅ Debugging**: Easy to verify what context is being used
4. **✅ Maintainable**: Centralized prompt logic in utility module
5. **✅ Fallback**: Gracefully handles missing content or AI errors
6. **✅ Reusable**: Can be used in other components if needed

## Testing the Implementation

### Test Cases

1. **Valid Question (In Context)**
   - Question: "What is the function of the skull?"
   - Expected: Answer based on human-body chapter content
   
2. **Invalid Question (Out of Context)**
   - Question: "What is photosynthesis?" (while in human-body chapter)
   - Expected: "I'm sorry, I can only provide explanations based on..."

3. **Language Switching**
   - Switch to Hindi/Kannada
   - Expected: Prompt and response in selected language

4. **Missing Context**
   - No chapter selected
   - Expected: Fallback to rule-based responses

### How to Test

1. Run the application: `npm run dev`
2. Select a subject and chapter
3. Open browser console (F12)
4. Ask questions and observe the debug logs
5. Verify the model stays within the curriculum context

## Troubleshooting

### Issue: Model still gives generic responses

**Solution**: Check the debug logs to verify:
- Context is being retrieved correctly
- Prompt includes the curriculum content
- System instructions are in the prompt

### Issue: Model says "I don't have information" for valid questions

**Solution**: 
- Verify the question relates to the chapter content
- Check if `chapterContent.ts` has sufficient detail
- Consider adding more content to the chapter

### Issue: Prompt is too long

**Solution**:
- Current max_tokens is 200 for responses
- If context is very large, consider chunking
- Monitor token usage in console

## Future Enhancements

1. **Vector Search**: Implement semantic search for better retrieval
2. **Conversation History**: Include previous Q&A in context
3. **Dynamic Chunking**: Split large chapters into smaller contexts
4. **Confidence Scoring**: Add model confidence in responses
5. **Feedback Loop**: Allow users to rate response quality

## Files Modified

- ✅ Created: `src/utils/ragPrompting.ts` (New RAG utility module)
- ✅ Modified: `src/pages/Chat.tsx` (Integrated RAG prompting)
- ✅ No changes to: `src/data/chapterContent.ts` (Content source)

## Conclusion

This implementation ensures that the AI tutor provides accurate, curriculum-grounded responses while maintaining multilingual support and a friendly teaching style. The aggressive grounding approach prevents the model from hallucinating or using external knowledge, making it a reliable educational tool for NCERT Class V students.
