import React from 'react';
import BlogHero from '@/components/BlogHero';
import styles from './postSlug.module.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMDX } from '@/helpers/file-helpers';
// import { Code } from 'bright';
import CodeSnippet from '@/components/CodeSnippet';
import dynamic from 'next/dynamic';
const DivisionGroupsDemo = dynamic(() => import('@/components/DivisionGroupsDemo'));
const CircularColorsDemo = dynamic(() => import('@/components/CircularColorsDemo'));

async function BlogPost({ params }) {
  /*
    1. Get mdx article from slug, read and process frontmatter.
    2. import all Components.
    3. Display with MDX
   */
  const { postSlug: slug } = params;
  const { content, frontmatter } = getMDX(slug);

  return (
    <article className={styles.wrapper}>
      <BlogHero title={frontmatter.title} publishedOn={frontmatter.publishedOn} />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo,
            CircularColorsDemo,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
