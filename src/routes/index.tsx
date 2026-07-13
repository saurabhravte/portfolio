import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { FaBehance, FaPinterest, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#060908] text-[#EAEAEA] font-sans pt-32 pb-20 px-6 sm:px-12 md:px-24">
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full items-center gap-8 mb-8 z-10">
          <div className="text-left">
            <h2 className="text-xl md:text-2xl font-light text-[#EAEAEA]/80">
              Graphic/Product<br />& Brand Designer
            </h2>
            <div className="w-12 h-[1px] bg-brand mt-4"></div>
          </div>
          
          <div className="flex flex-col items-center justify-center relative w-full h-[400px] md:h-[500px]">
            <img 
              src="/src/assets/hero.png" 
              alt="Avatar" 
              className="absolute bottom-0 w-64 md:w-80 h-auto object-contain drop-shadow-2xl z-20"
              onError={(e) => {
                e.currentTarget.src = "https://github.com/shadcn.png";
              }}
            />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-30 pointer-events-none mt-16">
              <h3 className="text-brand tracking-[0.4em] text-sm md:text-base font-semibold uppercase mb-[-15px] md:mb-[-25px] ml-2">Rence</h3>
              <h1 className="text-8xl md:text-[150px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#EAEAEA] to-[#444] drop-shadow-2xl" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                IVANN
              </h1>
            </div>
          </div>

          <div className="text-left lg:text-right text-[#EAEAEA]/70 max-w-sm ml-auto text-sm md:text-base leading-relaxed">
            Hi, I'm Ivan, a graphic designer, product designer, and brand illustrator passionate about crafting result driven designs and giving your products an interesting story and look
          </div>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-16 opacity-40 grayscale filter mix-blend-screen text-2xl">
          <div className="flex items-center justify-center p-2 bg-[#333333]/20 rounded-md font-bold">
            Ai
          </div>
          <div className="flex items-center justify-center p-2 bg-[#333333]/20 rounded-md font-bold">
            Ps
          </div>
          <div className="flex items-center gap-2 font-bold tracking-tighter italic">
            Canva
          </div>
          <div className="flex items-center gap-2 font-bold tracking-tighter">
            asana
          </div>
          <div className="flex items-center gap-2 font-bold tracking-tighter">
            Dropbox
          </div>
          <div className="flex items-center gap-2 font-bold tracking-tighter">
            Airtable
          </div>
          <div className="flex items-center justify-center p-2 bg-[#333333]/20 rounded-md font-bold text-xl">
            Ai+
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto w-full h-[1px] bg-[#1f2d26] my-20"></div>

      {/* ───────────────────────── About / Intro ───────────────────────── */}
      <section className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-medium mb-6 leading-tight max-w-4xl text-[#EAEAEA]">
          Crafting incredible, impactful, satisfactory designs, brand identities and many more...
        </h2>
        <p className="text-[#EAEAEA]/60 text-sm md:text-base max-w-5xl leading-relaxed">
          Design is not just about pictures, words, logo, color and typography, it is a way of telling a brand's story, communicating ideas, identifying real problems and providing solutions to those who needs it. Crafting and curating Memorable designs and branding is what I do very well...
        </p>

        {/* Partner Logos */}
        <div className="flex flex-wrap gap-8 mt-12 opacity-20 grayscale">
          {/* Mock partners, since they are very faint in image */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-8 w-24 bg-white/20 rounded-md"></div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto w-full h-[1px] bg-[#1f2d26] mt-20 mb-12"></div>

      {/* ───────────────────────── What I Do ───────────────────────── */}
      <section className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-medium mb-8">what I do</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "BRAND IDENTITY &\nLOGO DESIGN",
            "SOCIAL MEDIA ADS/\nDESIGN",
            "YOUTUBE\nTHUMBNAILS",
            "MOVIE POSTERS/\nALBUM COVERS",
            "SPORTS DESIGN",
            "AI PROMPT FOR\nDESIGN AND OTHERS"
          ].map((title, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-[#1f2d26] bg-[#0b120f] h-28 sm:h-32 flex items-center p-6 transition-colors hover:border-brand cursor-pointer">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent to-[#22c55e]/10"></div>
              
              {/* Fake image overlay */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-2/5 bg-cover bg-center" 
                style={{ 
                  backgroundImage: 'url(/src/assets/hero.png)',
                  maskImage: 'linear-gradient(to right, black, transparent)', 
                  WebkitMaskImage: 'linear-gradient(to right, black, transparent)',
                  opacity: 0.4
                }}
              ></div>
              
              <div className="relative z-10 flex-1 pl-[20%] sm:pl-[25%] pr-4">
                <h3 className="text-xs sm:text-sm font-bold tracking-wider whitespace-pre-line text-[#EAEAEA]">
                  {title}
                </h3>
              </div>
              
              <div className="relative z-10 size-8 sm:size-10 shrink-0 rounded-full border border-brand/30 bg-[#060908] flex items-center justify-center text-brand transition-transform group-hover:scale-110">
                <ChevronRight className="size-4 sm:size-5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────── Footer ───────────────────────── */}
      <footer className="max-w-6xl mx-auto w-full mt-32 text-center pb-8">
        <h2 className="text-2xl font-medium mb-8">Contact me</h2>
        <div className="inline-flex flex-wrap items-center justify-center gap-6 rounded-full border border-[#1f2d26] bg-[#0b120f] px-8 py-4">
          <a href="#" className="flex flex-col items-center gap-1 group">
            <SiGmail className="size-6 text-red-500 transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] text-[#EAEAEA]/50">Gmail</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 group">
            <FaInstagram className="size-6 text-pink-500 transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] text-[#EAEAEA]/50">Instagram</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 group">
            <FaWhatsapp className="size-6 text-green-500 transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] text-[#EAEAEA]/50">Whatsapp</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 group">
            <FaXTwitter className="size-6 text-[#EAEAEA] transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] text-[#EAEAEA]/50">X/Twitter</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 group">
            <FaPinterest className="size-6 text-red-600 transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] text-[#EAEAEA]/50">Pinterest</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 group">
            <FaBehance className="size-6 text-blue-600 transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] text-[#EAEAEA]/50">Behance</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
