import { IconType } from '@/components/Icon';

export interface SocialNewtwork {
  type:
    | 'github'
    | 'linkedin'
    | 'twitter'
    | 'tiktok'
    | 'discord'
    | 'twitch'
    | 'reddit'
    | 'stackoverflow'
    | 'medium'
    | 'devto'
    | 'instagram'
    | 'facebook'
    | 'email'
    | 'youtube';
  title: string;
  url: string;
  icon: IconType;
  username?: string;
}
