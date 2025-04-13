
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import { MapPin, Check, Phone, Mail, Globe, Instagram, Linkedin, ArrowLeft } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

// Define property data
const properties = {
  "apo-tafyi": {
    id: "apo-tafyi",
    title: "Exclusive Prime Land Opportunity in Apo-Tafyi, Abuja",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000",
    size: "47.9 Hectares",
    location: "Apo-Tafyi, Abuja",
    price: "₦7.5 Billion (Slightly Negotiable)",
    title_type: "Statutory Right of Occupancy",
    description: "Strategic land in the fast-developing Apo-Tafyi axis – perfect for residential estates, commercial hubs, or institutional projects. With excellent road access and great development potential, this is a prime investment in one of Abuja's growing areas.",
    contact: {
      company: "Elfrida Park Ltd.",
      address: "Elfrida's Suite, No 235 RIVTAF Shopping Complex (Golf Estate), Off Peter Odili Road, Port Harcourt, Rivers State",
      phone: "+2347044414004",
      email: "info@elfridas.com",
      website: "www.elfridas.com",
      instagram: "@elfridasltd",
      linkedin: "elfridas ltd"
    }
  },
  "guzape-ii": {
    id: "guzape-ii",
    title: "Exclusive Prime Land Opportunity in Guzape II, Abuja",
    image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=2000",
    size: "20 Hectares",
    location: "Guzape II, Abuja",
    price: "₦5 Billion (Slightly Negotiable)",
    title_type: "Statutory Right of Occupancy",
    description: "Prime, titled land in Abuja's prestigious Guzape II – ideal for luxury estates, commercial, or institutional development. Located near Aso Rock, Asokoro, CBD, and other key landmarks, this is a rare opportunity for high-value development.",
    contact: {
      company: "Elfrida Park Ltd",
      address: "Elfrida's Suite, No 235 RIVTAF Shopping Complex (Golf Estate), Off Peter Odili Road, Port Harcourt, Rivers State",
      phone: "+2347044414004",
      email: "info@elfridas.com",
      website: "www.elfridas.com",
      instagram: "@elfridasltd",
      linkedin: "elfridas ltd"
    }
  }
};

const PropertyDetails = () => {
  const { id } = useParams<{id: string}>();
  const property = id ? properties[id as keyof typeof properties] : null;
  
  if (!property) {
    return (
      <MainLayout>
        <div className="container-custom py-32">
          <h1 className="text-3xl font-bold mb-4">Property not found</h1>
          <Link to="/services/real-estate" className="btn-primary">
            Back to Properties
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={property.image} 
          alt={property.title} 
          className="absolute w-full h-full object-cover"
        />
        <div className="container-custom relative z-20 h-full flex items-center">
          <div className="max-w-3xl">
            <Link 
              to="/services/real-estate" 
              className="inline-flex items-center text-gold mb-6 hover:text-gold-light transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" /> Back to Properties
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{property.title}</h1>
            <p className="inline-flex items-center text-xl">
              <MapPin className="mr-2" /> {property.location}
            </p>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Property Details */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8 mb-8">
                <SectionTitle
                  title="Property Overview"
                  align="left"
                  className="mb-6"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gold/20 p-6 rounded-lg">
                    <p className="text-sm text-gold mb-2">Size</p>
                    <p className="text-xl font-bold">{property.size}</p>
                  </div>
                  <div className="border border-gold/20 p-6 rounded-lg">
                    <p className="text-sm text-gold mb-2">Price</p>
                    <p className="text-xl font-bold">{property.price}</p>
                  </div>
                  <div className="border border-gold/20 p-6 rounded-lg">
                    <p className="text-sm text-gold mb-2">Location</p>
                    <p className="text-xl font-bold">{property.location}</p>
                  </div>
                  <div className="border border-gold/20 p-6 rounded-lg">
                    <p className="text-sm text-gold mb-2">Title</p>
                    <p className="text-xl font-bold">{property.title_type}</p>
                  </div>
                </div>
                
                <SectionTitle
                  title="Property Description"
                  align="left"
                  className="mb-6"
                />
                
                <p className="text-lg leading-relaxed mb-6">{property.description}</p>
                
                <div className="bg-gold/10 border border-gold/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 flex items-center">
                    <Check size={20} className="mr-2 text-gold" /> Title Verified
                  </h4>
                  <p>This property has been verified and has proper documentation.</p>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="glass-card p-8 mb-8 sticky top-28">
                <SectionTitle
                  title="Contact Information"
                  align="left"
                  className="mb-6"
                />
                
                <h4 className="text-xl font-bold mb-4">{property.contact.company}</h4>
                
                <div className="flex flex-col space-y-4 mb-6">
                  {property.contact.address && (
                    <div className="flex items-start">
                      <MapPin size={20} className="mr-3 text-gold mt-1" />
                      <span>{property.contact.address}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <Phone size={20} className="mr-3 text-gold" />
                    <a href={`tel:${property.contact.phone}`} className="hover:text-gold">
                      {property.contact.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail size={20} className="mr-3 text-gold" />
                    <a href={`mailto:${property.contact.email}`} className="hover:text-gold">
                      {property.contact.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe size={20} className="mr-3 text-gold" />
                    <a href={`https://${property.contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                      {property.contact.website}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Instagram size={20} className="mr-3 text-gold" />
                    <a href={`https://instagram.com/${property.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                      {property.contact.instagram}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin size={20} className="mr-3 text-gold" />
                    <a href={`https://linkedin.com/company/${property.contact.linkedin.replace(' ', '-')}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                      {property.contact.linkedin}
                    </a>
                  </div>
                </div>
                
                <div className="border-t border-gold/20 pt-6 mt-6">
                  <h5 className="text-lg font-semibold mb-4">Serious inquiries only</h5>
                  <Link to="/contact" className="btn-primary w-full">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20 bg-black-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Schedule a Viewing" 
                subtitle="Interested in this property? Fill out the form below to schedule a viewing or request more information."
                align="left"
                className="mb-8"
              />
            </div>
            
            <div className="glass-card p-8">
              <ContactForm 
                title="" 
                subtitle=""
                dark={true}
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PropertyDetails;
