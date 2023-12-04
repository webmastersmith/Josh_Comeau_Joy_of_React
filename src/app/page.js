import React from 'react';
import BlogSummaryCard from '@/components/BlogSummaryCard';
import styles from './homepage.module.css';
import { getLatestContent } from '@/helpers/file-helpers';

function Home() {
  /* get markdown, show frontmatter. max 4 */
  const blogs = getLatestContent();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {blogs.map((blog) => (
        <BlogSummaryCard key={blog.title} {...blog} />
      ))}
    </div>
  );
}

export default Home;
