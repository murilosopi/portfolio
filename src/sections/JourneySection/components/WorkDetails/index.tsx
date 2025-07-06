import { Heading } from '@/components/Heading';
import styles from './WorkDetails.module.css';
import { WorkExperience } from '@/types/experience';
import { OptionalLanguage } from '@/types/language';
import { defaultLanguage } from '@/data/languages';
import { experiencesContent } from '@/contents/experiences';

export const WorkDetails = ({
  experience,
  lang = defaultLanguage
}: {
  experience: WorkExperience;
} & OptionalLanguage) => {
  const { initialDate, finalDate, content } = experience;

  const { role, period, company, insightsAndLearnings, description } =
    experiencesContent[lang];

  const formattedInitialDate = initialDate.toLocaleDateString(lang, {
    dateStyle: 'long'
  });

  const formattedFinalDate = finalDate
    ? finalDate.toLocaleDateString(lang, { dateStyle: 'long' })
    : period.now;

  return (
    <ul className={styles['work-details']}>
      {/* Description */}
      <li>
        <Heading
          as='h4'
          leftIcon={'type'}
        >
          {description.title}
        </Heading>
        {content.description}
      </li>

      {/* Insights and Learnings */}
      <li>
        <Heading
          as='h4'
          leftIcon={'lightbulb'}
        >
          {insightsAndLearnings.title}
        </Heading>
        {content.insightsAndLearnings}
      </li>

      {/* Company */}
      <li>
        <Heading
          as='h4'
          leftIcon={'company'}
        >
          {company.title}
        </Heading>
        <strong>{content.company}</strong>
      </li>

      {/* Role */}
      <li>
        <Heading
          as='h4'
          leftIcon={'person'}
        >
          {role.title}
        </Heading>
        {content.role}
      </li>

      {/* Period */}
      <li>
        <Heading
          as='h4'
          leftIcon={'calendarRange'}
        >
          {period.title}
        </Heading>
        {period.beforeInitialDate} <strong>{formattedInitialDate}</strong>
        {period.beforeFinalDate} <strong>{formattedFinalDate}</strong>
      </li>
    </ul>
  );
};
