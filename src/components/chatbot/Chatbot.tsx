import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Message } from '../../types';
import { FAQ_DATA } from '../../data/chatbot';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you today?", sender: 'bot' }
  ]);

  const findAnswer = (question: string): string => {
    const lowercaseQuestion = question.toLowerCase();
    const bestMatch = Object.entries(FAQ_DATA).find(([key]) => 
      lowercaseQuestion.includes(key)
    );
    
    return bestMatch ? bestMatch[1] : "I'm not sure about that. Please contact our team for more specific information.";
  };

  const handleSend = (message: string) => {
    const userMessage: Message = { text: message, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        text: findAnswer(message),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Chat with us</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </div>

          <ChatInput onSend={handleSend} />
        </div>
      )}
    </>
  );
}