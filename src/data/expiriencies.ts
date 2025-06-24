import { Experience } from '@/types/expirience';

export const expiriencies: Experience[] = [
  {
    id: '1',
    type: 'education',
    description: 'Bachelor of Science in Computer Science',
    initialDate: new Date('2015-09-01'),
    finalDate: new Date('2019-06-30')
  },
  {
    id: '2',
    type: 'work',
    description: 'Software Engineer at Tech Company',
    initialDate: new Date('2020-01-01'),
    finalDate: new Date('2022-12-31')
  },
  {
    id: '3',
    type: 'education',
    description: 'Master of Science in Software Engineering',
    initialDate: new Date('2021-09-01'),
    finalDate: new Date('2023-06-30')
  }
];
