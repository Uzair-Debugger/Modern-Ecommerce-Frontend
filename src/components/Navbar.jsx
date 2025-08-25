import React, { useState } from "react";
import { Menu, HandbagIcon } from "lucide-react";

const Navbar = () => {

    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <nav className=" w-full text-white poppins z-50  ">
            <div className="flex justify-between w-full text-xl px-10 py-5 font-light">
                <h1 className="flex items-center text-3xl font-semibold">Panto</h1>

                <div className="hidden md:flex items-center w-[60%] justify-evenly">
                    <select name="" id="" className="outline-none cursor-pointer">
                        <option value="" disabled selected className="text-gray-500">
                            Furniture
                        </option>
                    </select>

                    <li className="list-none p-1 cursor-pointer">Shop</li>
                    <li className="list-none p-1 cursor-pointer">About us</li>
                    <li className="list-none p-1 cursor-pointer">Contact</li>
                </div>
                <div className="flex items-center gap-5">
                    <HandbagIcon size={33}></HandbagIcon>
                    <Menu onClick={()=>setMenuOpened(!menuOpened)} size={33} className="md:hidden"></Menu>
                </div>
            </div>


            

                <div className={`relative md:hidden backdrop-blur-2xl flex flex-col items-center gap-5 p-5 justify-center transition-all duration-300 ease-in-out ${!menuOpened?`-translate-y-100`:`translate-y-0`}`}>
                <select name="" id="" className="outline-none cursor-pointer">
                    <option value="" disabled selected className="text-gray-500">
                        Furniture
                    </option>
                </select>

                <li className="list-none p-1 cursor-pointer">Shop</li>
                <li className="list-none p-1 cursor-pointer">About us</li>
                <li className="list-none p-1 cursor-pointer">Contact</li>
            </div>

           
        </nav >
    )
}
export default Navbar;