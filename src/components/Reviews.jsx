import React from "react";
import { reviews } from "../constants/data";

const Reviews = () => {

    return (
        <div>
            <div className="py-8 px-5">
                <div>
                    <div>
                        <h1 className="text-center text-lg text-orange-500 font-medium">TESTIMONIALS</h1>
                        <h2 className="text-center text-4xl font-semibold my-5">Our Client Reviews</h2>
                    </div>


                    <div className="py-5">
                        <div className="max-w-[1500px] m-auto grid grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 lg:justify-evenly justify-center items-center p-2 pt-5">
                            {reviews.map((item, index) => (
                                <div key={index} className="flex items-end justify-center  relative justify-self-center w-full gap-5 h-[500px] p-2 ">
                                    <img src={item.pic} alt="" className="rounded-xl w-full h-full object-center object-cover transform scale-x-[-1]" />
                                    <div className="absolute h-55 bottom-6 mx-8 rounded-xl p-5 z-10 bg-white">
                                        <div className="flex items-center justify-center absolute -top-8 left-1/2 -translate-x-1/2 bg-white w-15 h-15 rounded-full "><img src={item.pic} alt="" className="w-[90%] h-[90%] rounded-full  object-center object-cover" /></div>


                                        <h1 className="font-semibold text-center">{item.name}</h1>
                                        <h3 className="text-xs text-center my-2 text-neutral-500">{item.title}</h3>
                                        <p className="text-sm leading-relaxed text-center py-3 text-neutral-800">{item.description}</p>

                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;