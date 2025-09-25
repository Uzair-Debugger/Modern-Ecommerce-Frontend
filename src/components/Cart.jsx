import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { Plus, Minus, Trash2, ArrowLeft } from "lucide-react";

const Cart = () => {
    const { 
        productItems, 
        removeFromCart, 
        updateQuantity, 
        getTotalPrice, 
        getTotalItems, 
        clearCart 
    } = useCart();

    if (productItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-100 py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center mb-8">
                        <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
                            <ArrowLeft className="mr-2" size={20} />
                            Continue Shopping
                        </Link>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart is Empty</h2>
                        <p className="text-gray-600 mb-6">Add some products to your cart to see them here.</p>
                        <Link 
                            to="/" 
                            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Start Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
                        <ArrowLeft className="mr-2" size={20} />
                        Continue Shopping
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
                    <button 
                        onClick={clearCart}
                        className="flex items-center text-red-600 hover:text-red-800"
                    >
                        <Trash2 className="mr-1" size={18} />
                        Clear Cart
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {productItems.map((item) => (
                                <div key={item.id} className="flex items-center p-6 border-b border-gray-200 last:border-b-0">
                                    {/* Product Image */}
                                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 mr-6">
                                        <img 
                                            src={item.productImage} 
                                            alt={item.productName}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800">{item.productName}</h3>
                                        <p className="text-gray-600">{item.productCategory}</p>
                                        <p className="text-lg font-bold text-gray-900 mt-2">
                                            ${item.productPrice}
                                        </p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center mx-6">
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="mx-4 font-semibold text-lg min-w-[2rem] text-center">
                                            {item.quantity}
                                        </span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    {/* Subtotal */}
                                    <div className="text-right mr-4">
                                        <p className="text-lg font-bold text-gray-900">
                                            ${(item.productPrice * item.quantity).toFixed(2)}
                                        </p>
                                    </div>

                                    {/* Remove Button */}
                                    <button 
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-600 hover:text-red-800 p-2"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Items ({getTotalItems()})</span>
                                    <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-semibold">Free</span>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between text-lg font-bold">
                                        <span>Total</span>
                                        <span>${getTotalPrice().toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                                Proceed to Checkout
                            </button>

                            <div className="mt-4 text-center">
                                <Link 
                                    to="/" 
                                    className="text-orange-500 hover:text-orange-600 underline"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;