import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

const FAQ_DATA = {
  "what services do you offer": "We offer web development, digital marketing, branding, and business growth solutions.",
  "how can i contact you": "You can reach us through the contact form on our website or email us at contact@vriddhi.media",
  "what is your pricing": "Our pricing varies based on project requirements. Please contact us for a custom quote.",
  "how long does a project take": "Project timelines vary depending on scope and complexity. Typically, websites take 4-8 weeks.",
  "do you offer maintenance": "Yes, we offer ongoing maintenance and support packages for all our services."
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([
    {text: "Hello! How can I help you today?", sender: 'bot'}
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = {text: input, sender: 'user' as const};
    setMessages(prev => [...prev, userMessage]);

    // Simple response logic
    const response = {
      text: findAnswer(input.toLowerCase()),
      sender: 'bot' as const
    };

    setTimeout(() => {
      setMessages(prev => [...prev, response]);
    }, 500);

    setInput('');
  };

  const findAnswer = (question: string) => {
    const bestMatch = Object.entries(FAQ_DATA).find(([key]) => 
      question.includes(key)
    );
    
    return bestMatch ? bestMatch[1] : "I'm not sure about that. Please contact our team for more specific information.";
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
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
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
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}