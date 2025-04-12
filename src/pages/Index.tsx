
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import ContactForm from '@/components/ContactForm';
import { Home, Calendar, Briefcase, ChevronDown, Award, Users, Shield, Gem } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: "Real Estate Solutions",
      description: "Premium residential and commercial properties for sale, rent, and development across Nigeria.",
      icon: <Home size={36} />,
      link: "/services/real-estate"
    },
    {
      title: "Event Management & Hospitality",
      description: "Luxury event planning and execution for corporate, government, and private clientele.",
      icon: <Calendar size={36} />,
      link: "/services/events"
    },
    {
      title: "Advisory Services",
      description: "Strategic consulting in legal, financial, and corporate social responsibility matters.",
      icon: <Briefcase size={36} />,
      link: "/services/advisory"
    }
  ];
  
  const values = [
    {
      title: "Divine Inspiration",
      description: "We act with a higher purpose in mind.",
      icon: <Shield size={32} className="text-gold" />
    },
    {
      title: "Integrity First",
      description: "Transparent, honest, and trustworthy in all dealings.",
      icon: <Award size={32} className="text-gold" />
    },
    {
      title: "Passion-Driven",
      description: "We're emotionally invested in your success.",
      icon: <Users size={32} className="text-gold" />
    },
    {
      title: "People-Centric",
      description: "Clients aren't transactions — they're partners.",
      icon: <Gem size={32} className="text-gold" />
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      name: "Adebayo Johnson",
      position: "CEO, Landmark Enterprises",
      content: "Elfrida Limited delivered a level of service that exceeded our expectations. Their attention to detail and commitment to excellence made our corporate event truly memorable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Amina Ibrahim",
      position: "Real Estate Investor",
      content: "Working with Elfrida Limited for our property acquisition was a seamless experience. Their team's expertise and professionalism ensured we made the right investment decision.",
      rating: 5,
    },
    {
      id: 3,
      name: "Chief Emmanuel Okafor",
      position: "Director, Global Solutions Ltd",
      content: "The advisory services provided by Elfrida Limited helped us navigate complex regulatory challenges and optimize our CSR strategy. Highly recommended for any business seeking strategic guidance.",
      rating: 4,
    },
    {
      id: 4,
      name: "Mrs. Stella Nwosu",
      position: "Event Planner",
      content: "Collaborating with Elfrida Limited on our client's wedding was a joy. Their attention to cultural details and flawless execution created a celebration that will be remembered for generations.",
      rating: 5,
    },
    {
      id: 5,
      name: "Dr. Olufemi Adeyemi",
      position: "Property Developer",
      content: "As a developer, finding a partner who understands both real estate and community impact is rare. Elfrida Limited brings that perfect balance of business acumen and social responsibility.",
      rating: 5,
    },
    {
      id: 6,
      name: "Halima Suleiman",
      position: "First-time Homebuyer",
      content: "The team at Elfrida Limited guided me through every step of purchasing my first home. Their patience, expertise, and genuine care made what could have been an overwhelming process feel simple and exciting.",
      rating: 5,
    },
    {
      id: 7,
      name: "Victor Ekong",
      position: "Corporate Finance Director",
      content: "The strategic advisory from Elfrida Limited transformed our approach to real estate investments. Their insights helped us maximize returns while maintaining alignment with our core values.",
      rating: 5,
    },
    {
      id: 8,
      name: "Lola Ademola",
      position: "Event Host",
      content: "From concept to execution, Elfrida Limited delivered an extraordinary experience for our corporate gala. The attention to detail and flawless coordination exceeded all expectations.",
      rating: 5,
    },
    {
      id: 9,
      name: "Ibrahim Hassan",
      position: "Investment Banker",
      content: "Working with Elfrida Limited has been transformative for our property portfolio. Their market intelligence and negotiation skills secured us prime locations at competitive rates.",
      rating: 5,
    },
    {
      id: 10,
      name: "Chief Mrs. Folasade Ogunlesi",
      position: "Philanthropist",
      content: "The CSR advisory services from Elfrida Limited helped our foundation create measurable impact in underserved communities. Their strategic approach ensures sustainable outcomes.",
      rating: 5,
    }
  ];

  return (
    <MainLayout>
      {/* Updated Hero Section with reformatted content */}
      <section className="hero-container">
        <div className="hero-overlay"></div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=2000" 
            alt="Luxury Property" 
            className="hero-image"
            style={{objectPosition: "center 30%"}}
          />
        </div>
        <div className="hero-content">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight reveal">
              <span className="text-white">Transform Your </span>
              <span className="gold-gradient">Vision</span><br />
              <span className="gold-gradient">Into Reality</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 reveal max-w-xl leading-relaxed">
              Integrated solutions in Real Estate, Event Management, and Strategic Advisory Services.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 reveal">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
            
            <div className="hero-stats reveal">
              <div className="hero-stat">
                <div className="hero-stat-number">25+</div>
                <div className="hero-stat-label">Projects Completed</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">15+</div>
                <div className="hero-stat-label">Properties Managed</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">100%</div>
                <div className="hero-stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <a href="#services" className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
            <span className="mb-2 text-sm">Explore</span>
            <ChevronDown size={24} className="hero-scroll-down" />
          </a>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="service-section">
        <div className="container-custom">
          <SectionTitle 
            title="Our Services" 
            subtitle="Elfrida Limited offers integrated solutions across three core areas, delivering excellence and innovation to meet your needs."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                className="reveal"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-black-light">
        <div className="container-custom">
          <SectionTitle 
            title="Why Elfrida Limited?" 
            subtitle="Our values drive everything we do, ensuring exceptional service and meaningful impact."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-8 text-center reveal hover:border-gold/20 transition-all duration-300">
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-black rounded-full border border-gold/20">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-ash-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-black text-white text-center bg-[url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1000')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Ready to Transform Your Vision into Reality?</h2>
            <p className="text-xl mb-8 text-white/80">
              Partner with Elfrida Limited to bring your dreams to life with our expertise and dedication to excellence.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-black-light">
        <div className="container-custom">
          <SectionTitle 
            title="What Our Clients Say" 
            subtitle="Don't take our word for it. Hear from those who have experienced our services firsthand."
            className="reveal"
          />
          
          <div className="mt-12 reveal">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
              <SectionTitle 
                title="Get In Touch" 
                subtitle="Have a question or ready to start your journey with us? Reach out today."
                align="left"
                className="mb-8"
              />
              
              <div className="prose max-w-none text-white/80">
                <p>
                  At Elfrida Limited, we believe in building lasting relationships with our clients. Whether you're looking to invest in real estate, plan a memorable event, or seek strategic advisory services, our team is here to help you achieve your goals.
                </p>
                <p className="mt-4">
                  Fill out the form, and one of our representatives will get back to you promptly. We look forward to the opportunity to serve you.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-8 reveal">
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

export default Index;
