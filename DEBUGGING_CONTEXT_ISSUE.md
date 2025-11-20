# 🐛 Debugging Guide: Context Not Working

## Issue
The chatbot is showing the generic fallback message instead of using the selected chapter content.

## What We Fixed

### 1. Added Debug Logging
We added comprehensive logging to help identify the issue:

**On Component Mount:**
```typescript
useEffect(() => {
  console.log("=== CHAT COMPONENT MOUNTED ===");
  console.log("Location state:", location.state);
  console.log("Context from location:", context);
  console.log("AI Pipeline from location:", !!locationPipeline);
  console.log("AI Pipeline from context:", !!contextPipeline);
  console.log("Final AI Pipeline:", !!aiPipeline);
  console.log("==============================");
}, []);
```

**On Each Message:**
```typescript
console.log("=== CHAT DEBUG INFO ===");
console.log("AI Pipeline available:", !!aiPipeline);
console.log("Context available:", !!context);
console.log("Context details:", context);
console.log("======================");
```

### 2. Improved Error Messages
Now the chatbot will tell you specifically what's wrong:

- **No AI Pipeline + Has Context:** "I'm still loading the AI model. Please wait a moment..."
- **No Context:** "Please select a chapter from the Maths or Science chapters page..."

## How to Debug

### Step 1: Open Browser Console
1. Press **F12** to open Developer Tools
2. Go to the **Console** tab

### Step 2: Navigate to a Chapter
1. Go to Subjects → Maths → Numbers (or any chapter)
2. Look for this log in console:

```
=== CHAT COMPONENT MOUNTED ===
Location state: { pipeline: ..., context: { subject: 'Maths', chapter: 'numbers' } }
Context from location: { subject: 'Maths', chapter: 'numbers' }
AI Pipeline from location: true/false
AI Pipeline from context: true/false
Final AI Pipeline: true/false
==============================
```

### Step 3: Ask a Question
1. Type a question like "What is addition?"
2. Look for this log:

```
=== CHAT DEBUG INFO ===
AI Pipeline available: true/false
Context available: true/false
Context details: { subject: 'Maths', chapter: 'numbers' }
======================
```

### Step 4: Check RAG Debug Info
If everything is working, you should also see:

```
=== RAG GROUNDED PROMPT DEBUG ===
Subject: Maths
Chapter: numbers
Language: en
User Query: What is addition?

--- FINAL PROMPT SENT TO QWEN MODEL ---
<|im_start|>system
...
--- END OF PROMPT ---

=== MODEL RESPONSE ===
[AI's response]
=====================
```

## Common Issues and Solutions

### Issue 1: Context is null
**Symptoms:**
```
Context available: false
Context details: null
```

**Cause:** Navigation state not being passed correctly

**Solution:** Check that you're navigating from MathsChapters or ScienceChapters page

### Issue 2: AI Pipeline is null
**Symptoms:**
```
AI Pipeline available: false
```

**Cause:** Model hasn't loaded yet or failed to load

**Solution:** 
1. Wait for model to load (check loading screen)
2. Check browser console for WebGPU errors
3. Ensure browser supports WebGPU

### Issue 3: Context exists but AI Pipeline is null
**Symptoms:**
```
AI Pipeline available: false
Context available: true
Context details: { subject: 'Maths', chapter: 'numbers' }
```

**Response:** "I'm still loading the AI model. Please wait a moment..."

**Cause:** Model is still loading

**Solution:** Wait a few seconds and try again

### Issue 4: Both exist but still getting fallback
**Symptoms:**
```
AI Pipeline available: true
Context available: true
Context details: { subject: 'Maths', chapter: 'numbers' }
```
But still getting: "That's a great question! I can help you with Grade 5 Maths topics..."

**Cause:** Error in AI generation (check console for errors)

**Solution:** 
1. Look for "AI generation error:" in console
2. Check the error message
3. Might be a model inference issue

## Testing Checklist

- [ ] Navigate to a chapter from MathsChapters or ScienceChapters
- [ ] Check console logs show context is present
- [ ] Check console logs show AI pipeline is available
- [ ] Ask a question related to the chapter
- [ ] Verify RAG debug logs appear
- [ ] Verify response is grounded in chapter content

## Expected Console Output (Success Case)

```
=== CHAT COMPONENT MOUNTED ===
Location state: {
  pipeline: MLCEngine {...},
  context: { subject: 'Science', chapter: 'human-body' }
}
Context from location: { subject: 'Science', chapter: 'human-body' }
AI Pipeline from location: true
AI Pipeline from context: true
Final AI Pipeline: true
==============================

[User asks: "What is the function of the skull?"]

=== CHAT DEBUG INFO ===
AI Pipeline available: true
Context available: true
Context details: { subject: 'Science', chapter: 'human-body' }
======================

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

## Quick Test

Run this test to verify everything is working:

1. **Navigate:** Subjects → Science → Human Body
2. **Ask:** "What is the function of the skull?"
3. **Expected Response:** Should explain skull function based on chapter content
4. **Ask:** "What is photosynthesis?" (out of context)
5. **Expected Response:** Should refuse politely

## If Still Not Working

If you're still seeing the fallback message after checking all the above:

1. **Clear browser cache** and reload
2. **Check if model loaded** - look for "AI Ready (Offline)" in header
3. **Try a different chapter** - maybe the specific chapter has an issue
4. **Check browser compatibility** - WebGPU required
5. **Share console logs** - copy the entire console output for debugging

---

**Last Updated:** After adding debug logging  
**Status:** Ready for debugging
