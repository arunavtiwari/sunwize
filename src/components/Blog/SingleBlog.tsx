import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate, slug } = blog;

  return (
    <article className="group rounded-2xl overflow-hidden shadow transition-shadow duration-300 hover:shadow-lg bg-white dark:bg-gray-900 flex flex-col h-full">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Link href={`/blog-details/${slug}`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {tags?.[0] && (
            <span className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full capitalize shadow-md">
              {tags[0]}
            </span>
          )}
        </Link>
      </div>

      <div className="flex-grow flex flex-col p-5 sm:p-6 lg:p-5 xl:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3 leading-snug line-clamp-2">
          <Link
            href={`/blog-details/${slug}`}
            className="hover:text-primary dark:hover:text-primary"
          >
            {title}
          </Link>
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {paragraph}
        </p>

      </div>
    </article>
  );
};

export default SingleBlog;
