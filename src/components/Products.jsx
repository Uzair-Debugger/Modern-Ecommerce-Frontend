import React from "react";
import { products } from "../constants/data";
import { Plus, Star } from "lucide-react";
import { stars } from "../constants/data";
const Product = () => {

    return (

        <section className="bg-gray-100 p-5 flex flex-col gap-5">
            <h1 className="text-center text-4xl mt-10">Best Selling Product</h1>
            <div className="flex rounded-4xl bg-gray-200 w-fit m-auto p-1 my-8">
                <button className="rounded-4xl py-2 px-4 text-md bg-white">Chair</button>
                <button className="rounded-4xl py-2 px-4 text-md">Beds</button>
                <button className="rounded-4xl py-2 px-4 text-md">Sofa</button>
                <button className="rounded-4xl py-2 px-4 text-md">Lamp</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center w-full my-10">
                {products.map((product, index) => (
                    <div key={index} className="my-10 rounded-xl bg-white m-5 min-w-[230px]">
                        <div className="w-full bg-gray-50 h-[55%] px-5 rounded-t-xl">

                            <img width={200} height={250} src={product.productImage} alt={product.productName} className={`z-50 transform ${index < 3 ? ` scale-x-[-1] -translate-y-15` : `-translate-y-6`}`} />
                        </div>
                        <div className="mx-5 mt-2 relative top-5">
                            <h2 className="text-neutral-500 font-light">{product.productCategory}</h2>
                            <h1 className="text-xl font-medium">{product.productName}</h1>
                            <div className="py-3 flex gap-1">
                                {stars.map((starItem, starIndex) => (
                                    <Star
                                        size={17}
                                        key={starIndex}
                                        className={starItem <= product.totalStars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                    />
                                ))}
                            </div>

                            <div className="flex w-full items-center justify-between py-3">
                                <span className="font-medium text-xl"><span className="text-lg relative bottom-1.5">$</span>{product.productPrice}</span>
                                <Plus size={40} className="flex p-1 items-center justify-center rounded-full text-xl font-medium text-white bg-gray-900"></Plus>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Product;