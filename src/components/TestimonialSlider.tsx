import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

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
  autoplaySpeed?: number;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  className,
  autoplaySpeed = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNextSlide();
      }
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [activeIndex, isTransitioning, autoplaySpeed]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className={cn("relative overflow-hidden min-h-[350px]", className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        <div className="relative h-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "transition-all duration-500 ease-in-out absolute w-full",
                activeIndex === index ? 
                  "opacity-100 z-10 translate-x-0" : 
                  "opacity-0 z-0 translate-x-full"
              )}
            >
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < testimonial.rating
                          ? "fill-gold text-gold"
                          : "text-darkgrey-lightest"
                      }
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl font-light italic mb-8 text-white">
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
                    <p className="text-sm text-gold">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
