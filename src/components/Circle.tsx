import React, {
  type ComponentPropsWithoutRef,
  type PropsWithoutRef,
} from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
const Circle = (props: ComponentPropsWithoutRef<"div"> & {animate: boolean}) => {
  const { className, children, animate } = props;
  return (
    <div
      className={twMerge(
        "relative bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10",
        className
      )}
    >
      <motion.div className={twMerge("absolute inset-0 rounded-full outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 border-[6px]   border-transparent",animate && "border-t-fuchsia-500/30")} 
      animate={animate &&{
        rotate:360
      }}
      transition = {{
        ease:"linear",
        duration:12,
        repeat:Infinity
      }}
      />
      {children}
    </div>
  );
};

export default Circle;
