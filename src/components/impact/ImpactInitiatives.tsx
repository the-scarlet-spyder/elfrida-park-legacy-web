
import React from 'react';
import SectionTitle from '../SectionTitle';
import ImpactCard from './ImpactCard';

interface Initiative {
  title: string;
  description: string;
  image: string;
  stats: string[];
}

interface ImpactInitiativesProps {
  initiatives: Initiative[];
  className?: string;
}

const ImpactInitiatives: React.FC<ImpactInitiativesProps> = ({ initiatives, className }) => {
  return (
    <section className={`py-20 bg-darkgrey-light ${className}`}>
      <div className="container-custom">
        <SectionTitle 
          title="Our Impact Initiatives" 
          subtitle="See how our programs are making a difference in communities across Nigeria."
          className="reveal"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {initiatives.map((initiative, index) => (
            <ImpactCard key={index} {...initiative} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactInitiatives;
