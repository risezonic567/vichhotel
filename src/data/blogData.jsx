import React from "react";
import { siteConfig } from "./siteConfig";

export const blogData = [
  {
    id: 1,
    title: "A More Thoughtful Way to Experience a Hotel Stay",
    slug: "a-more-thoughtful-hotel-stay",
    author: "VICOH Hotel & Resorts",
    date: "October 2025",
    category: "Travel & Hospitality",
    thumbnail:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1600&auto=format&fit=crop",
    metaTitle: "A More Thoughtful Hotel Stay | VICOH Hotel & Resorts",
    metaDescription:
      "Discover how thoughtful details, a relaxed pace and a sense of place can make a hotel stay more memorable.",
    metaKeywords:
      "hotel stay, thoughtful travel, hospitality, travel experiences, VICOH",
    canonical: `${siteConfig.domain}/blog/a-more-thoughtful-hotel-stay`,
    content: (
      <div className="space-y-6 text-[#555] leading-8">
        <h2 className="mt-8 mb-2 font-serif text-2xl text-[#1C1C1C]">
          A stay is more than a room
        </h2>
        <p>
          A memorable trip is rarely defined by a checklist. It is the feeling
          of arriving somewhere new, having the time to settle in, and finding
          small moments that make the place feel like your own.
        </p>
        <p>
          The best hotel stays leave room for both discovery and rest. A
          comfortable space gives you a welcoming base, while the character of
          the destination shapes the stories you take home.
        </p>
        <h2 className="mt-10 mb-3 font-serif text-2xl text-[#1C1C1C]">
          Make room for the moments in between
        </h2>
        <p>
          Not every hour needs to be planned. Take time for a slow breakfast,
          ask the local team what they enjoy nearby, or leave an afternoon open
          to explore at your own pace. These unhurried moments often become the
          most personal part of a journey.
        </p>
        <p>
          When choosing where to stay, think about how you want the trip to
          feel, as well as where you want to go. A little space to pause can
          turn a good itinerary into a more meaningful escape.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Planning a Team Offsite That Leaves Room to Think",
    slug: "planning-a-team-offsite",
    author: "VICOH Hotel & Resorts",
    date: "September 2025",
    category: "Meetings & Events",
    thumbnail:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1600&auto=format&fit=crop",
    metaTitle: "Planning a Team Offsite | VICOH Hotel & Resorts",
    metaDescription:
      "A practical guide to planning a focused team offsite, from choosing the right setting to balancing work and time away.",
    metaKeywords:
      "team offsite, corporate retreat, meeting planning, team events, VICOH",
    canonical: `${siteConfig.domain}/blog/planning-a-team-offsite`,
    content: (
      <div className="space-y-6 text-[#555] leading-8">
        <h2 className="mt-8 mb-2 font-serif text-2xl text-[#1C1C1C]">
          Start with what your team needs
        </h2>
        <p>
          A useful offsite begins with a clear purpose. Decide whether the
          priority is planning, collaboration, training or simply giving the
          team time together. That decision will guide the destination, schedule
          and kind of meeting space you need.
        </p>
        <p>
          Share the essentials early: dates, group size, room requirements and
          any equipment or meal preferences. A short brief makes it easier to
          compare options and keep the practical details from taking over the
          agenda.
        </p>
        <h2 className="mt-10 mb-3 font-serif text-2xl text-[#1C1C1C]">
          Balance structure with breathing room
        </h2>
        <p>
          Leave space between sessions and avoid filling every part of the day.
          Breaks help people reset, and informal conversations can be just as
          valuable as the sessions on the schedule.
        </p>
        <p>
          A change of setting can help a team see familiar questions
          differently. Choose a venue that supports the work, then give
          everyone enough time to enjoy being away from the office.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Choosing a Destination for Your Next Group Getaway",
    slug: "choosing-a-group-getaway-destination",
    author: "VICOH Hotel & Resorts",
    date: "August 2025",
    category: "Travel Tips",
    thumbnail:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1600&auto=format&fit=crop",
    metaTitle: "Choosing a Group Getaway Destination | VICOH",
    metaDescription:
      "Find a destination that works for everyone with simple tips for planning a relaxed and memorable group getaway.",
    metaKeywords:
      "group getaway, group travel, holiday planning, destination ideas, VICOH",
    canonical: `${siteConfig.domain}/blog/choosing-a-group-getaway-destination`,
    content: (
      <div className="space-y-6 text-[#555] leading-8">
        <h2 className="mt-8 mb-2 font-serif text-2xl text-[#1C1C1C]">
          Agree on the kind of trip first
        </h2>
        <p>
          For a group trip to feel easy, begin by agreeing on its pace. Some
          groups want a full itinerary; others prefer a comfortable base and
          plenty of free time. Knowing the difference helps narrow down the
          destination before anyone starts booking.
        </p>
        <p>
          Consider travel time, the needs of everyone in the group and what you
          would like to do together. It can help to choose one shared activity
          each day and leave the rest flexible.
        </p>
        <h2 className="mt-10 mb-3 font-serif text-2xl text-[#1C1C1C]">
          Keep the details simple
        </h2>
        <p>
          Confirm the dates, room arrangements and budget with the group early.
          A single point of contact for plans and questions can make decisions
          easier and reduce last-minute confusion.
        </p>
        <p>
          The right destination is one that gives everyone something to look
          forward to without making the trip feel over-planned. Keep a little
          flexibility in the schedule, and let the shared experience unfold
          naturally.
        </p>
      </div>
    ),
  },
];
