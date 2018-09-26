export interface Message {
  date: number;
  from: {
    name: string;
    email: string;
    image: string;
  };
  content: string;
}
