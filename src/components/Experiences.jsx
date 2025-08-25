import React from "react";
import { ArrowRight } from "lucide-react";
import Main from '../assets/ExperiencesSec.jpg'
const Experiences = () => {

    return (
        <section className="lg:mt-40 mt-20 flex items-center justify-center">
            <div className="w-full h-full flex justify-between 2xl:justify-center items-center lg:flex-row flex-col">
                <div className="relative lg:min-w-2xl xl:w-3xl w-full">
                    <img src={Main} alt="Experiences Section" className="lg:z-20 lg:h-[450px] w-[90%] max-lg:m-auto rounded-2xl lg:rounded-l-none" />
                    <div className="absolute -z-20 lg:block hidden lg:w-96 h-96 bg-gray-100 rounded-r-3xl bottom-30"></div>
                    <div className="absolute -z-10  lg:block hidden lg:w-[660px] h-72 bg-gray-100 rounded-r-3xl bottom-20"></div>
                    </div>

                <div className="max-w-[570px] p-10">
                    <h1 className="text-orange-400">EXPERIENCES</h1>
                    <h2 className="text-4xl font-semibold py-8">We Provide You The Best Experience</h2>
                    <p className="font-light leading-8 text-neutral-800">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                    <button className="text-orange-400 text-sm my-4 flex items-center cursor-pointer">More Info <ArrowRight className="stroke-1 mx-4"></ArrowRight></button>

                </div>
            </div>
        </section>
    )
}

export default Experiences;