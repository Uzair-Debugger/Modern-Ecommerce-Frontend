import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Our Showroom",
            details: ["123 Design Street", "New York, NY 10001", "United States"],
            color: "text-blue-400"
        },
        {
            icon: Phone,
            title: "Call Us",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Mon-Fri: 9AM-6PM"],
            color: "text-green-400"
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["info@panto.com", "support@panto.com", "sales@panto.com"],
            color: "text-purple-400"
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"],
            color: "text-orange-400"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-30">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Have a question about our furniture? Need design advice? Or just want to say hello? 
                            We'd love to hear from you. Reach out using any of the methods below.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Info Cards */}
            <div className="py-16 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="bg-gray-700 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
                                <div className={`inline-flex items-center justify-center w-16 h-16 ${info.color} bg-gray-600 rounded-full mb-4`}>
                                    <info.icon size={32} />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                                <div className="space-y-2">
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Form & Map */}
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                            
                            {submitStatus === 'success' && (
                                <div className="bg-green-600 text-white p-4 rounded-lg mb-6">
                                    <p className="font-semibold">Message sent successfully!</p>
                                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                        placeholder="What's this about?"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-vertical"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Map/Additional Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Visit Our Showroom</h2>
                            
                            {/* Map Placeholder */}
                            <div className="bg-gray-800 rounded-lg mb-8 h-64 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin size={48} className="mx-auto mb-4 text-orange-400" />
                                    <p className="text-gray-400">Interactive Map</p>
                                    <p className="text-sm text-gray-500">123 Design Street, New York, NY 10001</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">Why Visit Us?</h3>
                                    <ul className="space-y-3 text-gray-300">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Experience our furniture in person before purchasing</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Get personalized design consultations from our experts</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>See our latest collections and seasonal displays</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Take advantage of showroom-exclusive offers</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">Quick Response Promise</h3>
                                    <p className="text-gray-300 mb-4">
                                        We pride ourselves on exceptional customer service. Here's what you can expect:
                                    </p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>• Email inquiries: Within 4 hours</li>
                                        <li>• Phone calls: Immediate assistance</li>
                                        <li>• Design consultations: Same-day booking</li>
                                        <li>• Order updates: Real-time notifications</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                        
                        <div className="space-y-6">
                            <div className="bg-gray-700 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3">Do you offer furniture assembly services?</h3>
                                <p className="text-gray-300">Yes, we offer professional assembly services for all our furniture. Our trained technicians can assemble your pieces at your location for an additional fee.</p>
                            </div>
                            
                            <div className="bg-gray-700 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3">What is your return policy?</h3>
                                <p className="text-gray-300">We offer a 30-day return policy for most items. Custom-made furniture may have different return terms. Please check our full return policy for details.</p>
                            </div>
                            
                            <div className="bg-gray-700 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3">How long does delivery take?</h3>
                                <p className="text-gray-300">Standard delivery takes 7-14 business days within the continental US. Custom orders may take 4-8 weeks depending on the complexity.</p>
                            </div>
                            
                            <div className="bg-gray-700 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3">Do you offer financing options?</h3>
                                <p className="text-gray-300">Yes, we partner with several financing companies to offer flexible payment plans. Contact us for more information about available options.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;