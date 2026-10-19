import { motion, useReducedMotion } from "framer-motion";

export default function Section({ children }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return children;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
