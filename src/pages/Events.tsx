
import React from 'react';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { CheckCircle, Calendar, Users, Trophy, Award, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventImageProps {
  src: string;
  alt: string;
  className?: string;
}

const EventImage: React.FC<EventImageProps> = ({ src, alt, className }) => (
  <div className={`overflow-hidden rounded-lg group ${className}`}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>
);

interface EventCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const EventCategory: React.FC<EventCategoryProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-lg border border-earth-lightest shadow-sm hover:shadow-md transition-all reveal">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-earth-lightest rounded-full">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-3 font-playfair">{title}</h3>
    <p className="text-earth-dark">{description}</p>
  </div>
);

const Events = () => {
  const eventCategories = [
    {
      title: "Corporate Events",
      description: "From executive retreats to product launches and conferences, we create memorable corporate experiences.",
      icon: <Trophy size={24} className="text-gold" />
    },
    {
      title: "State & Diplomatic Events",
      description: "High-profile gatherings planned with protocol expertise and sophisticated attention to detail.",
      icon: <Award size={24} className="text-gold" />
    },
    {
      title: "Social Celebrations",
      description: "Weddings, birthdays, and special occasions crafted to reflect your personal style and vision.",
      icon: <Users size={24} className="text-gold" />
    },
    {
      title: "Cultural & Entertainment",
      description: "Festivals, concerts, and cultural showcases designed to engage and inspire attendees.",
      icon: <Camera size={24} className="text-gold" />
    }
  ];
  
  const services = [
    "Comprehensive event strategy and concept development",
    "Venue selection and management",
    "Guest management and VIP handling",
    "Production and technical coordination",
    "Catering and hospitality services",
    "Bespoke Airbnb and accommodation solutions",
    "Event branding and marketing support",
    "On-site coordination and management"
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-royal to-royal-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair reveal">
              Event Management Services
            </h1>
            <p className="text-xl mb-8 opacity-90 reveal">
              Creating extraordinary experiences that leave lasting impressions and exceed expectations.
            </p>
            <Link to="#contact-form" className="btn-primary reveal">
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <SectionTitle 
                title="Crafting Memorable Experiences" 
                subtitle="At Elfrida Park, we transform ordinary events into extraordinary experiences with meticulous planning and flawless execution."
                align="left"
                className="mb-8"
              />
              
              <p className="text-earth-dark mb-6">
                Our team of experienced event professionals brings creativity, precision, and a passion for excellence to every project. From intimate gatherings to large-scale productions, we handle every detail with the same level of care and attention.
              </p>
              
              <p className="text-earth-dark">
                With a deep understanding of Nigerian culture and international best practices, we create events that reflect the unique vision of our clients while meeting the highest standards of quality and sophistication.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 reveal">
              <EventImage 
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=1000" 
                alt="Corporate Event"
                className="h-48 md:h-64" 
              />
              <EventImage 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000" 
                alt="Wedding Celebration"
                className="h-48 md:h-64 mt-6" 
              />
              <EventImage 
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=1000" 
                alt="Gala Dinner"
                className="h-48 md:h-64 mt-6" 
              />
              <EventImage 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000" 
                alt="Conference Setup"
                className="h-48 md:h-64" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Categories */}
      <section className="py-20 bg-earth-lightest">
        <div className="container-custom">
          <SectionTitle 
            title="Our Event Expertise" 
            subtitle="We specialize in a range of event types, each tailored to meet specific objectives and create unforgettable moments."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {eventCategories.map((category, index) => (
              <EventCategory 
                key={index} 
                {...category} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative reveal">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1000" 
                  alt="Event Planning" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gold rounded-full flex items-center justify-center">
                  <Calendar size={32} className="text-white" />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 reveal">
              <SectionTitle 
                title="Our Comprehensive Services" 
                subtitle="From concept to execution, we provide end-to-end event management services designed to bring your vision to life."
                align="left"
                className="mb-8"
              />
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-earth-dark">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hospitality Section */}
      <section className="py-20 bg-gradient-to-r from-gold-dark to-gold text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <SectionTitle 
                title="Luxury Accommodation Solutions" 
                subtitle="Elevate your event experience with our bespoke hospitality and Airbnb services."
                align="left"
                light={true}
                className="mb-8"
              />
              
              <p className="text-white/90 mb-6">
                As part of our comprehensive event services, we offer exclusive accommodation solutions for your guests, speakers, or VIPs. Our curated Airbnb properties and hospitality services ensure a seamless and luxurious experience from arrival to departure.
              </p>
              
              <p className="text-white/90 mb-8">
                Our team handles all aspects of accommodation management, including property selection, guest check-in, concierge services, and personalized amenities to create a truly memorable stay.
              </p>
              
              <Link to="/services/hospitality" className="btn-secondary bg-white text-gold hover:bg-white/90">
                Explore Hospitality Services
              </Link>
            </div>
            
            <div className="reveal">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000" 
                alt="Luxury Accommodation" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Event Portfolio" 
            subtitle="Browse through some of our past events and get inspired for your next occasion."
            className="reveal"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 reveal">
            <EventImage 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000" 
              alt="Corporate Conference" 
              className="col-span-2 h-64"
            />
            <EventImage 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1000" 
              alt="Outdoor Celebration" 
              className="h-64"
            />
            <EventImage 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" 
              alt="Business Meeting" 
              className="h-64"
            />
            <EventImage 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1000" 
              alt="Social Gathering" 
              className="h-64"
            />
            <EventImage 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000" 
              alt="Tech Conference" 
              className="h-64"
            />
            <EventImage 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000" 
              alt="Award Ceremony" 
              className="col-span-2 h-64"
            />
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
                subtitle="Contact us today to discuss how we can bring your vision to life and create an unforgettable experience."
                align="left"
                light={true}
                className="mb-8"
              />
              
              <div className="prose max-w-none text-earth-lighter">
                <p>
                  Whether you're planning a corporate conference, a social celebration, or a high-profile diplomatic event, our team at Elfrida Park Limited is ready to exceed your expectations.
                </p>
                <p className="mt-4">
                  Fill out the form, and one of our event specialists will contact you to begin the journey of creating your perfect event.
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
