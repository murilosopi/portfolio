'use client';

interface TreeProps {
  items?: Array<TreeItem>;
  variant?: ColorVariant;
}

export interface TreeItem {
  key: string;
  content: React.ReactNode;
  side: 'left' | 'right';
}

import { ColorVariant } from '@/constants/colors';
import styles from './TreeList.module.css';
import classNames from 'classnames';

export const TreeList = ({ items = [], variant = 'light' }: TreeProps) => {
  return (
    <div
      className={classNames(
        styles['tree-list__wrapper'],
        styles[`tree-list__wrapper--${variant}`]
      )}
    >
      <ol className={styles['tree-list']}>
        {items.map((item) => (
          <li
            key={item.key}
            className={styles['tree-list__item']}
            data-side={item.side}
          >
            {item.content}
          </li>
        ))}
      </ol>

      <div className={styles['tree-list__trunk']} />
    </div>
  );
};
