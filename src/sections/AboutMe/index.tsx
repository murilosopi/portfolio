import Image from "next/image";

import styles from "./AboutMe.module.css";
import { Icon } from "../../components/Icon";
import { SectionTitle } from "../../components/SectionTitle";

export const AboutMe = () => {
  return (
    <section className={styles["about-me"]}>
      <article className={styles["about-me__lead"]}>
        <SectionTitle
          prelude={
            <>
              {"Hello! I'am "}
              <strong>Murilo Sopi</strong>,
            </>
          }
          heading='Software Developer'
        />

        <p className={styles["about-me__lead-text"]}>
          {
            "A text to inspire the public. Wow. That's a really amazing phrase..."
          }
        </p>
      </article>
      <figure className={styles["about-me__avatar-wrapper"]}>
        <Image
          className={styles["about-me__avatar"]}
          src={"/images/avatar.jpg"}
          alt='a man with black, long and curly hair'
          width={410}
          height={410}
        />
      </figure>

      <nav className={styles["about-me__nav"]}>
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
