"use client";

import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    // CHANGE: 'py-20' -> 'py-5' for tight spacing
    <div className="py-5" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      {/* CHANGE: Removed extra top margins */}
      <div className="flex flex-col items-center mt-5">
        <div
          // Height thori adjust ki taake extra space na le
          className="h-[50vh] md:h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;