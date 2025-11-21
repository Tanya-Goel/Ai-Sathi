import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

// Simple markdown formatter for chat messages
const formatMarkdown = (text: string) => {
  // Split by lines to preserve structure
  const lines = text.split('\n');
  
  return lines.map((line, lineIndex) => {
    // Process inline markdown
    const parts: JSX.Element[] = [];
    let lastIndex = 0;
    
    // Match **bold**, *italic*, and `code`
    const regex = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`(.+?)`)|(^#{1,6}\s+(.+)$)/g;
    let match;
    
    while ((match = regex.exec(line)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(
          <span key={`text-${lineIndex}-${lastIndex}`}>
            {line.substring(lastIndex, match.index)}
          </span>
        );
      }
      
      // Add formatted text
      if (match[1]) {
        // Bold **text**
        parts.push(
          <strong key={`bold-${lineIndex}-${match.index}`} className="font-semibold">
            {match[2]}
          </strong>
        );
      } else if (match[3]) {
        // Italic *text*
        parts.push(
          <em key={`italic-${lineIndex}-${match.index}`} className="italic">
            {match[4]}
          </em>
        );
      } else if (match[5]) {
        // Code `text`
        parts.push(
          <code 
            key={`code-${lineIndex}-${match.index}`} 
            className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
          >
            {match[6]}
          </code>
        );
      } else if (match[7]) {
        // Heading # text
        parts.push(
          <strong key={`heading-${lineIndex}-${match.index}`} className="font-bold text-lg">
            {match[8]}
          </strong>
        );
      }
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < line.length) {
      parts.push(
        <span key={`text-${lineIndex}-${lastIndex}`}>
          {line.substring(lastIndex)}
        </span>
      );
    }
    
    // Return line with parts or empty line
    return (
      <span key={`line-${lineIndex}`}>
        {parts.length > 0 ? parts : line || '\u00A0'}
        {lineIndex < lines.length - 1 && <br />}
      </span>
    );
  });
};

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isAssistant = role === "assistant";

  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-2xl animate-in fade-in-0 slide-in-from-bottom-3",
        isAssistant ? "bg-card shadow-[var(--shadow-soft)]" : "bg-primary/10 ml-auto max-w-[85%]"
      )}
    >
      {isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      <div className="flex-1 space-y-2">
        <div className="text-foreground leading-relaxed">
          {formatMarkdown(content)}
        </div>
      </div>
      {!isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <User className="w-5 h-5 text-muted-foreground" />
        </div>
      )}
    </div>
  );
};
