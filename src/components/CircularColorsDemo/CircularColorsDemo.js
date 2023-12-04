'use client';
import React from 'react';
import clsx from 'clsx';
import { Play, Pause, RotateCcw } from 'react-feather';
import { motion } from 'framer-motion';

import Card from '@/components/Card';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './CircularColorsDemo.module.css';

const COLORS = [
  { label: 'red', value: 'hsl(348deg 100% 60%)' },
  { label: 'yellow', value: 'hsl(50deg 100% 55%)' },
  { label: 'blue', value: 'hsl(235deg 100% 65%)' },
];

function CircularColorsDemo() {
  // TODO: This value should increase by 1 every second:
  const [startTimer, setStartTimer] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(COLORS[0]);
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const id = React.useId();
  // TODO: This value should cycle through the colors in the
  // COLORS array:
  // const selectedColor = COLORS[0];

  React.useEffect(() => {
    if (!startTimer) return;
    let intervalTimer = window.setInterval(() => setTimeElapsed((prevT) => prevT + 1), 1000);
    return () => window.clearInterval(intervalTimer);
  }, [startTimer]);

  React.useEffect(() => {
    setSelectedColor(COLORS[timeElapsed % COLORS.length]);
  }, [timeElapsed]);

  return (
    <Card as="section" className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;

          return (
            <li className={styles.color} key={index}>
              {isSelected && (
                <motion.div className={styles.selectedColorOutline} layoutId={`${id}-outline`} />
              )}
              <div
                className={clsx(styles.colorBox, isSelected && styles.selectedColorBox)}
                style={{
                  backgroundColor: color.value,
                }}
              >
                <VisuallyHidden>{color.label}</VisuallyHidden>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button
            onClick={() => {
              if (!startTimer) {
                setStartTimer(true);
                setTimeElapsed((t) => t + 1);
              } else {
                setStartTimer(false);
              }
            }}
          >
            {startTimer ? <Pause /> : <Play />}
            <VisuallyHidden>Play</VisuallyHidden>
          </button>
          <button
            onClick={() => {
              setTimeElapsed(0);
            }}
          >
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
