export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  category: string;
  features: string[];
  image?: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export interface DemoRequestFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
  industry: string;
  productInterest: string;
  preferredDate: string;
  notes?: string;
}

export interface NewsletterFormData {
  email: string;
}
