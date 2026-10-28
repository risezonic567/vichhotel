import React from "react";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionDivider from "../components/SectionDivider";
import { blogData } from "../data/blogData";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#FAF9F6] px-6 pt-12 text-center text-[#1C1C1C]">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B8941F]">
            VICOH Blog
          </p>
          <h1 className="mb-5 font-serif text-4xl">Story Not Found</h1>
          <p className="mb-7 text-sm text-[#666]">
            This story may have moved or is no longer available.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1C1C1C] hover:text-[#B8941F]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#FAF9F6] text-[#1C1C1C]">
      <section className="relative flex min-h-[50vh] items-end overflow-hidden md:min-h-[65vh]">
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-28 md:px-12 md:pb-16">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/85 transition-colors hover:text-[#D4AF37]"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to Blog
          </Link>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            {blog.category}
          </p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-white md:text-6xl">
            {blog.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.16em] text-white/75">
            <span>{blog.author}</span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={14} aria-hidden="true" />
              {blog.date}
            </span>
          </div>
        </div>
      </section>

      <SectionDivider variant="arch" />
      <Reveal as="article" variant="arch" className="px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="border-b border-[#E5DCC3] pb-8">
            <p className="text-sm leading-7 text-[#666]">
              {blog.metaDescription}
            </p>
          </div>
          <div className="py-5">{blog.content}</div>
          <div className="mt-10 border-t border-[#E5DCC3] pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1C1C1C] transition-colors hover:text-[#B8941F]"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              More stories
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
