# SLM Pre-loading Testing Guide

## Quick Test Checklist

### ✅ Basic Functionality Tests

1. **First-Time Load**
   - [ ] Clear browser cache (DevTools → Application → Clear storage)
   - [ ] Reload the app
   - [ ] Verify loading screen appears with:
     - AI Sathi mascot image
     - Progress bar (0% → 100%)
     - Status messages updating
     - "First time: ~80MB download" message
   - [ ] Wait for model to load completely
   - [ ] Verify app renders after loading completes

2. **Subsequent Loads (Cached)**
   - [ ] Reload the app (with cache)
   - [ ] Verify loading is faster (model loads from cache)
   - [ ] Verify app renders correctly

3. **Offline Mode**
   - [ ] Load the app once (to cache the model)
   - [ ] Open DevTools → Network → Set to "Offline"
   - [ ] Reload the app
   - [ ] Verify app loads and works completely offline
   - [ ] Test chat functionality in offline mode

### ✅ Navigation Tests

4. **Route Access**
   - [ ] Navigate to `/` (ClassSelection)
   - [ ] Navigate to `/subjects`
   - [ ] Navigate to `/maths-chapters`
   - [ ] Navigate to `/science-chapters`
   - [ ] Navigate to `/chat`
   - [ ] Verify no additional loading screens appear
   - [ ] Verify model is available on all pages

### ✅ Feature Integration Tests

5. **Chat Functionality**
   - [ ] Go to Chat page
   - [ ] Send a message
   - [ ] Verify AI responds using the loaded model
   - [ ] Check console for "AI Pipeline available: true"

6. **Translation**
   - [ ] Change language to Hindi
   - [ ] Verify UI translates
   - [ ] Change to Kannada
   - [ ] Verify UI translates
   - [ ] Check console for translation API calls

7. **RAG (Retrieval Augmented Generation)**
   - [ ] Select a chapter (e.g., Maths → Numbers)
   - [ ] Go to chat
   - [ ] Ask a question about the chapter
   - [ ] Verify response is grounded in chapter content
   - [ ] Check console for RAG debug logs

### ✅ Error Handling Tests

8. **WebGPU Not Available**
   - [ ] Test on browser without WebGPU (e.g., Firefox)
   - [ ] Verify error message: "Error loading model. Using fallback mode."
   - [ ] Verify app still works with rule-based responses

9. **Network Errors**
   - [ ] Clear cache
   - [ ] Set network to "Slow 3G" in DevTools
   - [ ] Reload app
   - [ ] Verify loading progress shows correctly
   - [ ] Verify app handles slow network gracefully

### ✅ Performance Tests

10. **Loading Time**
    - [ ] Measure first-time load (should show progress)
    - [ ] Measure cached load (should be much faster)
    - [ ] Verify no memory leaks (check DevTools → Memory)

11. **Model Availability**
    - [ ] Open DevTools → Console
    - [ ] Type: `window.aiPipeline` (should be accessible via context)
    - [ ] Verify model is loaded and ready

## Console Commands for Testing

### Check Model Status
```javascript
// In browser console
const { aiPipeline } = useLanguage(); // Won't work in console, use React DevTools instead
```

### React DevTools
1. Install React DevTools extension
2. Open DevTools → Components
3. Find `LanguageProvider`
4. Check `aiPipeline` in state
5. Should show MLCEngine object when loaded

### Network Tab
1. Open DevTools → Network
2. Filter by "wasm" or "model"
3. Verify model files are downloaded/cached

## Expected Behavior

### Loading Screen Should Show:
```
┌─────────────────────────────────────┐
│         [Mascot Image]              │
│                                     │
│           AI Sathi                  │
│                                     │
│   Checking GPU availability...     │
│                                     │
│   [████████████░░░░░░] 60%         │
│   60% complete                      │
│                                     │
│   First time: ~80MB download.      │
│   After that, works completely     │
│   offline! ✨                       │
└─────────────────────────────────────┘
```

