
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
      "glass-card p-8 hover:shadow-gold/10 hover:shadow-xl hover:border-gold/30 transition-all duration-300 group",
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="text-gold mb-6 flex justify-center md:justify-start">
          <div className="w-16 h-16 rounded-full bg-black-light/80 border border-gold/20 flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left group-hover:text-gold transition-colors">
          {title}
        </h3>
        
        <p className="text-ash-light mb-6 text-center md:text-left flex-grow">
          {description}
        </p>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-gold hover:text-gold-light transition-colors font-medium group-hover:gap-2 mt-auto justify-center md:justify-start"
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
