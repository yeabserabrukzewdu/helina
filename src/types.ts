export interface Course {
  id: string;
  title: string;
  titleAmharic: string;
  description: string;
  price: string;
  image: string;
  tools: string[];
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  date: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}
