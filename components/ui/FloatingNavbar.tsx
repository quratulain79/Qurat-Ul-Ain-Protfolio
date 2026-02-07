"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          // CHANGED: Padding 'px-10' se 'px-3' kiya mobile ke liye taake jagah banay
          // CHANGED: Gap 'space-x-6' se 'space-x-3' kiya mobile ke liye
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[9999] top-5 inset-x-0 mx-auto px-3 py-3 md:px-10 md:py-4 rounded-xl border border-white/[0.1] shadow-xl items-center justify-center space-x-3 md:space-x-6",
          className
        )}
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.85)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-purple-400 hover:text-purple-500 transition-colors"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            {/* CHANGED: Text size chota kiya (10px) taake mobile par fit aye */}
            <span className="text-[10px] md:text-sm font-medium !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};