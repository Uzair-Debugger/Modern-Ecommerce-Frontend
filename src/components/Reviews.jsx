// import React from "react";
import { reviews } from "../constants/data";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div>
      <div className="py-8 px-5">
        <div>
          <div>
            <h1 className="text-center text-lg text-orange-500 font-medium">TESTIMONIALS</h1>
            <h2 className="text-center text-4xl font-semibold my-5">Our Client Reviews</h2>
          </div>

          <div className="py-5">
            <div className="max-w-[800px] m-auto relative">
              {/* Main slider container */}
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {reviews.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="flex items-end justify-center relative w-full h-[500px]">
                        <img 
                          src={item.pic} 
                          alt={item.name}
                          className="rounded-xl w-full h-full object-center object-cover transform scale-x-[-1]" 
                        />
                        <div className="absolute h-55 bottom-6 mx-8 rounded-xl p-5 z-10 bg-white shadow-lg">
                          <div className="flex items-center justify-center absolute -top-8 left-1/2 -translate-x-1/2 bg-white w-16 h-16 rounded-full shadow-md">
                            <img 
                              src={item.pic} 
                              alt={item.name}
                              className="w-[90%] h-[90%] rounded-full object-center object-cover" 
                            />
                          </div>
                          <h1 className="font-semibold text-center mt-6">{item.name}</h1>
                          <h3 className="text-xs text-center my-2 text-neutral-500">{item.title}</h3>
                          <p className="text-sm leading-relaxed text-center py-3 text-neutral-800">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-20"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-20"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              {/* Dot indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-orange-500 scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    disabled={isTransitioning}
                  />
                ))}
              </div>

              {/* Progress indicator */}
              <div className="mt-4 text-center text-sm text-gray-500">
                {currentIndex + 1} of {reviews.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;