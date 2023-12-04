'use client';
import React from 'react';
import { Sun, Moon } from 'react-feather';
import VisuallyHidden from '@/components/VisuallyHidden';
import { LIGHT_TOKENS, DARK_TOKENS } from '@/constants';
import styles from './DarkMode.module.css';
import Cookie from 'js-cookie';
// import { cookie } from 'next/headers'; // only works on Server Component.
// import styles from "./DarkMode.module.scss";

export default function DarkMode({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    // flip theme
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    // set cookie
    Cookie.set('theme-color', nextTheme, { expires: 1000 });
    // change theme state
    setTheme(nextTheme);

    // Get Root Element
    const root = document.documentElement;
    const colors = nextTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;
    // Create 'data-color-theme' attribute
    root.setAttribute('data-color-theme', nextTheme);
    // Add each color variable to Root.
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <button className={styles.action} onClick={handleClick}>
      {theme === 'light' ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}
// import DarkMode from "@/components/DarkMode";
