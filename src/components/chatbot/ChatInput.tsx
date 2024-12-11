import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <div className="p-4 border-t">
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSubmit}
          className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}