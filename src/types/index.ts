// Type definitions for the Torem project

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface PQRS {
  id: string;
  type: 'complaint' | 'request' | 'suggestion' | 'maintenance' | 'plumbing' | 'electrical' | 'internet' | 'other';
  title: string;
  description: string;
  area: string;
  priority: string;
  createdAt: Date;
  author: User;
  status?: 'pending' | 'in-progress' | 'resolved' | 'closed';
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}
