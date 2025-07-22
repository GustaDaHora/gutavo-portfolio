"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
}

export function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-glass-bg backdrop-blur-sm border border-glass-border p-6 transition-all duration-300 hover:border-green-500/50" style={{
        '--glass-bg': 'var(--glass-bg)',
        '--glass-border': 'var(--glass-border)',
      } as React.CSSProperties}>
        <div className="absolute -inset-1 bg-brand-gradient-light rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200" style={{ '--brand-gradient-light': 'var(--brand-gradient-light)' } as React.CSSProperties}></div>

        <div className="relative">{children}</div>
      </div>
    </motion.div>
  )
}
