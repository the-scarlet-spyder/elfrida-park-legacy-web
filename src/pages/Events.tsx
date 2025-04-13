
import React from 'react';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { CheckCircle, Calendar, Users, Star, Award, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventCard = ({ image, title, description }: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold text-white mb-2 font-playfair">{title}</h3>
        <p className="text-white/90 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Events = () => {
  const eventTypes = [
    {
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1000",
      title: "Celebrity & VIP Events",
      description: "Intimate, secure, and highly personalized experiences for discerning clients."
    },
    {
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000",
      title: "State Functions",
      description: "Dignified ceremonies and celebrations for government and diplomatic events."
    },
    {
      image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1000",
      title: "Corporate Events",
      description: "Brand-aligned experiences from conferences to product launches and galas."
    }
  ];
  
  const benefits = [
    "Complete event planning and management",
    "Venue selection and negotiation",
    "Vendor coordination and management",
    "Custom décor and ambiance design",
    "Guest management and VIP handling",
    "Post-event evaluation and reporting"
  ];
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-earth-dark to-earth">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair reveal">
              Event Management & Hospitality
            </h1>
            <p className="text-xl mb-8 text-earth-lighter reveal">
              We curate moments that resonate — elevating occasions into unforgettable experiences.
            </p>
            <Link to="/contact" className="btn-primary reveal">
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>
      
      {/* Event Types Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Event Expertise" 
            subtitle="From intimate gatherings to grand celebrations, we create bespoke experiences that leave lasting impressions."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {eventTypes.map((event, index) => (
              <div key={index} className="reveal">
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Event Services Section */}
      <section className="py-20 bg-earth-lightest">
        <div className="container-custom">
          <SectionTitle 
            title="Our Event Services" 
            subtitle="Comprehensive event management tailored to your unique vision and requirements."
            className="reveal"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md reveal">
              <div className="flex items-center mb-6">
                <Calendar size={28} className="text-gold mr-4" />
                <h3 className="text-2xl font-semibold font-playfair">Event Planning & Management</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Concept development and creative direction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Timeline and logistics coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Budget management and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Venue selection and management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Vendor sourcing and coordination</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md reveal">
              <div className="flex items-center mb-6">
                <Users size={28} className="text-gold mr-4" />
                <h3 className="text-2xl font-semibold font-playfair">Guest Experience</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Customized invitations and RSVP management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>VIP handling and protocol management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Entertainment booking and coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Catering and menu design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Transportation and accommodation arrangements</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md reveal">
              <div className="flex items-center mb-6">
                <Star size={28} className="text-gold mr-4" />
                <h3 className="text-2xl font-semibold font-playfair">Design & Production</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Custom décor and theme development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Lighting and sound design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Stage and set design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Floral arrangements and styling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Branded materials and signage</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md reveal">
              <div className="flex items-center mb-6">
                <Clock size={28} className="text-gold mr-4" />
                <h3 className="text-2xl font-semibold font-playfair">Day-of Coordination</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>On-site management and coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Timeline execution and monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Vendor management and problem-solving</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Guest assistance and emergency handling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span>Post-event breakdown and vendor settlement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hospitality Section - REMOVED */}
      
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <SectionTitle 
                title="Why Choose Us" 
                subtitle="Experience the Elfrida Limited approach to event management — where moments become memories."
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
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000" 
                  alt="Elegant Event" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                  <p className="text-earth-dark italic">
                    "The team at Elfrida Limited transformed our vision into a flawless event that exceeded all expectations."
                  </p>
                  <p className="text-gold font-medium mt-2">
                    — Lagos Business Forum
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
                title="Ready to Plan Your Next Event?" 
                subtitle="Contact us today to discuss your vision and let our experts create an unforgettable experience."
                align="left"
                light={true}
                className="mb-8"
              />
              
              <div className="prose max-w-none text-earth-lighter">
                <p>
                  Whether you're planning a corporate conference, a state function, or an intimate gathering, our team at Elfrida Limited is here to bring your vision to life. We pride ourselves on attention to detail and exceptional service.
                </p>
                <p className="mt-4">
                  Fill out the form, and one of our event specialists will contact you to discuss how we can create a memorable experience tailored to your needs.
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

export default Events;
