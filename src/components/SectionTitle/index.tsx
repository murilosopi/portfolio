import React from "react";
import styles from "./SectionTitle.module.css";
import { Heading } from "../Heading";

interface SectionTitleProps {
  heading: React.ReactNode;
  prelude?: React.ReactNode;
  postlude?: React.ReactNode;
}

export const SectionTitle = ({
  heading,
  prelude,
  postlude,
}: SectionTitleProps) => {
  return (
    <div>
      {prelude && <p className={styles["section-title__prelude"]}>{prelude}</p>}

      <Heading as="h2" variant="primary">
        {heading}
      </Heading>

      {postlude && (
        <p className={styles["section-title__postlude"]}>{postlude}</p>
      )}
    </div>
  );
};
