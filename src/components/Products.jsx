import React, { useState } from "react";
import { products } from "../constants/data";
import { Plus, Star } from "lucide-react";
import { stars } from "../constants/data";
import { useCart } from "../context/cartContext.jsx";

const Product = () => {
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState('Chair');
    const categories = ['Chair', 'Beds', 'Sofa', 'Lamp'];

    const handleAddToCart = (product) => {
        addToCart(product);
    }

    const filteredProducts = products.filter(product => 
        product.productCategory.toLowerCase() === selectedCategory.toLowerCase()
    );

    return (
        <section className="bg-gray-100 p-5 flex flex-col gap-5">
            <h1 className="text-center text-4xl mt-10">Best Selling Product</h1>
            
            <div className="flex rounded-4xl bg-gray-200 w-fit m-auto p-1 my-8">
                {categories.map((category) => (
                    <button 
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-4xl py-2 px-4 text-md transition-colors ${
                            selectedCategory === category ? 'bg-white' : 'hover:bg-gray-100'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center w-full my-10">
                {filteredProducts.map((product, index) => (
                    <div key={product.id} className="my-10 rounded-xl bg-white m-5 min-w-[230px] min-h-[420px]">
                        <div className="w-full bg-gray-50 h-[55%] px-5 rounded-t-xl">
                            <img 
                                width={200} 
                                height={250} 
                                src={product.productImage} 
                                alt={product.productName} 
                                className={`${product.id>3?"w-full h-full rounded-md object-cover":""} z-50 transform ${index < 3 ? 'scale-x-[-1] -translate-y-15' : '-translate-y-6'}`} 
                            />
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
                                <span className="font-medium text-xl">
                                    <span className="text-lg relative bottom-1.5">$</span>
                                    {product.productPrice}
                                </span>
                                <Plus 
                                    onClick={() => handleAddToCart(product)} 
                                    size={40} 
                                    className="flex p-1 items-center justify-center rounded-full text-xl font-medium text-white bg-gray-900 cursor-pointer hover:bg-gray-700 transition-colors"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                
                {filteredProducts.length === 0 && (
                    <div className="col-span-full text-center py-20">
                        <p className="text-gray-500 text-lg">No products found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Product;