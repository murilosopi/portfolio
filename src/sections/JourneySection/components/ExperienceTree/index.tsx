import { TreeItem, TreeList } from '@/components/TreeList';
import { Experience } from '@/types/experience';
import { ExperienceCard } from '../ExperienceCard';

export interface ExperienceTreeProps {
  experiences: Experience[];
}

export const ExperienceTree = ({ experiences }: ExperienceTreeProps) => {
  const mapExperiencesToTreeItems = (experiences: Experience[]): TreeItem[] => {
    return experiences.map((experience) => {
      const isEducation = experience.type === 'education';

      return {
        key: experience.id,
        content: <ExperienceCard experience={experience} />,
        side: isEducation ? 'right' : 'left'
      };
    });
  };

  return (
    <TreeList
      items={mapExperiencesToTreeItems(experiences)}
      variant='primary'
    />
  );
};