### Status Messages Progression:
1. "Initializing AI model..."
2. "Checking GPU availability..."
3. "Loading Qwen 2.5 Model (WebLLM)..."
4. [Various WebLLM loading messages]
5. "Ready! Running on GPU 🚀"

### Console Logs to Expect:
```
=== CHAT DEBUG INFO ===
AI Pipeline available: true
Context available: true
Context details: { subject: 'Maths', chapter: 'numbers' }
======================
```

## Common Issues & Solutions

### Issue 1: Model Not Loading
**Symptoms:** Stuck at loading screen
**Check:**
- Browser supports WebGPU (Chrome/Edge 113+)
- No network errors in DevTools
- Sufficient disk space for cache

**Solution:**
- Try different browser
- Clear cache and retry
- Check browser console for errors

### Issue 2: Model Loaded but Not Available
**Symptoms:** Chat doesn't work, translations fail
**Check:**
- React DevTools → LanguageProvider → aiPipeline
- Console logs show "AI Pipeline available: false"

**Solution:**
- Verify ModelLoadingWrapper is wrapping routes
- Check LanguageContext integration
- Reload the app

### Issue 3: Slow Loading
**Symptoms:** Takes very long to load
**Check:**
- Network speed (first time requires ~80MB download)
- Browser cache (subsequent loads should be fast)

**Solution:**
- Wait for first-time download to complete
- Subsequent loads will be much faster
- Consider using faster network for first load

## Automated Testing (Future)

### Unit Tests
```typescript
describe('ModelLoadingWrapper', () => {
  it('should show loading screen initially', () => {
    // Test implementation
  });
  
  it('should load model and store in context', () => {
    // Test implementation
  });
  
  it('should render children after model loads', () => {
    // Test implementation
  });
});
```

### Integration Tests
```typescript
describe('App with Model Loading', () => {
  it('should load model before showing routes', () => {
    // Test implementation
  });
  
  it('should make model available on all pages', () => {
    // Test implementation
  });
});
```

## Performance Benchmarks

### Target Metrics:
- **First-time load:** < 30 seconds (on good network)
- **Cached load:** < 3 seconds
- **Model inference:** < 2 seconds per response
- **Memory usage:** < 500MB

### How to Measure:
1. Open DevTools → Performance
2. Start recording
3. Reload the app
4. Stop recording when app is ready
5. Analyze timeline

## Browser Compatibility

### Supported Browsers:
- ✅ Chrome 113+ (WebGPU support)
- ✅ Edge 113+ (WebGPU support)
- ⚠️ Firefox (WebGPU in development)
- ⚠️ Safari (WebGPU in development)

### Testing Matrix:
| Browser | Version | WebGPU | Status |
|---------|---------|--------|--------|
| Chrome  | 113+    | ✅     | Full   |
| Edge    | 113+    | ✅     | Full   |
| Firefox | Latest  | ❌     | Fallback|
| Safari  | Latest  | ❌     | Fallback|

## Deployment Checklist

Before deploying to production:
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Verify offline functionality
- [ ] Check model caching works
- [ ] Monitor loading performance
- [ ] Test error scenarios
- [ ] Verify fallback mode works
- [ ] Check console for errors
- [ ] Test with slow network
- [ ] Verify accessibility

## Monitoring in Production

### Key Metrics to Track:
1. Model loading success rate
2. Average loading time
3. Error rate
4. Browser compatibility issues
5. User drop-off during loading

### Analytics Events to Log:
- `model_load_start`
- `model_load_progress` (at 25%, 50%, 75%, 100%)
- `model_load_success`
- `model_load_error`
- `model_inference_start`
- `model_inference_complete`

## Support & Debugging

### User Reports Issue
1. Ask for browser version
2. Check if WebGPU is supported
3. Ask to clear cache and retry
4. Check browser console logs
5. Verify network connection
6. Test in incognito mode

### Developer Debugging
1. Check React DevTools
2. Monitor Network tab
3. Check Console logs
4. Use Performance profiler
5. Inspect Application cache
6. Test with different network speeds
