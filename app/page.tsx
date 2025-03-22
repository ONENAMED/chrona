import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "", href: "/projects" },
  { name: "", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
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
        <h2 className="text-sm text-zinc-500 ">
          I'm {" "}
          <Link
            target="_blank"
            href="https://www.instagram.com/kelvin.kalvice/"
            className="underline duration-500 hover:text-zinc-300"
          >
            alpaca1rl AKA kelvin
          </Link> is a former Twitch streamer turned back-end developer. With a strong foundation in back-end technologies,
          he is now expanding his expertise into front-end development to become a well-rounded full-stack developer. 
          His background in streaming has honed his adaptability and problem-solving skills, 
          which he now applies to building efficient and scalable solutions in the tech world.
        </h2>
      </div>
    </div>
  );

}
