import React from "react";
import { ArrowRight } from "lucide-react";
import Img1 from '../assets/MaterialsSec_1.jpg'
import Img2 from '../assets/MaterialsSec_2.jpg'
import Img3 from '../assets/MaterialsSec_3.jpg'
const Materials = () => {

    return (
        <section className="flex my-30 justify-center">
            {/* <div> */}

                <div className="flex w-full max-w-[1500px] lg:justify-between lg:flex-row flex-col ">
                    <div className=" md:pl-20 md:pt-20 p-5 max-w-xl">
                        <h1 className="text-orange-400 text-xl">MATERIALS</h1>
                        <h2 className="lg:text-[40px] text-3xl font-semibold py-8 w-[90%]  leading-snug">Very Serious Materials For Making Furniture</h2>
                        <p className="font-light leading-8 text-neutral-800">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                        <button className="text-orange-400 text-sm my-4 flex items-center cursor-pointer">More Info <ArrowRight className="stroke-1 mx-4"></ArrowRight></button>
                    </div>


                    <div className="grid grid-cols-2 w-xl gap-10 items-end max-lg:self-end max-lg:w-full xl:w-full">
                        <div className="flex gap-10 h-fit flex-col items-end w-full">

                            <div className="overflow-hidden h-50 w-50 max-sm:w-40 flex items-end rounded-xl"><img src={Img1} alt="" className="w-full h-75 rounded-xl object-center transform scale-x-[-1] object-cover" /></div>
                            <div className="overflow-hidden w-50 h-64 max-sm:w-40 flex items-end rounded-xl"><img src={Img2} alt="" className="w-full h-75 rounded-xl object-left object-cover" /></div>
                        </div>

                        <div className="flex w-full items-end justify-baseline"><img src={Img3} alt="" className="w-full  h-85 rounded-l-xl object-right object-cover" /></div>
                    </div>
                </div>
            {/* </div> */}
        </section>
    )
}

export default Materials;