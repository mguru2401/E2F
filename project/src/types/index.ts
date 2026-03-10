export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  tagline: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}
