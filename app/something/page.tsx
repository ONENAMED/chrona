"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Contact() {
  // Use motion values for real-time updates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the motion using a spring effect
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Cursor Light Effect */}
      <motion.div
        className="light-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
          pointerEvents: "none",
          filter: "blur(20px)",
          zIndex: 9999,
          x: springX,
          y: springY,
        }}
      />

      {/* Rest of your existing page content */}
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        {/* Back button */}
        <div className="absolute top-4 left-4 animate-fade-in">
          <Link
            href="/"
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 focus-visible:text-zinc-300"
            aria-label="Back to homepage"
          >
            ← Back
          </Link>
        </div>

        {/* Navigation */}
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 focus-visible:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>

        {/* Gradient divs */}
        <div className="hidden md:block w-screen h-px animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          Contact
        </h1>

        <div className="hidden md:block w-screen h-px animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[90%] md:max-w-[60%] mx-auto">
            Let's connect! You can reach me through these channels:
            <div className="mt-8 flex flex-col gap-4">
              <Link
                target="_blank"
                href="https://www.instagram.com/kelvin.kalvice/"
                className="text-zinc-500 hover:text-zinc-300 focus-visible:text-zinc-300"
              >
                Instagram
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/kelvin-kalvice/"
                className="text-zinc-500 hover:text-zinc-300 focus-visible:text-zinc-300"
              >
                LinkedIn
              </Link>
              <Link
                target="_blank"
                href="mailto:kelvin.kalvice@example.com"
                className="text-zinc-500 hover:text-zinc-300 focus-visible:text-zinc-300"
              >
                Email
              </Link>
            </div>
          </h2>
        </div>
      </div>
    </>
  );
}
