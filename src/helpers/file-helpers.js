import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

export const getMDX = cache((slug) => {
  // Read MD file. Parse frontmatter and content and return.
  const data = fs.readFileSync(path.join(process.cwd(), 'content', `${slug}.mdx`), 'utf-8');
  const { content, data: frontmatter } = matter(data);
  return { content, frontmatter };
});

export const getLatestContent = () => {
  // Get content, sort to latest first. Only show 4 on home page.
  return fs
    .readdirSync('content')
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const data = fs.readFileSync(`content/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(data);
      return {
        slug: fileName.replace('.mdx', ''),
        ...frontmatter,
      };
    })
    .slice(0, 4)
    .toSorted((a, b) => (a.publishedOn < b.publishedOn ? 1 : -1));
};
