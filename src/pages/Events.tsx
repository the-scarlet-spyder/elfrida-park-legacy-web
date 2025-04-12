
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
      <section className="hero-container">
        <div className="hero-overlay"></div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000" 
            alt="Luxury Event" 
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <div className="max-w-2xl">
            <h5 className="text-gold mb-3 tracking-wider font-medium reveal">EXCEPTIONAL EXPERIENCES</h5>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight reveal">
              <span className="text-white">Event</span>
              <span className="gold-gradient block mt-2">Management</span>
            </h1>
            <p className="text-xl mb-8 text-ash-light reveal max-w-xl">
              We curate moments that resonate — elevating occasions into unforgettable experiences.
            </p>
            <Link to="/contact" className="btn-primary reveal hover:shadow-gold/20 hover:shadow-md">
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>
      
      {/* Event Types Section */}
      <section className="service-section">
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
      <section className="py-20 bg-black-light">
        <div className="container-custom">
          <SectionTitle 
            title="Our Event Services" 
            subtitle="Comprehensive event management tailored to your unique vision and requirements."
            className="reveal"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 reveal hover:border-gold/30 hover:shadow-gold/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-black-light/80 border border-gold/20 flex items-center justify-center">
                  <Calendar size={24} className="text-gold" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair ml-4">Event Planning & Management</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Concept development and creative direction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Timeline and logistics coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Budget management and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Venue selection and management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Vendor sourcing and coordination</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 reveal hover:border-gold/30 hover:shadow-gold/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-black-light/80 border border-gold/20 flex items-center justify-center">
                  <Users size={24} className="text-gold" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair ml-4">Guest Experience</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Customized invitations and RSVP management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">VIP handling and protocol management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Entertainment booking and coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Catering and menu design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Transportation and accommodation arrangements</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 reveal hover:border-gold/30 hover:shadow-gold/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-black-light/80 border border-gold/20 flex items-center justify-center">
                  <Star size={24} className="text-gold" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair ml-4">Design & Production</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Custom décor and theme development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Lighting and sound design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Stage and set design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Floral arrangements and styling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Branded materials and signage</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 reveal hover:border-gold/30 hover:shadow-gold/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-black-light/80 border border-gold/20 flex items-center justify-center">
                  <Clock size={24} className="text-gold" />
                </div>
                <h3 className="text-2xl font-semibold font-playfair ml-4">Day-of Coordination</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">On-site management and coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Timeline execution and monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Vendor management and problem-solving</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Guest assistance and emergency handling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-ash-light">Post-event breakdown and vendor settlement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-black">
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
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000" 
                  alt="Elegant Event" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-lg shadow-lg border border-gold/20 max-w-xs">
                  <p className="text-ash-light italic">
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
      <section id="contact-form" className="py-20 bg-black-light text-white">
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
              
              <div className="prose max-w-none text-ash-light">
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
