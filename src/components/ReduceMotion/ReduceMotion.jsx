'use client';
import React from 'react';
import { MotionConfig } from 'framer-motion';

export default function ReduceMotion({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
