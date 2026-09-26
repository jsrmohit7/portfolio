import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Trash2, Send, AlertCircle, Sparkles } from 'lucide-react';
import { sendMessage, DEMO_MODE } from '../../services/chatService.js';

export const ChatInterface = () => {
  const initialGreeting = {
    id: 'initial-greeting',
    sender: 'assistant',
    content: `Hello! I am Mohit's portfolio AI assistant. I have comprehensive knowledge of his software projects (MindCare AI X, Health Assistant), his work at RoomNexa, his hyperspectral deep learning research at BIT Mesra, and his technical toolkit.\n\nAsk me anything, or pick one of the suggested prompts below!`,
    timestamp: 'Online'
  };

  const [messages, setMessages] = useState([initialGreeting]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const messagesEndRef = useRef(null);
  const chatStreamRef = useRef(null);

  // Exact 5 suggested prompts requested
  const suggestedPrompts = [
    "Tell me about MindCare AI X",
    "What did Mohit do at RoomNexa?",
    "What is his LLM experience?",
    "Tell me about his research",
    "What technologies does he use?"
  ];

  // Auto-scroll inside the message container ONLY (not the page)
  const scrollToBottom = () => {
    if (chatStreamRef.current) {
      chatStreamRef.current.scrollTop = chatStreamRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Use requestAnimationFrame so DOM has updated before we measure scrollHeight
    const raf = requestAnimationFrame(() => scrollToBottom());
    return () => cancelAnimationFrame(raf);
  }, [messages, isLoading]);

  const handleSend = async (queryText) => {
    const textToSend = typeof queryText === 'string' ? queryText : inputValue;
    if (!textToSend || !textToSend.trim() || isLoading) return;

    setErrorMessage(null);
    const cleanPrompt = textToSend.trim();

    const userMessage = {
      id: `user-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      sender: 'user',
      content: cleanPrompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // UI ONLY talks to sendMessage(message, history)
      const reply = await sendMessage(cleanPrompt, messages);
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          sender: 'assistant',
          content: reply.content,
          timestamp: reply.timestamp,
          mode: reply.mode
        }
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      setErrorMessage("Unable to retrieve response. Please try asking again.");
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'assistant',
          content: "Sorry, I had trouble processing that query. Please try asking another question about Mohit's portfolio or contact him directly at mohitmahto99@gmail.com.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isError: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setErrorMessage(null);
    setMessages([
      {
        id: `reset-${Date.now()}`,
        sender: 'assistant',
        content: "Chat conversation cleared. How can I assist you with Mohit's background, research, or projects?",
        timestamp: 'Online'
      }
    ]);
  };

  return (
    <div
      className="ref-card"
      style={{
        maxWidth: '720px', // Slightly smaller and sleek as requested
        margin: '0 auto',
        backgroundColor: '#FFFFFF',
        border: '1px solid #DCDCDC',
        padding: 0,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          padding: '0.85rem 1.25rem',
          borderBottom: '1px solid #E5E5E5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#F9F9F9'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              backgroundColor: '#000000',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Bot size={16} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: '0.88rem', color: '#000000', lineHeight: 1.2 }}>
              Mohit Portfolio AI
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: '#8A8A8A' }}>
              FACTUAL KNOWLEDGE BASE
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.64rem',
              padding: '0.2rem 0.55rem',
              borderRadius: '0.3rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              color: '#000000',
              fontWeight: 700,
              letterSpacing: '0.04em'
            }}
          >
            {DEMO_MODE ? 'PORTFOLIO AI · DEMO MODE' : 'PORTFOLIO AI · GEMINI'}
          </span>

          <button
            onClick={handleClear}
            title="Clear Conversation"
            aria-label="Clear chat history"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#8A8A8A',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.15s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#000000')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A8A')}
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      {/* Message Stream */}
      <div
        ref={chatStreamRef}
        style={{
          height: '330px', // Sleeker, more compact height
          overflowY: 'auto',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
          backgroundColor: '#FFFFFF'
        }}
      >
        {messages.length === 0 ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: '#8A8A8A',
              textAlign: 'center',
              gap: '0.5rem'
            }}
          >
            <Sparkles size={24} color="#000000" />
            <p style={{ fontFamily: 'var(--font-main)', fontSize: '0.88rem', margin: 0, color: '#4A4A4A' }}>
              Ask anything about Mohit's projects, experience, research, or skills.
            </p>
          </div>
        ) : (
          messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  justifyContent: isUser ? 'flex-end' : 'flex-start',
                  alignItems: 'flex-start',
                  gap: '0.55rem'
                }}
              >
                {!isUser && (
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      backgroundColor: '#F7F7F7',
                      border: '1px solid #DCDCDC',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <Bot size={14} color="#000000" />
                  </div>
                )}

                <div
                  style={{
                    maxWidth: '82%',
                    padding: '0.75rem 1rem',
                    borderRadius: isUser ? '0.85rem 0.85rem 0.2rem 0.85rem' : '0.85rem 0.85rem 0.85rem 0.2rem',
                    backgroundColor: isUser ? '#000000' : '#F7F7F7',
                    color: isUser ? '#FFFFFF' : '#000000',
                    border: isUser ? '1px solid #000000' : '1px solid #E5E5E5',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {msg.content}
                  </div>
                  <div
                    style={{
                      marginTop: '0.35rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: isUser ? '#B0B0B0' : '#8A8A8A',
                      textAlign: 'right'
                    }}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {isUser && (
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <User size={13} />
                  </div>
                )}
              </div>
            );
          })
        )}

        {/* Typing / Loading Indicator */}
        {isLoading && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                backgroundColor: '#F7F7F7',
                border: '1px solid #DCDCDC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px'
              }}
            >
              <Bot size={14} color="#000000" />
            </div>

            <div
              style={{
                padding: '0.6rem 0.9rem',
                borderRadius: '0.85rem 0.85rem 0.85rem 0.2rem',
                backgroundColor: '#F7F7F7',
                border: '1px solid #E5E5E5',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#000000',
                  display: 'inline-block',
                  animation: 'typingDot 1.4s infinite ease-in-out',
                  animationDelay: '0s'
                }}
              />
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#000000',
                  display: 'inline-block',
                  animation: 'typingDot 1.4s infinite ease-in-out',
                  animationDelay: '0.2s'
                }}
              />
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#000000',
                  display: 'inline-block',
                  animation: 'typingDot 1.4s infinite ease-in-out',
                  animationDelay: '0.4s'
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#666666',
                  marginLeft: '0.35rem'
                }}
              >
                Thinking...
              </span>
            </div>
          </div>
        )}

        {errorMessage && (
          <div
            style={{
              padding: '0.5rem 0.75rem',
              borderRadius: '0.35rem',
              backgroundColor: '#FFF5F5',
              border: '1px solid #FED7D7',
              color: '#C53030',
              fontFamily: 'var(--font-main)',
              fontSize: '0.78rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <AlertCircle size={14} />
            <span>{errorMessage}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompts Bar */}
      <div
        style={{
          padding: '0.65rem 1rem',
          backgroundColor: '#F9F9F9',
          borderTop: '1px solid #E5E5E5',
          borderBottom: '1px solid #E5E5E5',
          display: 'flex',
          gap: '0.45rem',
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.64rem',
            color: '#8A8A8A',
            fontWeight: 700,
            alignSelf: 'center',
            flexShrink: 0
          }}
        >
          SUGGESTED:
        </span>
        {suggestedPrompts.map((promptText, i) => (
          <button
            key={i}
            onClick={() => handleSend(promptText)}
            disabled={isLoading}
            style={{
              padding: '0.3rem 0.65rem',
              borderRadius: '9999px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              color: '#000000',
              fontFamily: 'var(--font-main)',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: isLoading ? 'default' : 'pointer',
              opacity: isLoading ? 0.6 : 1,
              transition: 'all 0.15s ease',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#000000';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.borderColor = '#DCDCDC';
              }
            }}
          >
            {promptText}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        style={{
          padding: '0.75rem 1rem',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          gap: '0.6rem',
          alignItems: 'center'
        }}
      >
        <input
          type="text"
          placeholder="Ask a question about Mohit's projects, experience, or research..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
          style={{
            flex: 1,
            padding: '0.65rem 0.9rem',
            borderRadius: '0.45rem',
            border: '1px solid #DCDCDC',
            fontFamily: 'var(--font-main)',
            fontSize: '0.86rem',
            color: '#000000',
            outline: 'none',
            backgroundColor: '#F9F9F9'
          }}
          onFocus={(e) => (e.target.style.borderColor = '#000000')}
          onBlur={(e) => (e.target.style.borderColor = '#DCDCDC')}
        />

        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className="btn-solid"
          style={{
            padding: '0.65rem 1.15rem',
            borderRadius: '0.45rem',
            fontSize: '0.82rem',
            opacity: isLoading || !inputValue.trim() ? 0.45 : 1,
            cursor: isLoading || !inputValue.trim() ? 'not-allowed' : 'pointer'
          }}
        >
          <Send size={14} />
          <span>Ask</span>
        </button>
      </form>
    </div>
  );
};
