"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { getChatbotReply } from "@/lib/chatbotReply";

type Role = "user" | "bot";

interface Msg {
  id: string;
  role: Role;
  text: string;
}

export default function ChatWidget() {
  const { chatbot } = siteConfig;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  const openChat = useCallback(() => {
    setOpen(true);
    setMessages((m) =>
      m.length === 0 ? [{ id: "welcome", role: "bot", text: chatbot.welcomeMessage }] : m,
    );
  }, [chatbot.welcomeMessage]);

  const closeChat = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  const send = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const userMsg: Msg = {
        id: `u-${Date.now()}`,
        role: "user",
        text: trimmed,
      };
      const reply = getChatbotReply(trimmed, chatbot.faqs, chatbot.fallbackMessage);
      const botMsg: Msg = {
        id: `b-${Date.now()}`,
        role: "bot",
        text: reply,
      };

      setMessages((m) => [...m, userMsg, botMsg]);
      setInput("");
    },
    [chatbot.faqs, chatbot.fallbackMessage],
  );

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3" data-testid="chat-widget">
      {open && (
        <div
          id="chat-panel"
          className="w-[min(100vw-2rem,22rem)] rounded-2xl border border-orange-200/80 bg-white/95 shadow-2xl shadow-orange-200/40 backdrop-blur-xl overflow-hidden flex flex-col max-h-[min(70vh,28rem)]"
          role="dialog"
          aria-label={chatbot.title}
        >
          <div className="flex items-center justify-between gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
            <span className="font-bold text-sm">{chatbot.title}</span>
            <button
              type="button"
              onClick={closeChat}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div
            ref={listRef}
            className="flex-1 overflow-y-auto px-3 py-3 space-y-3 text-sm"
            aria-live="polite"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[92%] rounded-2xl px-3 py-2 leading-relaxed ${
                    m.role === "user"
                      ? "bg-orange-500 text-white rounded-br-md"
                      : "bg-orange-50 text-slate-700 border border-orange-100 rounded-bl-md"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {messages.length <= 1 && (
            <div className="px-3 pb-2 flex flex-wrap gap-1.5">
              {chatbot.suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-orange-200 text-orange-700 bg-orange-50/80 hover:bg-orange-100 transition-colors text-left"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            className="p-3 border-t border-orange-100 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <label htmlFor="chat-input" className="sr-only">
              {chatbot.placeholder}
            </label>
            <input
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={chatbot.placeholder}
              className="flex-1 min-w-0 rounded-xl border border-orange-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-300"
              autoComplete="off"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-orange-500 text-white p-2.5 hover:bg-orange-600 transition-colors shadow-md shadow-orange-200"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => (open ? closeChat() : openChat())}
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white pl-4 pr-1.5 py-1.5 shadow-lg shadow-orange-300/50 hover:shadow-orange-400/60 transition-shadow font-semibold text-sm"
        aria-expanded={open}
        aria-controls="chat-panel"
        data-testid="chat-toggle"
      >
        {open ? "Close" : "Chat"}
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="w-5 h-5" />
        </span>
      </button>
    </div>
  );
}
