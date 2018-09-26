export interface Conversation {
  id: string;
  from: {
    name: string;
    email: string;
    image: string;
  };
  title: string;
  messages: any[];
}
