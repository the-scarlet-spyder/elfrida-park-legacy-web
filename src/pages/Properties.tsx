
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import { MapPin, Building, ArrowRight } from 'lucide-react';

const propertiesList = [
  {
    id: "apo-tafyi",
    title: "Exclusive Prime Land in Apo-Tafyi",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000",
    location: "Apo-Tafyi, Abuja",
    size: "47.9 Hectares",
    price: "₦7.5 Billion",
    description: "Strategic land in the fast-developing Apo-Tafyi axis – perfect for residential estates or commercial projects."
  },
  {
    id: "guzape-ii",
    title: "Premium Land in Guzape II",
    image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=2000",
    location: "Guzape II, Abuja",
    size: "20 Hectares",
    price: "₦5 Billion",
    description: "Prime, titled land in Abuja's prestigious Guzape II – ideal for luxury estates or commercial development."
  }
];

const Properties = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="max-w-3xl">
            <h1 className="section-title reveal">Available Properties</h1>
            <p className="section-subtitle reveal">
              Explore our exclusive selection of premium investment opportunities across Nigeria. We offer prime lands and properties ideal for various development purposes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Properties List */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Properties" 
            subtitle="Exclusive high-value real estate opportunities with verified titles and excellent development potential."
            className="reveal mb-12"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {propertiesList.map((property) => (
              <div key={property.id} className="glass-card overflow-hidden reveal hover-shadow transition-all duration-300">
                <div className="relative h-72">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-black px-4 py-1 rounded-full font-medium">
                    {property.price}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-3 text-gold">
                    <MapPin size={18} className="mr-2" />
                    <span>{property.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{property.title}</h3>
                  
                  <div className="flex items-center mb-6 text-white/80">
                    <Building size={18} className="mr-2" />
                    <span>{property.size}</span>
                  </div>
                  
                  <p className="mb-6 text-white/80">
                    {property.description}
                  </p>
                  
                  <Link 
                    to={`/properties/${property.id}`} 
                    className="inline-flex items-center text-gold hover:text-gold-light transition-colors font-medium"
                  >
                    View Details
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/contact" className="btn-primary">
              Contact Us for More Properties
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-black-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for a Specific Type of Property?</h2>
            <p className="text-xl mb-8">
              We have access to numerous exclusive properties not listed publicly. Let us know your requirements and we'll find the perfect match for your needs.
            </p>
            <Link to="/contact" className="btn-primary">
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Properties;
