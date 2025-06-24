import { TreeItem, TreeList } from '@/components/TreeList';
import { Experience } from '@/types/expirience';
import { ExpiriencyCard } from '../ExpriencyCard';

export interface ExpiriencyTreeProps {
  expiriences: Experience[];
}

export const ExpiriencyTree = ({ expiriences }: ExpiriencyTreeProps) => {
  const mapExpiriencesToTreeItems = (expiriences: Experience[]): TreeItem[] => {
    return expiriences.map((expirience) => {
      const isEducation = expirience.type === 'education';

      return {
        key: expirience.id,
        content: <ExpiriencyCard experience={expirience} />,
        side: isEducation ? 'right' : 'left'
      };
    });
  };

  return (
    <TreeList
      items={mapExpiriencesToTreeItems(expiriences)}
      variant='primary'
    />
  );
};
