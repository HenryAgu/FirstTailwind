import React from "react";

// images
import DesktopHero from "../images/hero.jpg";
import MobileHero from "../images/mobile-hero.jpg";

const Hero = () => {
  return (
    <section className="flex xl:flex-row md:flex-row flex-col xl:gap-x-7 md:gap-x-7 gap-y-12">
      {/* left hand side */}
      <div className="xl:w-[70%] md:w-[50%] w-[100%]">
        <div className="">
          <img src={DesktopHero} alt="Hero Image" className="hidden xl:block md:block" />
          <img src={MobileHero} alt="Mobile hero" className="xl:hidden md:hidden" />
        </div>
        <div className="grid xl:grid-cols-2 grid-cols-1 md:gap-y-3 pt-7 gap-x-20">
          <div>
            <h1 className="font-black text-6xl md:text-5xl tracking-wide leading-tight">
              The Bright Future of 3.0?
            </h1>
          </div>
          <div>
            <p className="text-primaryColor">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-brown hover:bg-navy text-offWhite text-xs mt-10 xl:mt-20 py-3 px-10 font-black tracking-widest">READ MORE</button>
          </div>
        </div>
      </div>
      {/* right hand side */}
      <div className="bg-navy px-5 py-7 text-offWhite xl:w-[30%] md:w-[50%] w-[100%]">
        <h1 className="text-orange font-black text-3xl tracking-wide">New</h1>
        <div className="flex flex-col gap-y-2.5 py-10">
          <a href="" className="font-bold hover:text-orange">Hydrogen VS Electric Cars</a>
          <p className="text-sm font-light text-lightGray">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="h-px bg-offWhite"></div>
        <div className="flex flex-col gap-y-2.5 py-10">
          <a href="" className="font-bold hover:text-orange">The Downsides of AI Artistry</a>
          <p className="text-sm font-light text-lightGray">
            {" "}
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="h-px bg-offWhite"></div>
        <div className="flex flex-col gap-y-2.5 py-5">
          <a href="" className="font-bold hover:text-orange"> Is VC Funding Drying Up?</a>
          <p className="text-sm font-light text-lightGray">
            {" "}
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
