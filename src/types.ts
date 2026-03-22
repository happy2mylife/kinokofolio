import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

export interface MediaItemData {
  tag: string;
  title: string;
  desc: string;
  link?: string;
  year?: number | string;
}

export interface MediaCategory {
  category: string;
  icon: ReactNode;
  items: MediaItemData[];
}

export interface CareerDetail {
  text: string;
  link?: string;
}

export interface CareerItem {
  title: string;
  description?: string;
  tech?: string[];
  details?: CareerDetail[];
}

export interface CareerTab {
  title: string;
  icon: ReactNode;
  color: string;
  content: CareerItem[];
}

export interface QualificationItemData {
  name: string;
  link?: string;
}

export interface QualificationGroup {
  category: string;
  icon: ReactNode;
  items: QualificationItemData[];
}

export interface SocialLinkData {
  icon: ReactNode;
  href: string;
  label: string;
}

