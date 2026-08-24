import type { LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export type Project = {
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  websiteUrl: string;
  services: string[];
  status: "Live" | "In Development" | "Coming Soon";
  featured: boolean;
};
