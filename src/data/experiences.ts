import {
  EducationalExperience,
  Experience,
  WorkExperience
} from '@/types/experience';
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
    } as EducationalExperience,
    {
      id: '2',
      type: 'work',
      initialDate: new Date('2020-01-01'),
      finalDate: new Date('2021-12-31'),
      content: {
        company: 'Tech Solutions Inc.',
        title: 'Software Engineer',
        description:
          'Worked as a Software Engineer at Tech Solutions Inc., where I developed web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
        role: 'Software Engineer',
        insightsAndLearnings:
          'Developed skills in web development, team collaboration, and delivering high-quality software solutions.'
      }
    } as WorkExperience
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
    } as EducationalExperience,
    {
      id: '2',
      type: 'work',
      initialDate: new Date('2020-01-01'),
      finalDate: new Date('2021-12-31'),
      content: {
        company: 'Tech Solutions Inc.',
        title: 'Engenheiro de Software',
        description:
          'Trabalhei como Engenheiro de Software na Tech Solutions Inc., onde desenvolvi aplicações web usando tecnologias modernas. Colaborei com equipes multifuncionais para entregar soluções de software de alta qualidade.',
        role: 'Engenheiro de Software',
        insightsAndLearnings:
          'Desenvolvi habilidades em desenvolvimento web, colaboração em equipe e entrega de soluções de software de alta qualidade.'
      }
    } as WorkExperience
  ]
};
