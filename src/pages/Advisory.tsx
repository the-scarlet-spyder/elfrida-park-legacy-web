
import React from 'react';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { CheckCircle, Scale, TrendingUp, Heart, Shield, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Advisory = () => {
  const services = [
    {
      icon: <Scale size={28} className="text-gold" />,
      title: "Legal Advisory",
      description: "Expert guidance on due diligence, documentation, compliance, and legal risk management for individuals and businesses."
    },
    {
      icon: <TrendingUp size={28} className="text-gold" />,
      title: "Financial & Investment Advisory",
      description: "Strategic financial planning, investment guidance, and wealth management solutions tailored to your goals."
    },
    {
      icon: <Heart size={28} className="text-gold" />,
      title: "Community Development & CSR Planning",
      description: "Purpose-driven project design and implementation to create meaningful social impact aligned with your values."
    }
  ];
  
  const benefits = [
    "Personalized strategic guidance",
    "Risk analysis and mitigation",
    "Compliance with regulatory requirements",
    "Transparent communication and reporting",
    "Long-term partnership approach",
    "Integrated solutions across disciplines"
  ];
  
  const impactStats = [
    {
      value: "₦250M+",
      label: "Advised Investments",
      description: "Total value of investments guided through our advisory services"
    },
    {
      value: "85%",
      label: "Client Retention",
      description: "Percentage of clients who continue working with us after initial engagement"
    },
    {
      value: "12+",
      label: "Communities Impacted",
      description: "Nigerian communities positively affected by our CSR initiatives"
    },
    {
      value: "100%",
      label: "Compliance Rate",
      description: "Success rate in ensuring client regulatory compliance"
    }
  ];
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-overlay"></div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1551259072-89e6f32f7ea8?q=80&w=2000" 
            alt="Advisory Services" 
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <div className="max-w-2xl">
            <h5 className="text-gold mb-3 tracking-wider font-medium reveal">GUIDANCE & GROWTH</h5>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight reveal">
              <span className="text-white">Advisory</span>
              <span className="gold-gradient block mt-2">Services</span>
            </h1>
            <p className="text-xl mb-8 text-ash-light reveal max-w-xl">
              Strategic guidance to help you navigate complex decisions and build sustainable futures.
            </p>
            <Link to="/contact" className="btn-primary reveal hover:shadow-gold/20 hover:shadow-md">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="service-section">
        <div className="container-custom">
          <SectionTitle 
            title="Our Advisory Expertise" 
            subtitle="With integrity as our compass, we help you build smart, safe, and sustainable futures."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-8 hover:shadow-gold/10 hover:border-gold/30 transition-all reveal">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-black-light/80 border border-gold/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-ash-light">{service.description}</p>
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
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1638450520420-9a2bff0aa744?q=80&w=1000" 
                  alt="Advisory Meeting" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-lg shadow-lg border border-gold/20 max-w-xs">
                  <p className="text-ash-light italic">
                    "The strategic guidance from Elfrida Limited helped us navigate a complex regulatory landscape while maintaining our growth trajectory."
                  </p>
                  <p className="text-gold font-medium mt-2">
                    — Lighthouse Industries
                  </p>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <SectionTitle 
                title="Why Choose Our Advisory Services" 
                subtitle="Experience the Elfrida Limited approach to advisory — where insight meets impact."
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
          </div>
        </div>
      </section>
      
      {/* Impact Stats Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <SectionTitle 
            title="Our Impact" 
            subtitle="The difference our advisory services have made for clients and communities."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="glass-card text-center p-6 border border-gold/10 rounded-lg reveal hover:border-gold/30 transition-all duration-300">
                <div className="text-3xl font-bold text-gold mb-2">{stat.value}</div>
                <h4 className="text-lg font-medium mb-2">{stat.label}</h4>
                <p className="text-sm text-ash-light">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-black-light relative">
        <div className="feature-bg"></div>
        <div className="container-custom">
          <SectionTitle 
            title="Our Advisory Process" 
            subtitle="A structured approach to understanding your needs and delivering tailored solutions."
            className="reveal"
          />
          
          <div className="mt-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gold/20 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card p-6 rounded-lg relative reveal hover:border-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center font-semibold absolute -top-5 left-1/2 transform -translate-x-1/2">1</div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold mb-3">Consultation</h3>
                  <p className="text-ash-light text-sm">In-depth discovery session to understand your goals, challenges, and vision.</p>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-lg relative reveal hover:border-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center font-semibold absolute -top-5 left-1/2 transform -translate-x-1/2">2</div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold mb-3">Analysis</h3>
                  <p className="text-ash-light text-sm">Comprehensive assessment of your situation and potential strategic options.</p>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-lg relative reveal hover:border-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center font-semibold absolute -top-5 left-1/2 transform -translate-x-1/2">3</div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold mb-3">Strategy Development</h3>
                  <p className="text-ash-light text-sm">Creation of tailored solutions and actionable implementation plans.</p>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-lg relative reveal hover:border-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center font-semibold absolute -top-5 left-1/2 transform -translate-x-1/2">4</div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold mb-3">Implementation & Support</h3>
                  <p className="text-ash-light text-sm">Ongoing guidance, monitoring, and refinement as your journey evolves.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container-custom">
          <div className="glass-card p-12 border border-gold/10 max-w-3xl mx-auto text-center reveal">
            <BarChart3 size={48} className="text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 font-playfair">Ready to Build a Strategic Future?</h2>
            <p className="text-xl mb-8 text-ash-light">
              Partner with Elfrida Limited's advisory team to navigate complexity and unlock sustainable growth.
            </p>
            <Link to="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20 bg-black-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
              <SectionTitle 
                title="Get Expert Guidance" 
                subtitle="Contact us today to discuss how our advisory services can help you achieve your goals."
                align="left"
                className="mb-8"
              />
              
              <div className="prose max-w-none text-ash-light">
                <p>
                  Our team of experts is ready to provide the strategic guidance you need to navigate complex challenges and seize opportunities. Whether you're seeking legal advice, financial planning, or CSR strategies, Elfrida Limited is your trusted partner.
                </p>
                <p className="mt-4">
                  Fill out the form, and one of our advisory specialists will contact you to schedule a consultation tailored to your needs.
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

export default Advisory;
