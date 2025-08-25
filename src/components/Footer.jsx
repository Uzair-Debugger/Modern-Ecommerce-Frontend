import React from "react";

const Footer = () => {

    return (

        <div className=' bg-gray-50 md:pt-20 pt-8'>

            <div className="grid gap-5 md:grid-cols-4 sm:grid-cols-2 p-5 text-sm leading-10 text-neutral-700">
                <div className="flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold">Panto</h1>
                    <p className="leading-relaxed mt-8">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>

                <div className="flex flex-col justify-center md:justify-self-center">
                    <li className="list-none text-orange-400">Services</li>
                    <li className="list-none">Email Marketing</li>
                    <li className="list-none">Campaigns</li>
                    <li className="list-none">Branding</li>
                </div>
                <div className="flex flex-col justify-center md:justify-self-center">
                    <li className="list-none text-orange-400">Furniture</li>
                    <li className="list-none">Beds</li>
                    <li className="list-none">Chair</li>
                    <li className="list-none">All</li>
                </div>
                <div className="flex flex-col justify-center md:justify-self-center">
                    <li className="list-none text-orange-400">Follow Us</li>
                    <li className="list-none">Facebook</li>
                    <li className="list-none">Twitter</li>
                    <li className="list-none">Instagram</li>
                </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-5 justify-between px-5 py-10 text-sm">
                <div>
                    <button className="text-gray-500">Copyright 	&copy; 2021</button>
                </div>
                <div className="flex gap-10 text-neutral-700">
                    <button>Terms & Conditions</button>
                    <button>Privacy Policy</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;