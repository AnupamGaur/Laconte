import React from "react";
import Card from "../components/Card";
import { twMerge } from "tailwind-merge";
import Cutcornerbutton from "../components/Cutcornerbutton";

const postData = [
  {
    title: "The Future of Self-Healing Materials",
    description: "Discover how self-repairing materials are transforming industries and lowering maintenance costs.",
    tag: "Innovation",
    color: "fuchsia",
  },
  {
    title: "Lightweight Alloys: The Secret to Efficient Engineering",
    description: "Learn how ultra-lightweight alloys are reshaping transportation and construction with their unique properties.",
    tag: "Aerospace",
    color: "lime",
  },
  {
    title: "Eco-Friendly Composites: A Step Towards Sustainability",
    description: "Explore how renewable materials are making a positive impact on our environment and industries.",
    tag: "Sustainability",
    color: "cyan",
  },
  {
    title: "How Smart Nanocoatings Are Revolutionizing Durability",
    description: "Find out how adaptive nanocoatings are enhancing product performance across sectors like aerospace and electronics.",
    tag: "Nanotechnology",
    color: "violet",
  },
];

const LatestPosts = () => {
  return (
    <section className="md:mt-56">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl text-center ">
          Your portal to everything Smart Materials
        </h2>
        <p className="text-xl text-zinc-400 text-center mt-8 lg:text-2xl">
          Keep up with the newest trends, updates and insights in the Materials
          world, updated Weekly
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...postData].map((item, itemIndex) => (
            <Card key={itemIndex} buttontext="Read More" color={item.color}>
              <div>
                <div
                  className={twMerge(
                    `px-3 py-1.5 uppercase font-heading font-extralight tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full`,
                    item.color === "lime" && "bg-lime-500/15 text-lime-500",
                    item.color === "cyan" && "bg-cyan-500/15 text-cyan-500",
                    item.color === "violet" &&
                      "bg-violet-500/15 text-violet-500"
                  )}
                >
                  {item.tag}
                </div>
                <h3 className="font-heading font-black text-3xl mt-4 ">
                  {item.title}
                </h3>
                <p className="text-xl text-zinc-400 mt-6 ">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-14 cursor-pointer">
          <Cutcornerbutton> Read All Blogs</Cutcornerbutton>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
