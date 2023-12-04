import React from 'react';
import { Work_Sans, Spline_Sans_Mono } from 'next/font/google';
import clsx from 'clsx';
import ReduceMotion from '@/components/ReduceMotion';

import { LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles.css';

import { cookies } from 'next/headers';

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

function RootLayout({ children }) {
  // TODO: Dynamic theme depending on user preference
  const savedTheme = cookies().get('theme-color');
  const initialTheme = savedTheme?.value || 'light';

  return (
    <ReduceMotion>
      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        // setting all the defaults on the HTML Root Element
        data-color-theme={initialTheme}
        style={initialTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
      >
        <body>
          <Header initialTheme={initialTheme} />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ReduceMotion>
  );
}

export default RootLayout;
