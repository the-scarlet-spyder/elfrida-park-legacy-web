
import React from 'react';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { CheckCircle, Home, Building, Landmark, ArrowRight, Leaf, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ image, title, location, type, price, link }: {
  image: string;
  title: string;
  location: string;
  type: string;
  price: string;
  link: string;
}) => {
  return (
    <div className="glass-card overflow-hidden shadow-md hover:shadow-gold/20 hover:shadow-xl transition-all group">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 font-playfair group-hover:text-gold transition-colors">{title}</h3>
        <p className="text-ash-light mb-2">{location}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-ash-dark px-3 py-1 bg-ash-dark/20 rounded-full">{type}</span>
          <span className="font-medium text-gold">{price}</span>
        </div>
        <Link to={link} className="btn-secondary w-full text-center hover:bg-gold/20">View Details</Link>
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
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1000",
      title: "Prime Land Plot - Guzape Heights",
      location: "Guzape District, Abuja",
      type: "Land",
      price: "₦85,000,000",
      link: "/contact"
    },
    {
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1000",
      title: "Exclusive Land Plot - Guzape Valley",
      location: "Guzape District, Abuja",
      type: "Land",
      price: "₦92,000,000",
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-black-light to-black relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000')] bg-cover bg-center"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair reveal gold-gradient gold-glow">
              Real Estate Solutions
            </h1>
            <p className="text-xl mb-8 text-ash-light reveal">
              Discover exceptional properties and comprehensive real estate services tailored to your unique needs.
            </p>
            <Link to="/contact" className="btn-primary reveal hover:shadow-gold/20 hover:shadow-md">
              Make an Inquiry
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-black-light">
        <div className="container-custom">
          <SectionTitle 
            title="Our Real Estate Services" 
            subtitle="Elfrida Limited offers a comprehensive, end-to-end real estate experience designed to meet your property needs."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div key={index} className="p-8 border border-ash-dark/30 glass-card rounded-lg hover:shadow-md hover:shadow-gold/10 transition-all reveal">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3 group-hover:text-gold transition-colors">{service.title}</h3>
                </div>
                <p className="text-ash-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-20 bg-black">
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
      <section className="py-20 bg-black-light">
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
                    <span className="text-ash-light">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/about" className="inline-flex items-center text-gold hover:text-gold-light transition-colors font-medium">
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
                <div className="absolute -bottom-6 -left-6 bg-black-light p-6 rounded-lg shadow-lg border border-gold/20 max-w-xs">
                  <p className="text-ash-light italic">
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
      <section id="contact-form" className="py-20 bg-black text-white">
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
              
              <div className="prose max-w-none text-ash-light">
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
