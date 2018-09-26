import { Message } from './message';

export interface Thread {
  id: string;
  from: {
    name: string;
    email: string;
    image: string;
  };
  subject: string;
  messages: Message[];
}
