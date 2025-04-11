
import React from 'react';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { CheckCircle, Home, Building, Landmark, ArrowRight } from 'lucide-react';
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
      title: "Property Sales",
      description: "Premium residential and commercial properties available for purchase across Nigeria's most desirable locations.",
      icon: <Home size={24} className="text-gold" />
    },
    {
      title: "Property Rentals",
      description: "Luxury homes and office spaces available for short and long-term leases with comprehensive management.",
      icon: <Building size={24} className="text-gold" />
    },
    {
      title: "Property Development",
      description: "End-to-end development services from land acquisition to construction and final delivery.",
      icon: <Landmark size={24} className="text-gold" />
    }
  ];
  
  const featuredProperties = [
    {
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1000",
      title: "Luxury Villa",
      location: "Victoria Island, Lagos",
      type: "Residential",
      price: "₦180,000,000",
      link: "/property/luxury-villa"
    },
    {
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=1000",
      title: "Executive Office Complex",
      location: "Ikoyi, Lagos",
      type: "Commercial",
      price: "₦450,000,000",
      link: "/property/executive-office"
    },
    {
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1000",
      title: "Modern Apartment",
      location: "Lekki Phase 1, Lagos",
      type: "Residential",
      price: "₦85,000,000",
      link: "/property/modern-apartment"
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
              Real Estate Services
            </h1>
            <p className="text-xl mb-8 text-earth-lighter reveal">
              Discover exceptional properties and comprehensive real estate services tailored to your unique needs.
            </p>
            <Link to="#contact-form" className="btn-primary reveal">
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
            subtitle="Elfrida Park Limited offers a complete range of premium real estate services designed to meet your property needs."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
            subtitle="Explore our selection of premium properties available for sale or rent."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProperties.map((property, index) => (
              <div key={index} className="reveal">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center reveal">
            <Link to="/properties" className="btn-primary">
              View All Properties
            </Link>
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
                subtitle="Experience the Elfrida Park advantage with our client-focused approach to real estate."
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
                    "Elfrida Park helped us find our dream home with unparalleled professionalism and attention to detail."
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
                  Whether you're looking to buy, sell, rent, or develop property, our team at Elfrida Park Limited is here to assist you every step of the way. We pride ourselves on delivering personalized service that exceeds expectations.
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
