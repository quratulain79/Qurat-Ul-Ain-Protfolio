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
// Icons zaroori hain
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

  return (
    <>
      {/* --- Main Navbar (Floating Pill) --- */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            // MOBILE FIXES:
            // top-4: Mobile par thora upar rakha hai.
            // px-4 py-2: Padding kam ki hai taake chota lage.
            // md:top-10: Laptop par wapis normal position.
            "flex max-w-fit fixed z-[5000] top-4 md:top-10 inset-x-0 mx-auto px-4 py-2 md:px-5 md:py-3 rounded-full border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.8)", // Thora dark kiya hai visibility ke liye
          }}
        >
          {/* DESKTOP VIEW: Full Menu */}
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

          {/* MOBILE VIEW: Sirf Hamburger Button (Clean Look) */}
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

      {/* --- MOBILE SIDEBAR (Drawer) --- */}
      <AnimatePresence>
        {open && (
          <>
            {/* Black Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/80 z-[5001] backdrop-blur-sm"
            />

            {/* Side Menu Slider */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-[300px] bg-[#04071D] border-l border-white/10 z-[5002] shadow-2xl p-6 flex flex-col"
            >
              {/* Header inside Sidebar */}
              <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4">
                <span className="text-xl font-bold text-white">Navigation</span>
                <button onClick={() => setOpen(false)} className="text-white p-1 bg-white/10 rounded-full">
                  <IoClose size={28} />
                </button>
              </div>

              {/* Mobile Links List */}
              <div className="flex flex-col space-y-6">
                {navItems.map((navItem: any, idx: number) => (
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
              
              {/* Footer inside Sidebar */}
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