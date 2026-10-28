import React from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionDivider from "../components/SectionDivider";
import { blogData } from "../data/blogData";

export default function Blog() {
  const featuredBlog = blogData[0];

  return (
    <main className="bg-[#FAF9F6] text-[#1C1C1C]">
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-black/70 px-6 text-center md:min-h-[60vh]">
        {featuredBlog && (
          <img
            src={featuredBlog.thumbnail}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            decoding="async"
            fetchPriority="high"
          />
        )}
        {/* <div className="absolute inset-0 bg-black/" /> */}
        <div className="relative z-10 max-w-3xl text-white">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
            Stories & Inspiration
          </p>
          <h1 className="font-serif text-5xl font-light md:text-7xl">
            The VICOH Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
            Ideas, inspiration and thoughtful guides for your next stay,
            celebration or gathering.
          </p>
        </div>
      </section>

      <SectionDivider variant="arch" />
      <Reveal as="section" variant="arch" className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8941F]">
              From the Blog
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
              Stories for the journey
            </h2>
          </div>

          {blogData.length === 0 ? (
            <p className="py-12 text-center leading-7 text-[#666]">
              New stories are coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogData.map((blog, index) => (
                <Reveal key={blog.id} variant="arch" delay={index * 0.08}>
                  <article className="group h-full overflow-hidden border border-[#E5DCC3] bg-white transition-shadow duration-300 hover:shadow-lg">
                    <Link
                      to={`/blog/${blog.slug}`}
                      aria-label={`Read ${blog.title}`}
                      className="block overflow-hidden"
                    >
                      <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        decoding="async"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex h-[calc(100%-16rem)] flex-col p-7">
                      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-[#8A806B]">
                        <span className="text-[#B8941F]">{blog.category}</span>
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={13} aria-hidden="true" />
                          {blog.date}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl leading-snug">
                        <Link
                          to={`/blog/${blog.slug}`}
                          className="transition-colors hover:text-[#B8941F]"
                        >
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="mt-4 flex-1 text-sm leading-7 text-[#666]">
                        {blog.metaDescription}
                      </p>
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="mt-6 inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1C1C] transition-colors hover:text-[#B8941F]"
                      >
                        Read story
                        <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    </main>
  );
}
