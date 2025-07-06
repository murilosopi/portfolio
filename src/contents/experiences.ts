import { Language } from '@/types/language';

interface ExperienceContent {
  insightsAndLearnings: {
    title: string;
  };
  period: {
    beforeInitialDate: string;
    beforeFinalDate: string;
    now: string;
    title: string;
  };
  institution: {
    title: string;
  };
  company: {
    title: string;
  };
  role: {
    title: string;
  };
  description: {
    title: string;
  };
}

export const experiencesContent: Record<Language, ExperienceContent> = {
  en: {
    insightsAndLearnings: {
      title: 'Insights and Learnings'
    },
    period: {
      beforeInitialDate: 'From ',
      beforeFinalDate: ' until ',
      now: 'now',
      title: 'Period'
    },
    institution: {
      title: 'Institution'
    },
    company: {
      title: 'Company'
    },
    role: {
      title: 'Role'
    },
    description: {
      title: 'Description'
    }
  },
  pt: {
    insightsAndLearnings: {
      title: 'Insights e Aprendizados'
    },
    period: {
      beforeInitialDate: 'De ',
      beforeFinalDate: ' até ',
      now: 'o momento',
      title: 'Período'
    },
    institution: {
      title: 'Instituição'
    },
    company: {
      title: 'Empresa'
    },
    role: {
      title: 'Cargo'
    },
    description: {
      title: 'Descrição'
    }
  }
};

export const experiencesActionsContent: Record<Language, string> = {
  en: 'View details',
  pt: 'Ver detalhes'
};
