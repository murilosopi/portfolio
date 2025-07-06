import { experiences } from '@/data/experiences';
import { Experience } from '@/types/experience';
import { Language } from '@/types/language';
import { ReactNode } from 'react';

interface JourneyContent {
  heading: ReactNode;
  prelude: ReactNode;
  experiences: Experience[];
}

export const journeyContent: Record<Language, JourneyContent> = {
  en: {
    prelude: (
      <>
        Know my <strong>experiencies</strong> exploring my
      </>
    ),
    heading: 'Journey',
    experiences: experiences.en
  },
  pt: {
    prelude: (
      <>
        Conheça minhas <strong>experiências</strong> explorando minha,
      </>
    ),
    heading: 'Jornada',
    experiences: experiences.pt
  }
};
