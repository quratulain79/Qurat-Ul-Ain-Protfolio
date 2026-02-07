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
  const [open, setOpen] = useState(false);

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

  // Zabardasti "Testimonials" ko list se nikaal rahe hain
  const cleanNavItems = navItems.filter((item) => item.name !== "Testimonials");

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed z-[5000] top-4 md:top-10 inset-x-0 mx-auto px-4 py-2 md:px-5 md:py-3 rounded-full border border-white/[0.2] shadow-xl items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.8)",
          }}
        >
          {/* Desktop View - Uses cleanNavItems */}
          <div className="hidden md:flex items-center space-x-4">
            {cleanNavItems.map((navItem: any, idx: number) => (
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

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <span className="text-white text-sm font-bold mr-2">Menu</span>
            <button 
                onClick={() => setOpen(true)} 
                className="text-white p-1 bg-white/10 rounded-full focus:outline-none"
            >
              <IoMenu size={24} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Sidebar - Uses cleanNavItems */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/80 z-[5001] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-[300px] bg-[#04071D] border-l border-white/10 z-[5002] shadow-2xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4">
                <span className="text-xl font-bold text-white">Navigation</span>
                <button onClick={() => setOpen(false)} className="text-white p-1 bg-white/10 rounded-full">
                  <IoClose size={28} />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {cleanNavItems.map((navItem: any, idx: number) => (
                  <Link
                    key={`mobile-link=${idx}`}
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="flex items-center space-x-4 text-white hover:text-purple-400 transition-colors group"
                  >
                    <span className="text-2xl text-purple-500 group-hover:scale-110 transition-transform">
                        {navItem.icon}
                    </span>
                    <span className="text-lg font-medium tracking-wide">
                        {navItem.name}
                    </span>
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto text-center text-white/40 text-xs">
                © 2026 Qurat Ul Ain
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};