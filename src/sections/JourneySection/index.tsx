import { expiriencies } from '@/data/expiriencies';
import { SectionTitle } from '../../components/SectionTitle';
import { ExpiriencyTree } from './components/ExpiriencyTree';
import { sortExpiriencies } from '@/utils/expiriencies';

export const JourneySection = () => {
  const sortedExpiriencies = sortExpiriencies({ expiriencies });

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

      <ExpiriencyTree expiriences={sortedExpiriencies} />
    </section>
  );
};
