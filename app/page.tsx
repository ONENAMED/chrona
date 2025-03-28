import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Contact ME", href: "/something" },
  { name: "", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Existing navigation and content */}
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
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Alpaca1rl
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[90%] md:max-w-[60%] mx-auto">
          I'm {" "}
          <Link
            target="_blank"
            href="https://www.instagram.com/kelvin.kalvice/"
            className="underline duration-500 hover:text-zinc-300"
          >
            alpaca1rl AKA kelvin
          </Link> like duo
          but better
        </h2>
      </div>

      {/* New help button */}
      <div className="fixed bottom-6 right-6 z-20">
        <Link
          href="/help"
          className="bg-zinc-800/50 hover:bg-zinc-800/70 p-3 rounded-full transition-colors duration-300 text-zinc-300 hover:text-zinc-100 text-sm font-medium"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.382 2.163-2.733 3.569-2.733 1.406 0 2.02.735 2.02 2.733 0 1.98-1.614 3.754-3.569 3.754-1.955 0-3.569-1.754-3.569-3.754zm0 6.756a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
// Add any additional components or styles here
// 