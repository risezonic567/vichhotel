import { motion, useReducedMotion } from "framer-motion";

const GOLD = "#b8975a";
const view = { once: true, amount: 0.8 };

function Arch({ reducedMotion }) {
  return (
    <motion.svg
      viewBox="-12 -20 24 32"
      width="36"
      height="48"
      style={{ flexShrink: 0 }}
      initial={reducedMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={view}
      transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 170, damping: 13 }}
    >
      <path
        d="M-9 10 V0 Q-9 -8 0 -14 Q9 -8 9 0 V10Z"
        fill="rgba(184,151,90,0.2)"
        stroke={GOLD}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M-5 10 V1 Q-5 -4 0 -8 Q5 -4 5 1 V10" fill="none" stroke={GOLD} strokeWidth="1" />
      <circle cx="0" cy="-16" r="1.4" fill={GOLD} />
    </motion.svg>
  );
}

function Thread({ side, reducedMotion }) {
  return (
    <motion.div
      style={{
        flex: 1,
        maxWidth: 260,
        height: 1,
        background: GOLD,
        transformOrigin: side === "left" ? "right center" : "left center",
      }}
      initial={{ scaleX: reducedMotion ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={view}
      transition={reducedMotion ? { duration: 0 } : { duration: 1.1, delay: 0.35, ease: "easeOut" }}
    />
  );
}

export default function ArchDivider() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        width: "100%",
        maxWidth: 720,
        margin: "56px auto",
        padding: "0 16px",
      }}
    >
      <Thread side="left" reducedMotion={reducedMotion} />
      <Arch reducedMotion={reducedMotion} />
      <Thread side="right" reducedMotion={reducedMotion} />
    </div>
  );
}
