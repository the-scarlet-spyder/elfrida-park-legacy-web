
import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  rating: number;
  image?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  className?: string;
  autoSlideInterval?: number; // in milliseconds
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ 
  testimonials,
  className,
  autoSlideInterval = 5000, // default to 5 seconds
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  }, [testimonials.length]);
  
  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  
  // Auto-slide functionality - always enabled
  useEffect(() => {
    if (!isPaused && testimonials.length > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
      
      return () => clearInterval(interval);
    }
    return undefined;
  }, [isPaused, nextSlide, testimonials.length, autoSlideInterval]);
  
  // Ensure we have at least 3 testimonials
  const displayedTestimonials = testimonials.length < 3
    ? [...testimonials, ...testimonials, ...testimonials].slice(0, 3)
    : testimonials;
  
  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[300px]">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "transition-all duration-700 absolute w-full",
                activeIndex === index 
                  ? "opacity-100 translate-x-0" 
                  : index < activeIndex 
                    ? "opacity-0 -translate-x-full" 
                    : "opacity-0 translate-x-full"
              )}
              style={{
                zIndex: activeIndex === index ? 10 : 0,
                position: activeIndex === index ? 'relative' : 'absolute',
              }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonial.rating ? "fill-gold text-gold" : "text-gray-300"}
                    />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-light italic mb-6 text-white">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  {testimonial.image && (
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/80">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-8">
        {displayedTestimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full mx-1 transition-all duration-300",
              activeIndex === index ? "bg-gold scale-125" : "bg-white/30"
            )}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation buttons */}
      {displayedTestimonials.length > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-earth-light text-white hover:bg-gold hover:text-black hover:border-gold transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-earth-light text-white hover:bg-gold hover:text-black hover:border-gold transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialSlider;
