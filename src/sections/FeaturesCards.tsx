import { div, image, section, title } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Textbutton from "../components/Textbutton";
import Card from "../components/Card";

const cardsData = [
  {
    image: "/assets/images/pill.png",
    title: "Nano-enhanced Polymers",
    content:
      "Our revolutionary polymers combine strength and flexibility at the nanoscale.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Smart Ceramics",
    content:
      "Adaptive ceramic materials that respond to environmental changes.",
    color: "lime",
  },
  {
    image: "/assets/images/cone.png",
    title: "Biomimetic Alloys",
    content:
      "Metal alloys inspired by nature, offering unparalleled performance.",
    color: "cyan",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Quantum Materials",
    content:
      "Harnessing quantum effects for next-gen computing and energy solutions.",
    color: "violet",
  },
];

const FeaturesCards = () => {
  const [selected, setSelected] = useState<number>(0);
  const [ishovered, setIshovered] = useState(false)
  useEffect(() => {
    if(ishovered) return;
   const timeout =  setTimeout(
      () =>
        setSelected((selected) =>
          selected === cardsData.length - 1 ? 0 : selected + 1
        ),
      2000
    );
    return(() => clearTimeout(timeout))
  }, [selected,ishovered]);
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h2 className="font-heading font-black text-3xl text-center md:text-5xl md:-mt-28 lg:text-6xl">
          Discover the Future of Material Science with Laconte.
        </h2>
        <div className="mt-36 lg:mt-40 flex ">
          <div className="flex flex-none gap-8">
            {cardsData.map((card, index) => (
              <div
              onMouseEnter={() => setIshovered(true)}
              onMouseLeave={() => setIshovered(false)}
              key={index}
                className="inline-flex transition-all duration-500"
                style={{
                  transform: `translateX(calc((-100% - 32px)*${selected}))`,
                }}
              >
                <Card
                  key={index}
                  className="max-w-xs md:max-w-md"
                  color={card.color}
                >
                  <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent_40px,black_40px)]"></div>
                  <div>
                    <div className="flex justify-center -mt-28">
                      <div className="inline-flex relative">
                        <img
                          src={`${card.image}`}
                          alt=""
                          className="size-40 group-hover:-translate-y-6 transition duration-300"
                        />
                        <div className="h-4 w-full absolute bg-zinc-950/70 top-[calc(100%+16px)] rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30 transition duration-300"></div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-heading font-black mt-12">
                      {card.title}
                    </h3>
                    <p className="text-lg mt-4 text-zinc-400">{card.content}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="inline-flex flex-row gap-4 bg-zinc-950 p-2.5 rounded-full">
          {[...cardsData].map((card, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={twMerge(
                "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                index == selected && "bg-zinc-300"
              )}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
