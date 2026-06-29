import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate, slug, readTime } = blog;

  return (
    <article className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <Link href={`/blog-details/${slug}`} className="relative aspect-[16/9] w-full overflow-hidden block flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {tags?.[0] && (
          <span className="absolute bottom-3 left-3 bg-primary text-white text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize tracking-wide">
            {tags[0]}
          </span>
        )}
        {readTime && (
          <span className="absolute top-3 right-3 bg-black/50 text-white text-[11px] px-2.5 py-1 rounded-full backdrop-blur-sm">
            {readTime}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
          <Link href={`/blog-details/${slug}`}>
            {title}
          </Link>
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 flex-grow mb-4 leading-relaxed">
          {paragraph}
        </p>

        {/* Author row */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2.5">
            <div className="relative h-7 w-7 rounded-full overflow-hidden flex-shrink-0">
              <Image src={author.image} alt={author.name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-none mb-0.5">{author.name}</p>
              <p className="text-[10px] text-gray-400">{publishDate}</p>
            </div>
          </div>
          <Link
            href={`/blog-details/${slug}`}
            className="text-xs font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
          >
            Read more
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleBlog;
