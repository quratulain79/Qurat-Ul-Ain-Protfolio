"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* CHANGE 1: 'gap-20' hata diya hai. Ab space normal ho jayegi */}
      <div className="max-w-7xl w-full flex flex-col">
        
        <FloatingNav navItems={navItems} />
        
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>
        
        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <Grid />
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <RecentProjects />
        </section>

        {/* Clients Section */}
        <section id="testimonials" className="scroll-mt-24">
          <Clients />
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <Approach />
        
        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <Footer />
        </section>

      </div>
    </main>
  );
};

export default Home;