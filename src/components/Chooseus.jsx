import React from "react";
import { chooseUs } from "../constants/data";
import { ArrowRight } from "lucide-react";
const Chooseus = () =>{

    return(
        <section className="p-2 lg:my-20 my-10 flex lg:flex-row flex-col items-center justify-between xl:justify-center">
            
                <h1 className="flex items-center text-4xl font-semibold lg:w-[30%] justify-center py-5 min-w-fit">Why<br/>Choosing Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-4">
                {
                   chooseUs.map((item, index) => (
                    <div key={index} className="max-w-[285px] p-1 ">
                        <h2 className="text-2xl text-neutral-800 font-semibold my-4">{item.title}</h2>
                        <p className="text-sm text-neutral-700 font-light leading-7">{item.description}</p>
                        <button className="text-orange-400 text-sm my-4 flex items-center cursor-pointer">More Info <ArrowRight className="stroke-1 mx-4"></ArrowRight></button>
                    </div>
                   ))
                }
            </div>
        </section>
    )
}

export default Chooseus;