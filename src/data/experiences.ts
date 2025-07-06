import { EducationalExperience, Experience } from '@/types/experience';
import { Language } from '@/types/language';

export const experiences: Record<Language, Experience[]> = {
  en: [
    {
      id: '1',
      type: 'education',
      initialDate: new Date('2015-09-01'),
      finalDate: new Date('2019-06-30'),
      content: {
        title: 'Bachelor of Science in Computer Science',
        description:
          'Bachelor of Science in Computer Science focused on the fundamentals of computer science, algorithms, and data structures. Developed problem-solving skills and gained experience in software development.',
        institution: 'University of Technology',
        insightsAndLearnings:
          'Learned the fundamentals of computer science, algorithms, and data structures. Developed problem-solving skills and gained experience in software development.'
      }
    } as EducationalExperience
  ],
  pt: [
    {
      id: '1',
      type: 'education',
      initialDate: new Date('2015-09-01'),
      finalDate: new Date('2019-06-30'),
      content: {
        title: 'Bacharelado em Ciência da Computação',
        description:
          'Bacharelado em Ciência da Computação com foco nos fundamentos da ciência da computação, algoritmos e estruturas de dados. Desenvolvi habilidades de resolução de problemas e ganhei experiência em desenvolvimento de software.',
        institution: 'Universidade de Tecnologia',
        insightsAndLearnings:
          'Aprendi os fundamentos da ciência da computação, algoritmos e estruturas de dados. Desenvolvi habilidades de resolução de problemas e ganhei experiência em desenvolvimento de software.'
      }
    } as EducationalExperience
  ]
};