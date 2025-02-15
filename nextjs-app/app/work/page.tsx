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
      title: "SageNet",
      value: "sageNet",
    },
    {
      title: "Other",
      value: "other",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Work</p>
        <p className={styles.description}>
        My work spans experience design, interface design, UI engineering, and interactive digital arts. While these are unique fields, they each share elements of design thinking, systems thinking, and engineering in different ways. I am to use artistic exploration as a means of questioning innovative interaction paradigms in software design, and design as a ____(parag mital)____. Here, you'll find everything from UI designs to interactive installations and real-time web experiments, sortable by tags. I hope you find them interesting!
        </p>
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