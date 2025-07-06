import { Language } from '@/types/language';
import { ReactNode } from 'react';

interface AboutMeContent {
  heading: ReactNode;
  prelude: ReactNode;
  lead: ReactNode;
  avatar: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const aboutMeContent: Record<Language, AboutMeContent> = {
  en: {
    heading: 'Software Developer',
    prelude: (
      <>
        Hello! I am <strong>Murilo Sopi</strong>,
      </>
    ),
    lead: "A text to inspire the public. Wow. That's a really amazing phrase...",
    avatar: {
      src: '/images/avatar.jpg',
      alt: 'a man with black, long and curly hair, wearing a black jacket and a black t-shirt, smiling at the camera',
      width: 410,
      height: 410
    }
  },
  pt: {
    heading: 'Software Developer',
    prelude: (
      <>
        Olá! Eu sou o <strong>Murilo Sopi</strong>,
      </>
    ),
    lead: 'Um texto para inspirar o público. Uau. Essa é uma frase realmente incrível...',
    avatar: {
      src: '/images/avatar.jpg',
      alt: 'um homem com cabelo preto, longo e cacheado, vestindo uma jaqueta preta e uma camiseta preta, sorrindo para a câmera',
      width: 410,
      height: 410
    }
  }
};
