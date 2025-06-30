import { EducationalExperience, Experience } from '@/types/experience';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Bachelor of Science in Computer Science',
    type: 'education',
    description: 'Bachelor of Science in Computer Science',
    initialDate: new Date('2015-09-01'),
    finalDate: new Date('2019-06-30'),
    insightsAndLearnings:
      'Learned the fundamentals of computer science, algorithms, and data structures. Developed problem-solving skills and gained experience in software development.',
    institution: 'University of Technology'
  } as EducationalExperience,
  {
    id: '2',
    title: 'Software Engineer',
    type: 'work',
    description: 'Software Engineer at Tech Company',
    initialDate: new Date('2020-01-01'),
    finalDate: new Date('2022-12-31')
  },
  {
    id: '3',
    title: 'Master of Science in Software Engineering',
    type: 'education',
    description: 'Master of Science in Software Engineering',
    initialDate: new Date('2021-09-01'),
    finalDate: new Date('2023-06-30')
  }
];
