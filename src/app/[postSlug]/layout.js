import { getMDX } from '@/helpers/file-helpers';

export async function generateMetadata({ params }) {
  const { postSlug: slug } = params;
  const { frontmatter } = getMDX(slug);
  return { title: slug, description: frontmatter.abstract };
}

function BlogLayout({ children }) {
  return <>{children}</>;
}

export default BlogLayout;
