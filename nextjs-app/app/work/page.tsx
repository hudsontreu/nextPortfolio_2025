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
        <p className={styles.description}>
        My work falls into multiple categories, including UX design, experience design, audiovisual experiments,
        audiovisual installations, and interactive technology. While these can be very different mediums,
        they all share elements of design, creativity and systems engineering and I have trouble organizing
        them and reducing them to a single category. For that reason, I have included all works, from UI designs 
        to audiovisual installations, sortable by tags. I hope you find them interesting!
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