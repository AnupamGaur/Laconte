import React, { useRef } from "react";
import Cutcornerbutton from "../components/Cutcornerbutton";
import Hexagon from "../components/Hexagon";
import Circle from "../components/Circle";
import {motion, useScroll, useTransform} from "framer-motion"
const Hero = () => {
  const icosahedronRef = useRef(null)
  const cuberef = useRef(null)
  const cuboidref = useRef(null)
  const torusref = useRef(null)
  const { scrollYProgress:torusscrollYProgress } = useScroll({
    target:torusref,
    offset: ["start end","end start"],
  });
  const { scrollYProgress : cubescrollYProgress} = useScroll({
    target: cuberef,
    offset: ["start end", "end start"],
  });
 const {scrollYProgress} = useScroll({
    target: icosahedronRef,
    offset: ["start end", "end start"],
  })
  const {scrollYProgress: cuboidscrollYProgress} = useScroll({
    target: cuboidref,
    offset: ["start end", "end start"],
})
const torusRotate = useTransform(torusscrollYProgress,[0,1],[0,360])
  const cubeRotate = useTransform(cubescrollYProgress,[0,1],[300,-45])
  const icosahedronRotate = useTransform(scrollYProgress,[0,1],[100,-45])
  const cuboidrotate = useTransform(cuboidscrollYProgress,[0,1],[150,-30])
  return (
    <section className="py-24 overflow-x-clip md:py-52">
      <div className="container">
        <p className="uppercase text-center font-extrabold text-zinc-500 tracking-wider">
          Intoducing Laconte
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl mt-4 text-center max-w-3xl mx-auto">
        Unlock the<span className="block">Future of Materials!</span>
        </h1>
        <p className="text-xl md:text-2xl text-center mt-6 text-zinc-400 mx-auto max-w-xl">
        Pioneering the next generation of advanced materials.
        </p>
        <div className="flex justify-center mt-10">
          <Cutcornerbutton>Get Started</Cutcornerbutton>
        </div>
        <div className="flex justify-center mt-24">
          <div className="inline-flex relative  z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" size={1100} reverse={true} ></Hexagon>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" size={1800} duration={20}></Hexagon>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] -top-[900px]" animate={true}>
                <motion.img
                  src="/assets/images/cube.png"
                  alt=""
                  className=" size-[140px]"
                  ref={cuberef}
                  style={{
                    rotate: cubeRotate
                  }}
                />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] top-[270px]" animate={true}>
                <motion.img
                  src="/assets/images/cuboid.png"
                  alt=""
                  className=" size-[140px]"
                  ref={cuboidref}
                  style={{
                    rotate: cuboidrotate
                  }}
                />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px]" animate={false}>
                <motion.img
                  src="/assets/images/torus.png"
                  alt=""
                  className=" size-[140px]"
                  ref={torusref}
                  style={
                    {
                      rotate:torusRotate
                    }
                  }
                />
              </Circle>
            </div>
            <motion.div className="inline-flex" ref={icosahedronRef} style={{
              rotate: icosahedronRotate
            }}>
            <img
              src="/assets/images/icosahedron.png"
              alt=""
              className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-240"
            />
            <img
              src="/assets/images/icosahedron.png"
              alt=""
              className="w-[500px]"
            />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full pt-2 justify-center">
            <motion.div className="h-3 w-1 bg-fuchsia-500 rounded-full" animate={{
              translateY:12,
              opacity:0.2
            }}
            transition={{
              duration:2,
              ease:"linear",
              repeat:Infinity,
              repeatType:"loop",
            }}></motion.div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking wider">Scroll to learn more</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
