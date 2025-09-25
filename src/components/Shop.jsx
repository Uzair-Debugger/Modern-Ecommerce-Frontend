import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List } from 'lucide-react';

const Shop = () => {
    const [searchParams] = useSearchParams();
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('name');
    const [filterOpen, setFilterOpen] = useState(false);
    const category = searchParams.get('category') || 'all';

    // Sample products data
    const products = [
        {
            id: 1,
            name: "Modern Sofa",
            price: 1299,
            category: "living-room",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
            rating: 4.5,
            description: "Comfortable modern sofa perfect for any living room"
        },
        {
            id: 2,
            name: "Dining Table",
            price: 899,
            category: "dining-room",
            image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400&h=300&fit=crop",
            rating: 4.8,
            description: "Elegant wooden dining table for family gatherings"
        },
        {
            id: 3,
            name: "Office Chair",
            price: 399,
            category: "office",
            image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&h=300&fit=crop",
            rating: 4.3,
            description: "Ergonomic office chair for maximum comfort"
        },
        {
            id: 4,
            name: "Queen Bed Frame",
            price: 799,
            category: "bedroom",
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
            rating: 4.6,
            description: "Stylish queen bed frame made from solid wood"
        },
        {
            id: 5,
            name: "Outdoor Patio Set",
            price: 1199,
            category: "outdoor",
            image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
            rating: 4.4,
            description: "Weather-resistant patio furniture set"
        },
        {
            id: 6,
            name: "Coffee Table",
            price: 449,
            category: "living-room",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
            rating: 4.7,
            description: "Modern glass coffee table with wooden legs"
        }
    ];

    // Filter products based on category
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            default:
                return a.name.localeCompare(b.name);
        }
    });

    const getCategoryTitle = () => {
        if (category === 'all') return 'All Products';
        return category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <div className="bg-gray-800 pt-30 pb-16">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center mb-4">
                        {getCategoryTitle()}
                    </h1>
                    <p className="text-gray-300 text-center max-w-2xl mx-auto">
                        Discover our carefully curated collection of premium furniture 
                        designed to transform your space into something extraordinary.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setFilterOpen(!filterOpen)}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            <Filter size={18} />
                            Filters
                        </button>
                        
                        <select 
                            value={sortBy} 
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 bg-gray-800 rounded-lg border-none outline-none"
                        >
                            <option value="name">Sort by Name</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-orange-500' : 'bg-gray-800'} hover:bg-orange-600 transition-colors`}
                        >
                            <Grid size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded ${viewMode === 'list' ? 'bg-orange-500' : 'bg-gray-800'} hover:bg-orange-600 transition-colors`}
                        >
                            <List size={18} />
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className={`${
                    viewMode === 'grid' 
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                        : 'space-y-6'
                }`}>
                    {sortedProducts.map((product) => (
                        <div key={product.id} className={`bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
                            viewMode === 'list' ? 'flex gap-6' : ''
                        }`}>
                            <div className={`${viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}`}>
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className={`w-full object-cover ${
                                        viewMode === 'list' ? 'h-48' : 'h-64'
                                    }`}
                                />
                            </div>
                            <div className="p-6 flex-1">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-orange-400">
                                        ${product.price}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-sm">{product.rating}</span>
                                    </div>
                                </div>
                                <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {sortedProducts.length === 0 && (
                    <div className="text-center py-16">
                        <h3 className="text-2xl font-semibold mb-4">No products found</h3>
                        <p className="text-gray-400">Try adjusting your filters or search criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;