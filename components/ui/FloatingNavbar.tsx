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
// Icons import kar rahe hain (3 lines aur Cross)
import { IoMenu, IoClose } from "react-icons/io5";

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
  const [open, setOpen] = useState(false); // Ye state sidebar kholne/band karne ke liye hai

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
    <>
      {/* --- Main Floating Bar --- */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-5 py-3 rounded-full border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
          }}
        >
          {/* DESKTOP VIEW: Links wese hi dikhenge */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-purple-400 hover:text-purple-500 transition-colors"
                )}
              >
                <span className="text-sm font-medium cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
          </div>

          {/* MOBILE VIEW: Sirf 3 Lines wala Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(true)} className="text-white focus:outline-none">
              <IoMenu size={28} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* --- SIDEBAR (Mobile Drawer) --- */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay (Black transparent) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-[5001] backdrop-blur-sm"
            />

            {/* Side Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="fixed top-0 right-0 h-full w-[250px] bg-[#04071D] border-l border-white/10 z-[5002] shadow-2xl p-6 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button onClick={() => setOpen(false)} className="text-white">
                  <IoClose size={32} />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col space-y-6">
                {navItems.map((navItem: any, idx: number) => (
                  <Link
                    key={`mobile-link=${idx}`}
                    href={navItem.link}
                    onClick={() => setOpen(false)} // Link click hone par menu band ho jaye
                    className="flex items-center space-x-4 text-white hover:text-purple-400 transition-colors text-lg font-medium"
                  >
                    <span className="text-2xl">{navItem.icon}</span>
                    <span>{navItem.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};s