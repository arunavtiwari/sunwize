const BlogKeywords = ({ keywords }: { keywords: string[] }) => (
  <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-700">
    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
      Related Keywords
    </p>
    <div className="flex flex-wrap gap-2">
      {keywords.map((kw) => (
        <span
          key={kw}
          className="text-xs bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700"
        >
          {kw}
        </span>
      ))}
    </div>
  </div>
);

export default BlogKeywords;
