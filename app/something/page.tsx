import Link from "next/link";
import React from "react";

const navigation = [
  { name: "", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Back button linking to root page */}
      <div className="absolute top-4 left-4 animate-fade-in">
        <Link
          href="/"
          className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
        >
          ← Back
        </Link>
      </div>

      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Contact
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[90%] md:max-w-[60%] mx-auto">
          Let's connect! You can reach me through these channels:
          <div className="mt-8 flex flex-col gap-4">
            <Link
              target="_blank"
              href="https://www.instagram.com/kelvin.kalvice/"
              className="underline duration-500 hover:text-zinc-300"
            >
              Instagram
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/kelvin-kalvice/"
              className="underline duration-500 hover:text-zinc-300"
            >
              LinkedIn
            </Link>
            <Link
              target="_blank"
              href="mailto:kelvin.kalvice@example.com"
              className="underline duration-500 hover:text-zinc-300"
            >
              Email
            </Link>
          </div>
        </h2>
      </div>
    </div>
  );
}
