import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Utensils } from "lucide-react";
import SectionTitle from "./SectionTitle";

const diningData = [
    {
        title: "Royal Rajasthani Dining",
        category: "AUTHENTIC CUISINE",
        description:
            "Discover the rich flavours of Rajasthan through thoughtfully crafted traditional recipes and royal dining traditions.",
        image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Signature Restaurant",
        category: "FINE DINING",
        description:
            "An elegant dining destination where contemporary culinary artistry meets refined hospitality and unforgettable flavours.",
        image:
            "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Courtyard Dining",
        category: "AL FRESCO",
        description:
            "Dine beneath the open sky in a beautifully curated courtyard setting designed for relaxed and intimate evenings.",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    },
];

export default function DiningExperience() {
    return (
        <section className=" py-16 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Heading */}
                <SectionTitle
                    subtitle="Dining Experience"
                    title="A Culinary Journey Worth Savoring."
                />

                <div className="max-w-2xl mt-8 mb-14">
                    <p className="text-sm md:text-base leading-relaxed text-black">
                        From authentic regional flavours to refined contemporary cuisine,
                        every dining experience at VICHO is designed to celebrate taste,
                        tradition and togetherness.
                    </p>
                </div>

                {/* Dining Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {diningData.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden bg-black h-[480px]"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                
                            <div className="absolute top-6 right-6 w-11 h-11 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-white">
                                <Utensils size={17} strokeWidth={1.5} />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-7">
                                <span className="text-[10px] tracking-[0.25em] font-semibold text-[#D4AF37]">
                                    {item.category}
                                </span>

                                <h3 className="mt-3 text-2xl md:text-3xl font-serif text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-sm">
                                    {item.description}
                                </p>

                                {/* <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white">
                  <span className="border-b border-[#D4AF37] pb-1">
                    Discover Dining
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div> */}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-14 flex justify-center">
                    <Link
                        to="/dining"
                        className="inline-flex items-center gap-3 border border-[#D4AF37]/60 px-8 py-4 text-xs uppercase tracking-[0.2em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#1C1C1C]"
                    >
                        Explore Our Dining
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}