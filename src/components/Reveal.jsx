import { motion, useReducedMotion } from "framer-motion";

const VARIANTS = {
  arch: { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } },
  doors: { hidden: { opacity: 0, scaleX: 0.96 }, show: { opacity: 1, scaleX: 1 } },
  bloom: { hidden: { opacity: 0, scale: 0.98 }, show: { opacity: 1, scale: 1 } },
  cloche: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
};

export default function Reveal({ variant = "arch", delay = 0, as = "div", className, style, children }) {
  const reduce = useReducedMotion();
  const Plain = as;
  if (reduce) return <Plain className={className} style={style}>{children}</Plain>;

  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      style={{ ...style, transformOrigin: variant === "doors" ? "center center" : style?.transformOrigin }}
      variants={VARIANTS[variant] || VARIANTS.arch}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}
