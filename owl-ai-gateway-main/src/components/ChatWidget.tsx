import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! 👋 How can I help you learn about AI today?", isUser: false },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setMessage("");
    setIsTyping(true);
    
    // Simulate response with typing indicator
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to explore our courses!",
          isUser: false,
        },
      ]);
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110",
          isOpen
            ? "bg-muted text-foreground rotate-90"
            : "bg-gradient-to-br from-primary to-secondary text-primary-foreground animate-pulse-glow"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {!isOpen && (
        <div className="fixed bottom-20 right-6 z-50 animate-bounce">
          <div className="bg-accent text-accent-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            1
          </div>
        </div>
      )}

      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-80 sm:w-96 glass rounded-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right shadow-2xl",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        <div className="bg-gradient-to-r from-primary via-secondary to-accent p-4 animate-gradient">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                <span className="text-lg">🦉</span>
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground flex items-center gap-2">
                Owl AI Support
                <Sparkles size={14} />
              </h4>
              <p className="text-xs text-primary-foreground/80">Online • Usually replies instantly</p>
            </div>
          </div>
        </div>

        <div className="h-80 overflow-y-auto p-4 space-y-3 bg-background/50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={cn(
                "flex",
                msg.isUser ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] p-3 rounded-2xl text-sm animate-in slide-in-from-bottom-2 duration-300",
                  msg.isUser
                    ? "bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-br-sm shadow-lg"
                    : "bg-muted text-foreground rounded-bl-sm"
                )}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-muted text-foreground p-3 rounded-2xl rounded-bl-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-border bg-card">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-muted rounded-xl px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <Button 
              size="icon" 
              onClick={handleSend} 
              className="shrink-0 glow-primary hover:scale-110 transition-transform"
              disabled={!message.trim()}
            >
              <Send size={18} />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Powered by Owl AI • We typically reply in minutes
          </p>
        </div>
      </div>
    </>
  );
}
