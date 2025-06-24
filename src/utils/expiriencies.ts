import { Experience } from '@/types/expirience';

interface SortExpirienciesProps {
  expiriencies: Experience[];
  
}
export const sortExpiriencies = ({ expiriencies }: SortExpirienciesProps) => {
  return expiriencies.sort((a, b) => {
    const aDate = a.finalDate || a.initialDate;
    const bDate = b.finalDate || b.initialDate;

    if (aDate < bDate) return -1;
    if (aDate > bDate) return 1;
    return 0;
  });
};
