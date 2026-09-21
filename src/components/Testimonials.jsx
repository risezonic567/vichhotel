import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Corporate Client",
    // image: "/images/testimonials/rahul.jpg",
    video: "/videos/testimonial-1.mp4",
    review:
      "Vibe Collective Hospitality made our entire event completely stress-free. From planning to execution, everything was handled professionally and beautifully.",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Wedding Client",
    // image: "/images/testimonials/priya.jpg",
    video: "/videos/testimonial-2.mp4",
    review:
      "Our wedding was exactly how we imagined it. The team understood our vision and turned it into a truly memorable experience for us and our guests.",
  },
  {
    id: 3,
    name: "Amit Kapoor",
    role: "Business Client",
    // image: "/images/testimonials/amit.jpg",
    video: "/videos/testimonial-3.mp4",
    review:
      "The attention to detail was exceptional. The entire team was responsive, creative and professional throughout the complete journey.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonial = testimonials[current];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-[#f8f6f1]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-amber-600 uppercase tracking-[0.25em] text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-serif text-gray-900">
            What Our Guests Say
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover what our clients have to say about their experiences
            with Vibe Collective Hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl overflow-hidden">

          <div className="relative min-h-[300px] lg:min-h-[300px] bg-black">

            <video
              key={testimonial.video}
              className="w-full h-full object-cover"
              src={testimonial.video}
              controls
              playsInline
            />

            {/* Video Overlay */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2">
              <span className="text-xs uppercase tracking-widest text-gray-800">
                Client Story
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">

            <Quote
              size={42}
              className="text-amber-500 mb-6"
              strokeWidth={1.5}
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className="fill-amber-500 text-amber-500"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-serif">
              “{testimonial.review}”
            </p>

            {/* Client */}
            <div className="flex items-center gap-4 mt-8">

              {/* <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              /> */}

              <div>
                <h3 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {testimonial.role}
                </p>
              </div>

            </div>

            <div className="flex items-center justify-between mt-10">

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-8 bg-amber-600"
                        : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-11 h-11 border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;