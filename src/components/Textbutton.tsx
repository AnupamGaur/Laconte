import React, { type ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Textbutton = (props: ComponentPropsWithoutRef<'button'> & {color:string}) => {
  const {children, className, color} = props
  return (
    <div>
                    <button className={twMerge("font-heading text-sm tracking-wider text-fuchsia-500 uppercase font-extrabold",color === "lime" && "text-lime-500",color === "cyan" && "text-cyan-500",color === "violet" && "text-violet-500", className)}>
                {children}
              </button>
    </div>
  )
}

export default Textbutton