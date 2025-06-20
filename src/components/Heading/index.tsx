import classNames from "classnames";
import styles from "./Heading.module.css";
import React, { JSX } from "react";

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  variant?: "primary";
  className?: string;
};

export const Heading = ({
  children,
  as: Tag = "h2",
  variant,
  className: classNameProp = "",
  ...props
}: HeadingProps) => {
  const className = classNames(styles.heading, {
    [styles[`heading--${variant}`]]: !!variant,
    [classNameProp]: !!classNameProp
  });

  return (
    <Tag
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
};
