// Generates a unique, on-brand SVG cover for a blog post, derived
// deterministically from its slug. This lets every post have a distinct
// cover without reusing the same stock image over and over.

type BlogCoverProps = {
  title: string;
  tag?: string;
  slug: string;
  className?: string;
};

// Solar / energy themed palettes. The slug hash picks one, so a given
// post always renders the same cover, but different posts differ.
const palettes = [
  { from: "#f97316", mid: "#fb923c", to: "#b45309", sun: "#fde68a" }, // sunrise amber
  { from: "#0ea5e9", mid: "#38bdf8", to: "#0369a1", sun: "#e0f2fe" }, // clear sky
  { from: "#10b981", mid: "#34d399", to: "#047857", sun: "#d1fae5" }, // green energy
  { from: "#6366f1", mid: "#818cf8", to: "#4338ca", sun: "#e0e7ff" }, // dusk indigo
  { from: "#f59e0b", mid: "#fbbf24", to: "#d97706", sun: "#fef3c7" }, // warm gold
  { from: "#14b8a6", mid: "#2dd4bf", to: "#0f766e", sun: "#ccfbf1" }, // ocean teal
  { from: "#ef4444", mid: "#f87171", to: "#b91c1c", sun: "#fee2e2" }, // sunset red
  { from: "#65a30d", mid: "#84cc16", to: "#3f6212", sun: "#ecfccb" }, // field green
];

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

// Greedily wrap the title into at most 3 lines of ~18 characters.
function wrapTitle(title: string, maxChars = 18, maxLines = 3): string[] {
  const words = title.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
      if (lines.length === maxLines - 1) break;
    } else {
      current = candidate;
    }
  }
  if (current && lines.length < maxLines) lines.push(current);
  // If the title overflowed, add an ellipsis to the last line.
  const used = lines.join(" ").split(/\s+/).length;
  if (used < words.length) {
    lines[lines.length - 1] = lines[lines.length - 1].replace(/[.,]?$/, "") + "…";
  }
  return lines;
}

const BlogCover = ({ title, tag, slug, className }: BlogCoverProps) => {
  const h = hashSlug(slug);
  const palette = palettes[h % palettes.length];
  const lines = wrapTitle(title);
  const gid = `bg-${slug.replace(/[^a-z0-9]/gi, "")}`;
  const sid = `sun-${slug.replace(/[^a-z0-9]/gi, "")}`;

  // Sun sits toward the top-right; a couple of hash bits nudge it so
  // covers with the same palette still look different.
  const sunX = 940 + (h % 3) * 40;

  return (
    <svg
      viewBox="0 0 1200 675"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.from} />
          <stop offset="55%" stopColor={palette.mid} />
          <stop offset="100%" stopColor={palette.to} />
        </linearGradient>
        <radialGradient id={sid} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={palette.sun} stopOpacity="0.95" />
          <stop offset="60%" stopColor={palette.sun} stopOpacity="0.35" />
          <stop offset="100%" stopColor={palette.sun} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="1200" height="675" fill={`url(#${gid})`} />

      {/* Sun glow + disk */}
      <circle cx={sunX} cy="150" r="220" fill={`url(#${sid})`} />
      <circle cx={sunX} cy="150" r="70" fill={palette.sun} opacity="0.9" />

      {/* Decorative isometric solar-panel array, bottom-right */}
      <g opacity="0.18" fill="#ffffff">
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => {
            const x = 720 + col * 120 + row * 30;
            const y = 470 + row * 55;
            return (
              <polygon
                key={`${row}-${col}`}
                points={`${x},${y} ${x + 100},${y} ${x + 70},${y + 45} ${x - 30},${y + 45}`}
              />
            );
          })
        )}
      </g>

      {/* Bottom scrim for text legibility */}
      <rect x="0" y="420" width="1200" height="255" fill="#000000" opacity="0.28" />

      {/* Category pill */}
      {tag && (
        <>
          <rect
            x="70"
            y="360"
            width={Math.min(60 + tag.length * 20, 480)}
            height="52"
            rx="26"
            fill="#000000"
            opacity="0.35"
          />
          <text
            x="98"
            y="394"
            fill="#ffffff"
            fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
            fontSize="26"
            fontWeight="600"
            style={{ textTransform: "capitalize", letterSpacing: "0.5px" }}
          >
            {tag}
          </text>
        </>
      )}

      {/* Title */}
      <text
        x="70"
        y="490"
        fill="#ffffff"
        fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
        fontSize="62"
        fontWeight="800"
        style={{ letterSpacing: "-0.5px" }}
      >
        {lines.map((line, i) => (
          <tspan key={i} x="70" dy={i === 0 ? 0 : 74}>
            {line}
          </tspan>
        ))}
      </text>

      {/* Wordmark */}
      <text
        x="70"
        y="640"
        fill="#ffffff"
        fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
        fontSize="24"
        fontWeight="700"
        opacity="0.85"
        style={{ letterSpacing: "3px" }}
      >
        SUNWIZE
      </text>
    </svg>
  );
};

export default BlogCover;
