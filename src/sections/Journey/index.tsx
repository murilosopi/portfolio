import styles from "./Journey.module.css";
import { SectionTitle } from "../../components/SectionTitle";

export const Journey = () => {
  return (
    <section className={styles["journey"]}>
      <SectionTitle
        prelude={
          <>
            Know my <strong>experiencies</strong> exploring my
          </>
        }
        heading='Journey'
      />
    </section>
  );
};
