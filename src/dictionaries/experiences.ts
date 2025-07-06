import { Language } from '@/types/language';

interface ExperienceContent {
  insightsAndLearnings: {
    title: string;
  };
  period: {
    template: string;
    now: string;
    title: string;
  };
  institution: {
    title: string;
  };
}

export const experiencesContent: Record<Language, ExperienceContent> = {
  en: {
    insightsAndLearnings: {
      title: 'Insights and Learnings'
    },
    period: {
      template: 'From {{f}} until {{u}}',
      now: 'now',
      title: 'Period'
    },
    institution: {
      title: 'Institution'
    }
  },
  pt: {
    insightsAndLearnings: {
      title: 'Insights e Aprendizados'
    },
    period: {
      template: 'De {{f}} até {{u}}',
      now: 'o momento',
      title: 'Período'
    },
    institution: {
      title: 'Instituição'
    }
  }
};

export const experiencesActionsContent: Record<Language, string> = {
  en: 'View details',
  pt: 'Ver detalhes'
};
