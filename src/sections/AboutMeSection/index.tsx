import styles from './AboutMeSection.module.scss';
import { Icon } from '../../components/Icon';
import { SectionTitle } from '../../components/SectionTitle';
import { defaultLanguage } from '@/data/languages';
import { aboutMeContent } from '@/contents/aboutMe';
import { OptionalLanguage } from '@/types/language';
import { emailAddress, socialNetworks } from '@/data/social';
import { EmailToggler } from './components/EmailToggler';

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
        {socialNetworks.map((network) => (
          <Icon
            key={network.type}
            tag='a'
            type={network.icon}
            size='xl'
            title={network.title}
            href={network.url}
            target='_blank'
          />
        ))}
        <EmailToggler
          email={emailAddress}
          lang={lang}
        />
      </nav>
    </section>
  );
};
