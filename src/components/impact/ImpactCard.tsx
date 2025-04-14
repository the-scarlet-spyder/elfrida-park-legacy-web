
import React from 'react';

interface ImpactCardProps {
  title: string;
  description: string;
  image: string;
  stats: string[];
  className?: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ 
  title, 
  description, 
  image, 
  stats,
  className 
}) => (
  <div className={`bg-darkgrey-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all reveal ${className}`}>
    <div className="aspect-[16/9] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 font-playfair text-gold">{title}</h3>
      <p className="text-white/80 mb-6">{description}</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-darkgrey p-3 rounded-md text-center hover:bg-gold hover:text-darkgrey transition-all duration-300">
            <p className="text-white/90 text-sm">{stat}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ImpactCard;
