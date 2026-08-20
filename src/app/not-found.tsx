import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 pt-[150px] pb-[120px] text-center">
      <div>
        <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl dark:text-white">
          Page not found
        </h1>
        <p className="text-body-color mb-8 text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/80"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
