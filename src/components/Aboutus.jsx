import React from 'react';
import { Award, Users, Heart, Leaf } from 'lucide-react';

const AboutUs = () => {
    const stats = [
        { icon: Users, number: "50K+", label: "Happy Customers" },
        { icon: Award, number: "15+", label: "Years Experience" },
        { icon: Heart, number: "99%", label: "Customer Satisfaction" },
        { icon: Leaf, number: "100%", label: "Sustainable Materials" }
    ];

    const team = [
        {
            name: "Sarah Johnson",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
            description: "Visionary leader with 20+ years in furniture design"
        },
        {
            name: "Michael Chen",
            role: "Head of Design",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
            description: "Award-winning designer specializing in modern aesthetics"
        },
        {
            name: "Emily Rodriguez",
            role: "Sustainability Director",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
            description: "Environmental expert ensuring eco-friendly practices"
        }
    ];

    return (
        <div className="min-h-screen -z-10 relative  bg-gray-900 text-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 py-30">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">About Panto</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            We're passionate about creating beautiful, sustainable furniture that transforms 
                            houses into homes. Since 2009, we've been crafting premium pieces that combine 
                            timeless design with modern functionality.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
                                    <stat.icon size={32} />
                                </div>
                                <div className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
                                <div className="text-gray-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img 
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop" 
                                alt="Our workshop"
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Founded in 2009 by Sarah Johnson, Panto began as a small workshop with a 
                                    big dream: to create furniture that's both beautiful and responsible. What 
                                    started as handcrafting pieces for local customers has grown into a 
                                    trusted brand serving thousands of homes worldwide.
                                </p>
                                <p>
                                    Our journey has always been guided by three core principles: exceptional 
                                    craftsmanship, sustainable practices, and customer satisfaction. Every 
                                    piece we create tells a story of dedication, innovation, and respect for 
                                    both our customers and our planet.
                                </p>
                                <p>
                                    Today, we continue to push boundaries in design while maintaining our 
                                    commitment to quality and sustainability. Each piece is a testament to 
                                    our belief that great furniture should last for generations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Mission */}
            <div className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
                        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                            To create exceptional furniture that enhances lives while protecting our planet. 
                            We believe that beautiful design and environmental responsibility go hand in hand.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award size={40} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                                <p className="text-gray-400">
                                    Every piece is crafted with meticulous attention to detail and built to last.
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Leaf size={40} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Sustainable</h3>
                                <p className="text-gray-400">
                                    We use responsibly sourced materials and eco-friendly manufacturing processes.
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Heart size={40} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Customer Love</h3>
                                <p className="text-gray-400">
                                    Your satisfaction is our priority, from design to delivery and beyond.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            The passionate individuals behind Panto's success, dedicated to bringing 
                            you exceptional furniture and service.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="text-center">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                                />
                                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-orange-400 font-medium mb-4">{member.role}</p>
                                <p className="text-gray-400">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Discover our collection and find the perfect pieces to make your house a home.
                    </p>
                    <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                        Shop Our Collection
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;