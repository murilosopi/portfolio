import { TreeItem, TreeList } from '@/components/TreeList';
import { Experience } from '@/types/experience';
import { ExperienceCard } from '../ExperienceCard';
import { OptionalLanguage } from '@/types/language';
import { defaultLanguage } from '@/data/languages';
export interface ExperienceTreeProps extends OptionalLanguage {
  experiences: Experience[];
}

export const ExperienceTree = ({ experiences, lang = defaultLanguage }: ExperienceTreeProps) => {
  const mapExperiencesToTreeItems = (experiences: Experience[]): TreeItem[] => {
    return experiences.map((experience) => {
      const side = experience.type === 'education' ? 'right' : 'left';

      return {
        key: experience.id,
        content: (
          <ExperienceCard
            experience={experience}
            side={side}
            lang={lang}
          />
        ),
        side
      };
    });
  };

  return (
    <TreeList
      items={mapExperiencesToTreeItems(experiences)}
      variant='primary-condensed'
    />
  );
};
