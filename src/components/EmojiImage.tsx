/**
 * EmojiImage Component
 * Converts emoji to actual images using Twemoji CDN
 */

import React from 'react';

interface EmojiImageProps {
  emoji: string;
  size?: number;
  alt?: string;
  className?: string;
}

// Convert emoji to its unicode codepoint for Twemoji URL
function emojiToCodepoint(emoji: string): string {
  const codePoints = [];
  for (let i = 0; i < emoji.length; i++) {
    const code = emoji.codePointAt(i);
    if (code) {
      codePoints.push(code.toString(16));
      // Skip the next character if this is a surrogate pair
      if (code > 0xffff) i++;
    }
  }
  return codePoints.join('-');
}

export const EmojiImage: React.FC<EmojiImageProps> = ({ 
  emoji, 
  size = 32, 
  alt = emoji,
  className = ""
}) => {
  const codepoint = emojiToCodepoint(emoji);
  const imageUrl = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/${codepoint}.png`;
  
  return (
    <img 
      src={imageUrl}
      alt={alt}
      width={size}
      height={size}
      className={`inline-block ${className}`}
      style={{ verticalAlign: 'middle' }}
      loading="lazy"
      onError={(e) => {
        // Fallback to showing the emoji text if image fails to load
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const fallback = document.createTextNode(emoji);
        target.parentNode?.insertBefore(fallback, target);
      }}
    />
  );
};

export default EmojiImage;
