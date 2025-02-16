"use client";

import { ProjectGrid } from "../components/project-grid";
import { Tabs } from "../components/tabs";
import styles from "./page.module.css";
import { useState } from "react";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const tabs = [
    {
      title: "All",
      value: "all",
    },
    {
      title: "Software Tools",
      value: "softwareTools",
    },
    {
      title: "Installations",
      value: "installations",
    },
    {
      title: "Time-Based Media",
      value: "timeBasedMedia",
    },
    {
      title: "Web Experiments",
      value: "webExperiments",
    },
    {
      title: "SageNet",
      value: "sageNet",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Work</p>
        <p className={styles.description}>
        Here, you'll find everything from UI designs to interactive installations and real-time web experiments, sortable by tags. I hope you find them interesting!        </p>
      </div>
      <div className={styles.content}>
        <Tabs 
          tabs={tabs} 
          className={styles.filterButtons}
          onTabChange={(tab) => setActiveFilter(tab.value as typeof activeFilter)}
        />
        <div className={styles.projectsContainer}>
          <ProjectGrid filter={activeFilter} />
        </div>
      </div>
    </div>
  );
}