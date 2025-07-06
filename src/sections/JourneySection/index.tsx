import { SectionTitle } from '../../components/SectionTitle';
import { ExperienceTree } from './components/ExperienceTree';
import { sortExperiences } from '@/utils/experiences';
import { defaultLanguage } from '@/data/languages';
import { journeyContent } from '@/dictionaries/journey';
import { OptionalLanguage } from '@/types/language';

export const JourneySection = ({
  lang = defaultLanguage
}: OptionalLanguage) => {
  const dictionary = journeyContent[lang];

  const sortedExperiences = sortExperiences({
    experiences: dictionary.experiences
  });

  return (
    <section>
      <SectionTitle
        prelude={dictionary.prelude}
        heading={dictionary.heading}
      />

      <ExperienceTree
        experiences={sortedExperiences}
        lang={lang}
      />
    </section>
  );
};
