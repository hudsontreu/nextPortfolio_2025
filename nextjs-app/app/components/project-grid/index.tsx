"use client";

import { useEffect, useState } from 'react';
import { ProjectCard } from '../project-card';
import styles from './styles.module.css';
import { client } from '../../../sanity/lib/client';
import { LIST_QUERIES } from '../../lib/queries';
import { Work } from '../../lib/types';

interface ProjectGridProps {
  filter: string;
}

export function ProjectGrid({ filter }: ProjectGridProps) {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorks = async () => {
      setLoading(true);
      setError(null);
      try {
        const query = filter === 'all' 
          ? LIST_QUERIES.ALL
          : `*[_type in ["projects", "experiments"] && category == "${filter}"] | order(date desc) {
              _id,
              _type,
              title,
              "slug": slug.current,
              date,
              headerImage,
              "headerVideo": headerVideo.asset->{
                _ref,
                url
              },
              thumbnailType,
              tags,
              details,
              category,
              featured
            }`
        const data = await client.fetch(query);
        console.log(`Fetched ${filter} data before sorting:`, data.map((w: Work) => ({
          title: w.title,
          featured: w.featured,
          date: w.date
        })));

        // Sort works by featured status and date
        const sortedData = data.sort((a: Work, b: Work) => {
          // Explicitly check for featured true
          const aFeatured = a.featured === true;
          const bFeatured = b.featured === true;

          if (aFeatured && !bFeatured) return -1;
          if (!aFeatured && bFeatured) return 1;

          // If featured status is the same, sort by date
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

        console.log(`Fetched ${filter} data after sorting:`, sortedData.map((w: Work) => ({
          title: w.title,
          featured: w.featured,
          date: w.date
        })));
        setWorks(sortedData);
      } catch (error) {
        console.error('Error fetching works:', error);
        setError('Failed to load projects');
        setWorks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, [filter]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!works || works.length === 0) {
    return <div className={styles.noResults}>No projects found</div>;
  }

  return (
    <div className={styles.grid}>
      {works.map((work, index) => (
        <div key={work._id} className={styles.gridItem}>
          <ProjectCard work={work} />
        </div>
      ))}
    </div>
  );
}
