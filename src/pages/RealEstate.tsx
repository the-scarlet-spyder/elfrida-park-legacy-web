
import React from 'react';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { CheckCircle, Home, Building, Landmark, ArrowRight, Leaf, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ image, title, location, size, type, price, link }: {
  image: string;
  title: string;
  location: string;
  size: string;
  type: string;
  price: string;
  link: string;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-playfair">{title}</h3>
        <p className="text-earth mb-2">{location}</p>
        <p className="text-earth mb-2"><strong>Size:</strong> {size}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-earth-dark px-3 py-1 bg-earth-lightest rounded-full">{type}</span>
          <span className="font-medium text-gold">{price}</span>
        </div>
        <Link to={link} className="btn-secondary w-full text-center">View Details</Link>
      </div>
    </div>
  );
};

const RealEstate = () => {
  const services = [
    {
      title: "Sales & Rentals",
      description: "Trusted brokerage for high-value commercial and residential properties across Nigeria's most desirable locations.",
      icon: <Home size={24} className="text-gold" />
    },
    {
      title: "Development & Renovation",
      description: "From blueprint to beauty — we bring visions to life with comprehensive development and renovation services.",
      icon: <Building size={24} className="text-gold" />
    },
    {
      title: "Mortgage Advisory",
      description: "Navigating financing with insight and strategy to help you make the right investment decisions.",
      icon: <Landmark size={24} className="text-gold" />
    },
    {
      title: "Horticulture & Landscaping",
      description: "Creating sustainable, beautiful environments that enhance property value and quality of life.",
      icon: <Leaf size={24} className="text-gold" />
    },
    {
      title: "Facility Management",
      description: "Professional property oversight with long-term value in mind, ensuring optimal maintenance and operation.",
      icon: <Wrench size={24} className="text-gold" />
    }
  ];
  
 const featuredProperties = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000", // Consider updating to a relevant image later
    title: "Exclusive Prime Land",
    location: "Apo-Tafyi, Abuja",
    size:"47.9 Hectares",
    type: "Land",
    price: "₦7.5 Billion",
    link: "/contact"
  },
  {
    image: "https://images.unsplash.com/photo-1594673213454-5e4b9d2b6e8a?q=80&w=1000", // Consider updating to a relevant image later
    title: "Exclusive Prime Land",
    location: "Guzape II, Abuja",
    size:"20 Hectares",
    type: "Land",
    price: "₦5 Billion",
    link: "/contact"
  }
];
  
  const benefits = [
    "Access to exclusive property listings",
    "Personalized property search and acquisition",
    "Expert negotiation to secure the best value",
    "Comprehensive due diligence and legal support",
    "End-to-end transaction management",
    "Post-acquisition property management"
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-earth-dark to-earth">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair reveal">
              Real Estate Solutions
            </h1>
            <p className="text-xl mb-8 text-earth-lighter reveal">
              Discover exceptional properties and comprehensive real estate services tailored to your unique needs.
            </p>
            <Link to="/contact" className="btn-primary reveal">
              Make an Inquiry
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Real Estate Services" 
            subtitle="Elfrida Limited offers a comprehensive, end-to-end real estate experience designed to meet your property needs."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div key={index} className="p-8 border border-earth-lightest rounded-lg hover:shadow-md transition-all reveal">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                </div>
                <p className="text-earth-dark">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-20 bg-earth-lightest">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Properties" 
            subtitle="Explore our selection of premium properties available for sale."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            {featuredProperties.map((property, index) => (
              <div key={index} className="reveal">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <SectionTitle 
                title="Why Choose Us" 
                subtitle="Experience the Elfrida Limited approach to real estate — where lifestyle meets legacy."
                align="left"
                className="mb-8"
              />
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/about" className="inline-flex items-center text-gold hover:text-gold-dark transition-colors font-medium">
                  <span>Learn more about our approach</span>
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="reveal">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1000" 
                  alt="Luxury Building" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                  <p className="text-earth-dark italic">
                    "Elfrida Limited helped us find our dream home with unparalleled professionalism and attention to detail."
                  </p>
                  <p className="text-gold font-medium mt-2">
                    — The Adewale Family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-earth-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
              <SectionTitle 
                title="Ready to Find Your Perfect Property?" 
                subtitle="Contact us today to discuss your real estate needs and let our experts guide you through the process."
                align="left"
                light={true}
                className="mb-8"
              />
              
              <div className="prose max-w-none text-earth-lighter">
                <p>
                  Whether you're looking to buy, sell, rent, or develop property, our team at Elfrida Limited is here to assist you every step of the way. We pride ourselves on delivering personalized service that exceeds expectations.
                </p>
                <p className="mt-4">
                  Fill out the form, and one of our real estate specialists will contact you to discuss how we can help you achieve your property goals.
                </p>
              </div>
            </div>
            
            <div className="reveal">
              <ContactForm 
                dark={true}
                title=""
                subtitle=""
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default RealEstate;
