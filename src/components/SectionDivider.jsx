import { motion, useReducedMotion } from "framer-motion";

const GOLD = "#b8975a";
const FILL = "rgba(184,151,90,0.22)";
const spring = { type: "spring", stiffness: 170, damping: 13 };
const pop = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: spring },
};

function Arch() {
  return (
    <motion.svg viewBox="-12 -20 24 32" width="36" height="48" style={{ flexShrink: 0 }} variants={pop}>
      <path d="M-9 10 V0 Q-9 -8 0 -14 Q9 -8 9 0 V10Z" fill={FILL} stroke={GOLD} strokeWidth="1" strokeLinejoin="round" />
      <path d="M-5 10 V1 Q-5 -4 0 -8 Q5 -4 5 1 V10" fill="none" stroke={GOLD} strokeWidth="1" />
      <circle cx="0" cy="-16" r="1.4" fill={GOLD} />
    </motion.svg>
  );
}

function Doors() {
  const door = (direction) => ({
    hidden: { x: 0 },
    show: { x: direction * 64, transition: { duration: 1.1, delay: 0.5, ease: [0.7, 0, 0.2, 1] } },
  });

  return (
    <svg viewBox="0 0 120 60" width="96" height="48" style={{ flexShrink: 0 }}>
      <motion.path d="M60 16 L72 30 L60 44 L48 30Z" fill={FILL} stroke={GOLD} strokeWidth="1" variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.7 } } }} />
      <motion.g variants={door(-1)}>
        <rect x="10" y="4" width="50" height="52" fill="#f1ead9" stroke={GOLD} strokeWidth="1.2" />
        <rect x="16" y="10" width="38" height="40" fill="none" stroke={GOLD} strokeWidth="0.8" />
        <circle cx="54" cy="30" r="2.2" fill={GOLD} />
      </motion.g>
      <motion.g variants={door(1)}>
        <rect x="60" y="4" width="50" height="52" fill="#f1ead9" stroke={GOLD} strokeWidth="1.2" />
        <rect x="66" y="10" width="38" height="40" fill="none" stroke={GOLD} strokeWidth="0.8" />
        <circle cx="66" cy="30" r="2.2" fill={GOLD} />
      </motion.g>
    </svg>
  );
}

function Bloom() {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg viewBox="-30 -30 60 60" width="56" height="56" style={{ flexShrink: 0 }}>
      {angles.map((angle, index) => (
        <g key={angle} transform={`rotate(${angle}) translate(0 -12)`}>
          <motion.ellipse rx="5.5" ry="12" fill={FILL} stroke={GOLD} strokeWidth="1" variants={{ hidden: { scale: 0, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { ...spring, delay: index * 0.07 } } }} />
        </g>
      ))}
      <motion.circle r="4.5" fill={GOLD} variants={{ hidden: { scale: 0 }, show: { scale: 1, transition: { ...spring, delay: 0.65 } } }} />
    </svg>
  );
}

function Cloche() {
  return (
    <svg viewBox="-30 -34 60 50" width="64" height="54" style={{ flexShrink: 0 }}>
      <ellipse cx="0" cy="10" rx="26" ry="5" fill="#fff" stroke={GOLD} strokeWidth="1" />
      <motion.circle cx="0" cy="4" r="5" fill={FILL} stroke={GOLD} strokeWidth="1" variants={{ hidden: { scale: 0 }, show: { scale: 1, transition: { ...spring, delay: 0.9 } } }} />
      <motion.g variants={{ hidden: { y: 0, opacity: 1 }, show: { y: -26, opacity: 0, transition: { duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] } } }}>
        <path d="M-22 8 A22 22 0 0 1 22 8 Z" fill="#f1ead9" stroke={GOLD} strokeWidth="1" />
        <circle cx="0" cy="-16" r="2.6" fill={GOLD} />
        <path d="M-25 8 H25" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

const ORNAMENTS = { arch: Arch, doors: Doors, bloom: Bloom, cloche: Cloche };

function Thread({ side }) {
  return (
    <motion.div
      style={{ flex: 1, maxWidth: 260, height: 1, background: GOLD, transformOrigin: side === "left" ? "right center" : "left center" }}
      variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.1, delay: 0.35, ease: "easeOut" } } }}
    />
  );
}

export default function SectionDivider({ variant = "arch" }) {
  const reduce = useReducedMotion();
  const Ornament = ORNAMENTS[variant] || Arch;

  return (
    <motion.div
      aria-hidden="true"
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, width: "100%", maxWidth: 720, boxSizing: "border-box", margin: "56px auto", padding: "0 16px" }}
    >
      <Thread side="left" />
      <Ornament />
      <Thread side="right" />
    </motion.div>
  );
}
