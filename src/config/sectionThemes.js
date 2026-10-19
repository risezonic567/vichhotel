export const SECTION_THEMES = {
  hotel: "doors", room: "doors", suite: "doors", stay: "doors", accommodation: "doors",
  wedding: "bloom", event: "bloom", celebration: "bloom", banquet: "bloom", party: "bloom",
  dining: "cloche", restaurant: "cloche", food: "cloche", menu: "cloche", cafe: "cloche",
  about: "arch", story: "arch", contact: "arch", gallery: "arch", testimonial: "arch",
  default: "arch",
};

export function themeFor(name = "") {
  const n = String(name).toLowerCase();
  const hit = Object.keys(SECTION_THEMES).find((key) => key !== "default" && n.includes(key));
  return SECTION_THEMES[hit || "default"];
}
