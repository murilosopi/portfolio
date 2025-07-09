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
  emailDialog: {
    text: {
      beforeEmail?: string;
      afterEmail?: string;
    };
    subtext: string;
    closeButton: string;
    clipboardButton: {
      text: string;
      copiedText: string;
    };
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
    lead: (
      <>
        Technology as a tool, creativity as a language, and impact as the
        purpose. Coding experiences that <i>transform</i> the world.
      </>
    ),
    avatar: {
      src: '/images/avatar.jpg',
      alt: 'a man with black, long and curly hair, wearing a black jacket and a black t-shirt, smiling at the camera',
      width: 410,
      height: 410
    },
    emailDialog: {
      text: {
        beforeEmail: 'You can contact me via e-mail at ',
        afterEmail: ' to questions, suggestions, or just to say hi!'
      },
      subtext:
        'If you prefer, you can also copy the e-mail address to your clipboard by clicking the button below.',
      closeButton: 'Close',
      clipboardButton: {
        text: 'Copy e-mail',
        copiedText: 'E-mail copied'
      }
    }
  },
  pt: {
    heading: 'Software Developer',
    prelude: (
      <>
        Olá! Eu sou o <strong>Murilo Sopi</strong>,
      </>
    ),
    lead: (
      <>
        Tecnologia como ferramenta, criatividade como linguagem e impacto como
        propósito. Codificando experiências que <i>transformam</i> o mundo.
      </>
    ),
    avatar: {
      src: '/images/avatar.jpg',
      alt: 'um homem com cabelo preto, longo e cacheado, vestindo uma jaqueta preta e uma camiseta preta, sorrindo para a câmera',
      width: 410,
      height: 410
    },
    emailDialog: {
      text: {
        beforeEmail: 'Você pode entrar em contato comigo por e-mail em ',
        afterEmail: ' para perguntas, sugestões ou apenas para falar um oi!'
      },
      subtext:
        'Se preferir, você também pode copiar o endereço de e-mail para a área de transferência clicando no botão abaixo.',
      closeButton: 'Fechar',
      clipboardButton: {
        text: 'Copiar e-mail',
        copiedText: 'E-mail copiado'
      }
    }
  }
};
