import { experiences } from '@/data/experiences';
import { SectionTitle } from '../../components/SectionTitle';
import { ExperienceTree } from './components/ExperienceTree';
import { sortExperiences } from '@/utils/experiences';

export const JourneySection = () => {
  const sortedExperiences = sortExperiences({ experiences });

  return (
    <section>
      <SectionTitle
        prelude={
          <>
            Know my <strong>experiencies</strong> exploring my
          </>
        }
        heading='Journey'
      />

      <ExperienceTree experiences={sortedExperiences} />
    </section>
  );
};
