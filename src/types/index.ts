export interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}