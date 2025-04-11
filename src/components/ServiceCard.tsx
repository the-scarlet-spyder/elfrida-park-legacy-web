
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link, 
  className 
}) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-earth-lightest group",
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="text-gold mb-4 flex justify-center md:justify-start">
          {icon}
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center md:text-left">
          {title}
        </h3>
        
        <p className="text-earth-dark mb-6 text-center md:text-left flex-grow">
          {description}
        </p>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-gold hover:text-gold-dark transition-colors font-medium group-hover:gap-2 mt-auto justify-center md:justify-start"
        >
          <span>Learn More</span>
          <ArrowRight 
            size={18} 
            className="ml-1 transform transition-transform group-hover:translate-x-1" 
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
