import React from 'react';
import clsx from 'clsx';
import { Rss } from 'react-feather';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';
import DarkMode from '@/components/DarkMode';

import styles from './Header.module.css';

function Header({ initialTheme, className, ...delegated }) {
  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>
        <DarkMode initialTheme={initialTheme} />
      </div>
    </header>
  );
}

export default Header;
