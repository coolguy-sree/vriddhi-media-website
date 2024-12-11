import React from 'react';
import { Message } from '../../types';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          message.sender === 'user'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}