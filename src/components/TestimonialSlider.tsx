
import React, { useState } from 'react';
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
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <div className={cn("relative overflow-hidden min-h-[300px]", className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={cn(
              "transition-opacity duration-500 ease-in-out absolute inset-0 w-full",
              activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <div className="text-center">
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
                  <p className="font-medium text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gold">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {testimonials.length > 1 && (
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-darkgrey hover:border-gold transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-darkgrey hover:border-gold transition-colors"
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
