import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { urlForImage } from '../../../sanity/lib/client';
import { Work } from '../../lib/types';
import { REVERSE_CATEGORY_MAP } from '../../lib/categories';

interface ProjectCardProps {
  work: Work;
}

export function ProjectCard({ work }: ProjectCardProps) {
  const imageUrl = work.headerImage ? urlForImage(work.headerImage).url() : '';
  const videoUrl = work.headerVideo?.url || '';
  const tags = Array.isArray(work.tags) ? work.tags : [work.tags];
  const categoryDisplay = work._type === 'experiments' 
    ? 'Web Experiments' 
    : (REVERSE_CATEGORY_MAP[work.category || 'other'] || 'Other');
  
  return (
    <Link href={`/work/${work.slug}`} className={styles.container}>
      <div className={styles.corners}>
        <div className={styles.corner} />
        <div className={styles.corner} />
        <div className={styles.corner} />
        <div className={styles.corner} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.topSection}>
          <div className={styles.metadata}>
            <span className={styles.date}>{work.date}</span>
            <span className={styles.category}>{categoryDisplay}</span>
          </div>
          <h2 className={styles.title}>{work.title}</h2>
        </div>
        <div className={styles.bottomSection}>
          {/* <div className={styles.scope}>
            {tags.join(' / ')}
          </div> */}
          <div className={styles.imageWrapper}>
            {work.thumbnailType === 'image' && work.headerImage ? (
              <Image
                src={imageUrl}
                alt={work.title}
                fill
                className={styles.image}
              />
            ) : work.thumbnailType === 'video' && work.headerVideo ? (
              <video
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className={styles.video}
              />
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}