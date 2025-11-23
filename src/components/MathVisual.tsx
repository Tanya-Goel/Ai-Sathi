/**
 * MathVisual Component
 * Interactive visual representations for math problems using Twemoji images
 */

import React from 'react';
import EmojiImage from './EmojiImage';

interface MathVisualProps {
  emoji: string;
  count1: number;
  count2?: number;
  operation?: '+' | '-' | '×' | '÷';
  result?: number;
  size?: number;
  showEquation?: boolean;
}

const MathVisual: React.FC<MathVisualProps> = ({
  emoji,
  count1,
  count2,
  operation = '+',
  result,
  size = 40,
  showEquation = true,
}) => {
  const renderEmojiGroup = (count: number, label?: string) => (
    <div className="flex flex-wrap items-center gap-1 justify-center">
      {label && <span className="text-sm font-medium text-gray-600 w-full text-center mb-1">{label}</span>}
      <div className="flex flex-wrap gap-1 justify-center">
        {Array.from({ length: count }, (_, i) => (
          <EmojiImage 
            key={`emoji-${i}`}
            emoji={emoji} 
            size={size}
            className="transition-transform hover:scale-110"
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="my-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
      <div className="flex flex-col gap-4 items-center">
        {/* First group */}
        <div className="flex items-center gap-3">
          {renderEmojiGroup(count1)}
        </div>

        {/* Operation symbol */}
        {count2 !== undefined && (
          <>
            <div className="text-3xl font-bold text-purple-600">
              {operation}
            </div>

            {/* Second group */}
            <div className="flex items-center gap-3">
              {renderEmojiGroup(count2)}
            </div>
          </>
        )}

        {/* Equals line */}
        {result !== undefined && (
          <>
            <div className="w-full border-t-2 border-dashed border-purple-300"></div>
            
            {/* Result */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl font-bold text-green-600">=</div>
              {renderEmojiGroup(result)}
            </div>
          </>
        )}

        {/* Equation text */}
        {showEquation && count2 !== undefined && (
          <div className="mt-2 px-4 py-2 bg-white rounded-lg shadow-sm">
            <span className="text-2xl font-bold text-gray-800">
              {count1} {operation} {count2} {result !== undefined && `= ${result}`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MathVisual;
