// import React from 'react'
import { github } from "../assets"
import { useState } from "react"

const menus = [
  {title: 'Menu 1', src: github},
  {title: 'Menu 2', src: github},
  {title: 'Menu 3', src: github, gap: true},
  {title: 'Menu 4', src: github},
  {title: 'Menu 5', src: github},
  {title: 'Menu 6', src: github},
  {title: 'Menu 7', src: github, gap: true},
  {title: 'Menu 8', src: github},
]

function LayoutExample() {
  const [open, setOpen] = useState(true)

  return (
    <div className="w-full h-screen bg-white text-black flex">
      <div className={`${open ? 'w-72' : 'w-20'} p-5 pt-8 duration-500 h-screen bg-[#223567] relative`}>
        <img
         src={github}
         alt='logo'
         className={`absolute cursor-pointer rounded-full bg-black -right-3 top-9 w-7 border-2 ${!open && "rotate-180"}`}
         onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
           src={github}
           className={`cursor-pointer duration-500 w-10 h-10`}
          />
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>
            Design
          </h1>
        </div>
        <div className="mt-8 flex flex-col gap-4 relative">
          {
            menus.map((menu, index) => (
              <div key={index} className={`${menu.gap && 'mt-5'} flex items-center text-sm gap-4 font-medium p-2 text-white hover:bg-[#ff6e00] rounded-md cursor-pointer`}>
                <img src={menu.src} className="h-6 w-6"/>
                <span className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-20 overflow-hidden"}`}>{menu.title}</span>
              </div>
            ))
          }
        </div>
        {/* <ul className="pt-6">
          {
            menus.map((menu, index) => (
              <li key={index} className={`text-gray-300 text-sm w-full flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#ff6e00] rounded-md ${menu.gap ? 'mt-9' : 'mt-2'}`}>
                <img src={menu.src} className="h-6 w-6 duration-500 cursor-pointer"/>
                <span className={`${open ? '' : 'hidden'} origin-left duration-200`}>{menu.title}</span>
              </li>
            ))
          }
        </ul> */}
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default LayoutExample