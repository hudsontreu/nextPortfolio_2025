'use client';

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from 'react';
import styles from "./experiment-template.module.css";

interface ExperimentTemplateProps {
  experiment: {
    _id: string;
    _type: 'experiments';
    title: string;
    category: string;
    description: string;
    projectPath: string;
    tags: string[];
    url: string;
    methods: string[];
    date: string;
    videos?: Array<{
      url?: string;
      file?: {
        asset: {
          _ref: string;
        };
      };
      fileUrl?: string;
      caption?: string;
      loop?: boolean;
      autoplay?: boolean;
      hideControls?: boolean;
      muted?: boolean;
    }>;
  };
}

export default function ExperimentTemplate({ experiment }: ExperimentTemplateProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleIframeError = useCallback((e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    console.error('Iframe loading error:', e);
    console.log('Attempted path:', `/experiments/${experiment.projectPath}/index.html`);
  }, [experiment.projectPath]);

  console.log('Rendering experiment:', {
    category: experiment.category,
    video: experiment.video,
    videoUrl: experiment.videoUrl,
    fullExperiment: experiment
  });

  const handleFullscreen = useCallback(() => {
    const element = experiment.category === 'webExperiments' ? iframeRef.current : videoRef.current;
    if (!element) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    }
  }, [experiment.category]);

  return (
    <article className={styles.experiment}>
      <div className={styles.nav}>
      <Link href="/work" className={`${styles.backLink} underline-animation`}>← Work</Link>
      </div>
      
      <div className={styles.content}>

        <header className={styles.header}>
          <div className={styles.metadata}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Title</span>
              <span className={styles.metaValue}>{experiment.title}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Date</span>
              <span className={styles.metaValue}>{experiment.date}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Tags</span>
              <span className={styles.metaValue}>
                {experiment.tags?.map((tag: string) => (
                  <span key={tag}>{tag}</span>
                ))}
              </span>
            </div>
            <button 
              className={`${styles.fullscreenButton} underline-animation`}
              onClick={handleFullscreen}
            >
              Enter Fullscreen
            </button>
          </div>
        </header>
        

        {experiment.description && (    
        <div className={styles.description_block}>
          <p className={styles.description}>
            {experiment.description}
          </p>
          </div>
        )}

        {experiment.category === 'webExperiments' ? (
          <div className={styles.iframeContainer}>
            <iframe
              ref={iframeRef}
              src={`/experiments/${experiment.projectPath}/index.html`}
              className={styles.experimentFrame}
              onError={handleIframeError}
              title={experiment.title}
              loading="lazy"
              allow="accelerometer; camera; gyroscope; microphone; xr-spatial-tracking"
            />
          </div>
        ) : experiment.category === 'timeBasedMedia' && experiment.videos?.length ? (
          <div className={styles.videosContainer}>
            {experiment.videos.map((video, index) => (
              <div key={index} className={styles.videoWrapper}>
                <video
                  ref={index === 0 ? videoRef : undefined}
                  controls={!video.hideControls}
                  className={styles.video}
                  src={video.url || video.fileUrl}
                  loop={video.loop}
                  autoPlay={video.autoplay}
                  muted={video.muted}
                  playsInline
                />
                {video.caption && (
                  <p className={styles.videoCaption}>{video.caption}</p>
                )}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
