import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingBag, ChevronDown } from "lucide-react";
import { useCart } from "../context/cartContext";

const Navbar = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    
    // Add error handling for the cart context
    const cartContext = useCart();
    const getTotalItems = cartContext?.getTotalItems || (() => 0);
    const totalItems = getTotalItems();

    // Furniture categories for dropdown
    const furnitureCategories = [
        { name: "Living Room", path: "/shop?category=living-room" },
        { name: "Bedroom", path: "/shop?category=bedroom" },
        { name: "Dining Room", path: "/shop?category=dining-room" },
        { name: "Office", path: "/shop?category=office" },
        { name: "Outdoor", path: "/shop?category=outdoor" }
    ];

    return (
        <nav className="absolute top-0 left-0 right-0 text-white poppins z-50">
            <div className="flex justify-between w-full text-xl px-10 py-5 font-light">
                <Link to="/">
                    <h1 className="flex items-center text-3xl font-semibold">Panto</h1>
                </Link>

                <div className="hidden md:flex items-center w-[60%] justify-evenly">
                    {/* Furniture Dropdown with Hover */}
                    <div className="relative group">
                        <div className="flex items-center gap-1 cursor-pointer p-2 hover:text-orange-300 transition-colors">
                            <span>Furniture</span>
                            <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
                        </div>
                        
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="py-2">
                                {furnitureCategories.map((category, index) => (
                                    <Link
                                        key={index}
                                        to={category.path}
                                        className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-300 transition-colors"
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <NavLink 
                        to="/shop" 
                        className={({ isActive }) => 
                            `p-2 cursor-pointer transition-colors hover:text-orange-300 ${isActive ? 'text-orange-400' : ''}`
                        }
                    >
                        Shop
                    </NavLink>
                    
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            `p-2 cursor-pointer transition-colors hover:text-orange-300 ${isActive ? 'text-orange-400' : ''}`
                        }
                    >
                        About Us
                    </NavLink>
                    
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => 
                            `p-2 cursor-pointer transition-colors hover:text-orange-300 ${isActive ? 'text-orange-400' : ''}`
                        }
                    >
                        Contact
                    </NavLink>
                </div>
                
                <div className="flex items-center gap-5">
                    <NavLink to='/cart' className="relative">
                        <ShoppingBag size={33} />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold">
                                {totalItems}
                            </span>
                        )}
                    </NavLink>
                    <Menu 
                        onClick={() => setMenuOpened(!menuOpened)} 
                        size={33} 
                        className="md:hidden cursor-pointer"
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden backdrop-blur-2xl flex flex-col items-center gap-5 p-5 justify-center transition-all duration-300 ease-in-out ${!menuOpened ? '-translate-y-full opacity-0 invisible' : 'translate-y-0 opacity-100 visible'}`}>
                {/* Mobile Furniture Dropdown */}
                <div className="w-full">
                    <div className="text-center mb-3 font-medium">Furniture Categories</div>
                    <div className="flex flex-col gap-2">
                        {furnitureCategories.map((category, index) => (
                            <Link
                                key={index}
                                to={category.path}
                                className="text-center p-2 hover:text-orange-300 transition-colors text-sm"
                                onClick={() => setMenuOpened(false)}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <NavLink 
                    to="/shop" 
                    className="p-2 cursor-pointer hover:text-orange-300 transition-colors"
                    onClick={() => setMenuOpened(false)}
                >
                    Shop
                </NavLink>
                
                <NavLink 
                    to="/about" 
                    className="p-2 cursor-pointer hover:text-orange-300 transition-colors"
                    onClick={() => setMenuOpened(false)}
                >
                    About Us
                </NavLink>
                
                <NavLink 
                    to="/contact" 
                    className="p-2 cursor-pointer hover:text-orange-300 transition-colors"
                    onClick={() => setMenuOpened(false)}
                >
                    Contact
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;