import { Fira_Sans_Extra_Condensed } from 'next/font/google';

export const firaSans = Fira_Sans_Extra_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-sans'
});
