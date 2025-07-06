import styles from './AboutMeSection.module.css';
import { Icon } from '../../components/Icon';
import { SectionTitle } from '../../components/SectionTitle';
import { defaultLanguage } from '@/data/languages';
import { aboutMeContent } from '@/dictionaries/aboutMe';
import { OptionalLanguage } from '@/types/language';

export const AboutMeSection = ({
  lang = defaultLanguage
}: OptionalLanguage) => {
  const dictionary = aboutMeContent[lang];

  return (
    <section className={styles['about-me-section']}>
      <article className={styles['about-me-section__lead']}>
        <SectionTitle
          prelude={dictionary.prelude}
          heading={dictionary.heading}
        />

        <p className={styles['about-me-section__lead-text']}>
          {dictionary.lead}
        </p>
      </article>
      <figure className={styles['about-me-section__avatar-wrapper']}>
        <img
          className={styles['about-me-section__avatar']}
          src={dictionary.avatar.src}
          alt={dictionary.avatar.alt}
          width={410}
          height={410}
        />
      </figure>

      <nav className={styles['about-me-section__nav']}>
        <Icon
          type='github'
          size='xl'
          title='Github'
        />
        <Icon
          type='linkedin'
          size='xl'
          title='LinkedIn'
        />
        <Icon
          type='twitch'
          size='xl'
          title='Twitch'
        />
        <Icon
          type='envelope'
          size='xl'
          title='E-mail'
        />
      </nav>
    </section>
  );
};
