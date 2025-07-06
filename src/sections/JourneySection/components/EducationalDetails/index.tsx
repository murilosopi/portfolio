import { Heading } from '@/components/Heading';
import styles from './EducationalDetails.module.css';
import { EducationalExperience } from '@/types/experience';
import { If } from '@/components/If';
import { OptionalLanguage } from '@/types/language';
import { defaultLanguage } from '@/data/languages';
import { experiencesContent } from '@/dictionaries/experiences';

export const EducationalDetails = ({
  experience,
  lang = defaultLanguage
}: {
  experience: EducationalExperience;
} & OptionalLanguage) => {
  const { initialDate, finalDate, content } = experience;

  const { insightsAndLearnings, period, institution } =
    experiencesContent[lang];

  const renderPeriod = () => {
    return period.template
      .replace(
        '{{f}}',
        `<strong>${initialDate.toLocaleDateString(lang, { dateStyle: 'long' })}</strong>`
      )
      .replace(
        '{{u}}',
        finalDate
          ? `<strong>${finalDate.toLocaleDateString(lang, { dateStyle: 'long' })}</strong>`
          : `<strong>${period.now}</strong>`
      );
  };

  return (
    <ul className={styles['educational-details']}>
      <li>
        <Heading
          as='h4'
          leftIcon={'lightbulb'}
        >
          {insightsAndLearnings.title}
        </Heading>
        {content.insightsAndLearnings}
      </li>
      <li>
        <Heading
          as='h4'
          leftIcon={'calendarRange'}
        >
          {period.title}
        </Heading>
        <span dangerouslySetInnerHTML={{ __html: renderPeriod() }} />
      </li>

      <If condition={!!content.institution}>
        <li>
          <Heading
            as='h4'
            leftIcon={'book'}
          >
            {institution.title}
          </Heading>
          <strong>{content.institution}</strong>
        </li>
      </If>
    </ul>
  );
};
