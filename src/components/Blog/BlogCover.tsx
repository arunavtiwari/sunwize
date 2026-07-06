// Renders a lightweight colored-gradient cover for a blog post.
// The gradient is derived deterministically from the post slug, so each
// post gets its own varied gradient (and the same post always looks the
// same, avoiding SSR/client hydration mismatches). No image assets needed.

type BlogCoverProps = {
  title?: string;
  tag?: string;
  slug: string;
  className?: string;
};

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

const BlogCover = ({ slug, className }: BlogCoverProps) => {
  const h = hashSlug(slug);

  // Golden-angle hue rotation spreads colors evenly across the spectrum,
  // so consecutive posts get clearly different gradients.
  const hue = Math.round((h * 137.508) % 360);
  const hue2 = (hue + 40 + (h % 40)) % 360;
  const angle = 100 + (h % 8) * 20; // 100deg - 240deg

  const background = `linear-gradient(${angle}deg, hsl(${hue} 72% 56%), hsl(${hue2} 68% 44%))`;

  return <div className={className} style={{ background }} aria-hidden="true" />;
};

export default BlogCover;
