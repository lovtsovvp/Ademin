import { motion } from "motion/react";
import { ReactNode } from "react";

interface MetroTileProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MetroTile({ children, className = "", delay = 0 }: MetroTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`bg-card border border-border p-6 transition-all hover:border-primary/50 ${className}`}
    >
      {children}
    </motion.div>
  );
}
