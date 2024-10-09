import { li, section } from "framer-motion/client";
import React, { useRef } from "react";
import Cutcornerbutton from "../components/Cutcornerbutton";
import Textbutton from "../components/Textbutton";
import { motion } from "framer-motion";

const listItems = [
  "Engineered to minimize the effects of gravitational force.",
  "Built to withstand harsh environmental conditions",
  "Weighs significantly less than traditional materials ",
];
const FeaturesGrid = () => {
  const torusknotref = useRef(null);
  const coneref = useRef(null);
  const firsthemisphere = useRef(null);
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-52">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <h2 className="text-4xl font-black font-heading md:text-5xl lg:text-6xl">
                GravLite™ - Ultra-Light Structural Panels
                </h2>
                <p className="text-xl mt-8 text-zinc-400 lg:text-2xl">
                  Blockforge provides robust and secure connection for the next
                  generation Future.
                </p>
                <ul className="flex flex-col gap-8 mt-12">
                  {listItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div
                        className="inline-flex size-8 justify-center items-center outline outline-4 outline-fuchsia-500/10
                -outline-offset-4 rounded-full flex-shrink-0"
                      >
                        <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                      </div>
                      <span className="text-xl font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-8 mt-12 ">
                  <Cutcornerbutton>Get Started</Cutcornerbutton>
                  <Textbutton color="fuschia">Learn More</Textbutton>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative z-0 inline-flex">
                  <motion.img
                    src="/assets/images/torus-knot.png"
                    alt=""
                    className="size-96 max-w-none "
                    ref={torusknotref}
                    initial={{
                      // rotate: -12,
                      translateY: 30,
                    }}
                  animate={{
                    translateY: -50
                  }
                  }
                  transition={{
                    duration: 2,
                    repeat:Infinity,
                    repeatType:"reverse",
                    ease:"easeInOut",
                  }}
                  />
                  <img
                    src="/assets/images/hemisphere.png"
                    alt=""
                    className="absolute top-3/4 size-96 -z-10 scale-x-[-1]"
                    ref={firsthemisphere}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hidden md:block">
              <div className="relative">
                <div className="z-0 absolute right-0 ">
                  <motion.img
                    src="/assets/images/cone.png"
                    alt=""
                    className="size-96 max-w-none rotate-12"
                    initial={{
                      translateY: 30,
                      rotate:12,
                      translateX:30
                    }}
                  animate={{
                    translateY: -50  
                  }
                  }
                  transition={{
                    duration: 2,
                    repeat:Infinity,
                    repeatType:"reverse",
                    ease:"easeInOut"
                  }}
                  />
                  <img
                    src="/assets/images/hemisphere.png"
                    alt=""
                    className="size-96 -z-10 absolute top-3/4"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
              AeroFoam™ - Weightless Insulation Technology
              </h2>
              <div className="flex flex-col text-xl text-zinc-400 mt-6 gap-6 ">
                <p className="lg:text-2xl">
                This cutting-edge material provides superior thermal insulation while being incredibly easy to handle and install.
                </p>
                <p> An ultra-lightweight insulation material</p>
                <div className="flex gap-8 mt-12">
                  <Cutcornerbutton>Get Started</Cutcornerbutton>
                  <Textbutton color="fuschia"> Learn More</Textbutton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
