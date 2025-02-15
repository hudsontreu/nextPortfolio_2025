'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

type Tab = {
  title: string;
  value: string;
};

interface TabsProps {
  tabs: Tab[];
  className?: string;
  onTabChange?: (tab: Tab) => void;
}

export function Tabs({ tabs, className = '', onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeTabElement = tabsRef.current[tabs.findIndex(tab => tab.value === activeTab.value)];
    if (activeTabElement) {
      const { offsetWidth, offsetLeft } = activeTabElement;
      setDimensions({ width: offsetWidth, left: offsetLeft });
    }
  }, [activeTab, tabs]);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <motion.div
        className={styles.activeBackground}
        animate={{
          width: dimensions.width,
          x: dimensions.left,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 35 }}
      />
      {tabs.map((tab, index) => (
        <button
          key={tab.value}
          ref={el => (tabsRef.current[index] = el)}
          onClick={() => handleTabClick(tab)}
          className={`${styles.tab} ${activeTab.value === tab.value ? styles.active : ''}`}
        >
          <span className={styles.tabTitle}>
            {tab.title}
          </span>
        </button>
      ))}
    </div>
  );
}
