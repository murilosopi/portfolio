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
        Discover the <strong>stories and lessons</strong> behind my
      </>
    ),
    heading: 'Journey',
    experiences: experiences.en
  },
  pt: {
    prelude: (
      <>
        Venha conhecer as <strong>histórias e aprendizados</strong> que moldaram
        minha
      </>
    ),
    heading: 'Jornada',
    experiences: experiences.pt
  }
};
