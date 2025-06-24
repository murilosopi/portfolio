import { Experience } from '@/types/experience';

interface SortExperiencesProps {
  experiences: Experience[];
}
export const sortExperiences = ({ experiences }: SortExperiencesProps) => {
  return experiences.sort((a, b) => {
    const aDate = a.finalDate || a.initialDate;
    const bDate = b.finalDate || b.initialDate;

    if (aDate < bDate) return -1;
    if (aDate > bDate) return 1;
    return 0;
  });
};
