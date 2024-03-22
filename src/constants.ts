import { Twitter, Building, Www, Home } from 'iconoir-react';

export const API_KEY = import.meta.env.VITE_API_KEY;

export const NOT_AVAILABLE = 'Not Available';


export const USER_FOOTER_INFO = {
  twitter_username: Twitter,
  location: Home,
  blog: Www,
  company: Building,
} as const;
