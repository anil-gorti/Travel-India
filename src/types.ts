export interface User {
  id: string;
  name: string;
  avatar: string;
  isVerified: boolean;
  yaarScore: number;
  bio?: string;
  joinDate?: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  text: string;
  timestamp: string;
  isUser: boolean;
  isVerified?: boolean;
}

export interface Meetup {
  id: string;
  title: string;
  host: User;
  location: string;
  distance?: string;
  participants: number;
  maxParticipants: number;
  category: 'Food' | 'Culture' | 'Trekking' | 'Heritage' | 'Adventure';
  startTime: string;
  duration: string;
  date: string;
  imageUrl: string;
}

export interface Vouch {
  id: string;
  authorName: string;
  authorAvatar: string;
  text: string;
  timestamp: string;
  rating?: number;
}
