import { useState, useRef, useEffect } from 'react'
import '../styles/AIConcierge.css'

const quickReplies = [
  'What homes are available?',
  'Tell me about Sell Ready',
  'Schedule a consultation',
  'What\'s my home worth?',
]

const botReplies = {
  'What homes are available?':
    'Great question! Jake has access to all current MLS listings across Hampton Roads. I\'d recommend connecting with him directly for the most up-to-date properties. Want me to schedule a call?',
  'Tell me about Sell Ready':
    'The Sell Ready program connects eligible homeowners with Jake\'s contractor network to explore strategic pre-sale improvements. Qualifying costs may be deferred until closing under program terms. Results vary — shall I connect you with Jake to learn more?',
  'Schedule a consultation':
    'Absolutely! Jake offers free initial consultations for buyers and sellers. I\'ll connect you to his booking calendar. (Full booking integration launching soon — for now, contact Jake directly.)',
  'What\'s my home worth?':
    'Great first step! Jake offers complimentary home valuations. To get an accurate picture, he\'ll review your property details and recent local sales. Ready to get started?',
}

const DEFAULT_MESSAGE = {
  type: 'ai',
  text: 'Hi there! 👋 I\'m your Jake Maines Realty concierge. I can help you explore homes, learn about the Sell Ready program, or connect you with Jake. How can I assist you today?',
}

export default function AIConcierge() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [messages, setMessages] = useState([DEFAULT_MESSAGE])
  const [input,    setInput]    = useState('')
  const [typing,   setTyping]   = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen])

  const sendMessage = (text) => {
    if (!text.trim()) return
    const userMsg = { type: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const reply = botReplies[text] ||
        'Great question! For detailed answers specific to your situation, I\'d love to connect you with Jake directly. He\'s the local expert who can give you the most accurate guidance.'
      setMessages(prev => [...prev, { type: 'ai', text: reply }])
      setTyping(false)
    }, 1200)
  }

  return (
    <>
      {/* Chat panel */}
      <div
        className={`ai-concierge-panel ${isOpen ? 'is-open' : 'is-closed'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Jake Maines AI Concierge chat"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="ai-concierge-header">
          <div className="ai-concierge-header-left">
            <div className="ai-concierge-avatar" aria-hidden="true">
              🏡
              <span className="ai-online-dot" aria-label="Online" />
            </div>
            <div>
              <div className="ai-concierge-title">JM Concierge</div>
              <div className="ai-concierge-subtitle">Jake Maines Realty · AI Assistant</div>
            </div>
          </div>
          <button
            className="ai-concierge-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="ai-concierge-messages" role="log" aria-live="polite" aria-label="Chat messages">
          {messages.map((msg, i) => (
            <div key={i} className={msg.type === 'ai' ? 'ai-message' : 'user-message'}>
              <div className={msg.type === 'ai' ? 'ai-message-bubble' : 'user-message-bubble'}>
                {msg.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="ai-message">
              <div className="ai-typing-indicator" aria-label="Typing indicator">
                <span className="typing-dot" aria-hidden="true" />
                <span className="typing-dot" aria-hidden="true" />
                <span className="typing-dot" aria-hidden="true" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick replies */}
        <div className="ai-quick-replies" role="group" aria-label="Quick reply options">
          {quickReplies.map(qr => (
            <button
              key={qr}
              className="ai-quick-chip"
              onClick={() => sendMessage(qr)}
              id={`quick-reply-${qr.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 30)}`}
              aria-label={`Quick reply: ${qr}`}
            >
              {qr}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="ai-concierge-input-row">
          <input
            type="text"
            className="ai-concierge-input"
            placeholder="Ask me anything…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
            aria-label="Type your message"
            id="ai-chat-input"
          />
          <button
            className="ai-send-btn"
            onClick={() => sendMessage(input)}
            aria-label="Send message"
            id="ai-send-btn"
          >
            ↑
          </button>
        </div>

        <div className="ai-concierge-disclaimer" role="note">
          AI concierge — responses are informational only. Contact Jake for verified advice.
        </div>
      </div>

      {/* Floating trigger button */}
      <button
        className="ai-concierge-trigger"
        onClick={() => setIsOpen(v => !v)}
        aria-label={isOpen ? 'Close AI concierge chat' : 'Open AI concierge chat'}
        aria-expanded={isOpen}
        id="ai-concierge-trigger-btn"
      >
        <span className="ai-concierge-trigger-icon" aria-hidden="true">
          {isOpen ? '✕' : '🏡'}
        </span>
        {!isOpen && (
          <span className="ai-concierge-trigger-badge" aria-hidden="true">AI</span>
        )}
      </button>
    </>
  )
}
