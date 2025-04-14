
import React from 'react';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { CheckCircle, Scale, TrendingUp, Heart, Shield, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-darkgrey p-8 rounded-lg shadow-md hover:shadow-lg transition-all reveal">
      <div className="mb-6">
        <div className="w-14 h-14 rounded-full bg-darkgrey-light flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 font-playfair text-gold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

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
      <section className="pt-32 pb-20 bg-darkgrey-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair reveal text-gold">
              Advisory Services
            </h1>
            <p className="text-xl mb-8 text-gray-300 reveal">
              Strategic guidance to help you navigate complex decisions and build sustainable futures.
            </p>
            <Link to="/contact" className="btn-primary reveal">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-darkgrey">
        <div className="container-custom">
          <SectionTitle 
            title="Our Advisory Expertise" 
            subtitle="With integrity as our compass, we help you build smart, safe, and sustainable futures."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-darkgrey-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1638450520420-9a2bff0aa744?q=80&w=1000" 
                  alt="Advisory Meeting" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-darkgrey p-6 rounded-lg shadow-lg max-w-xs">
                  <p className="text-gray-300 italic">
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
                    <span className="text-gray-300">{benefit}</span>
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
          </div>
        </div>
      </section>
      
      {/* Impact Stats Section */}
      <section className="py-20 bg-darkgrey">
        <div className="container-custom">
          <SectionTitle 
            title="Our Impact" 
            subtitle="The difference our advisory services have made for clients and communities."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-6 border border-darkgrey-light rounded-lg reveal bg-darkgrey-dark">
                <div className="text-3xl font-bold text-gold mb-2">{stat.value}</div>
                <h4 className="text-lg font-medium mb-2 text-white">{stat.label}</h4>
                <p className="text-sm text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center reveal">
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our advisory work extends beyond transactions, focusing on creating long-term value and sustainable impact for our clients and the communities they serve.
            </p>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-darkgrey-dark">
        <div className="container-custom">
          <SectionTitle 
            title="Our Advisory Process" 
            subtitle="A structured approach to understanding your needs and delivering tailored solutions."
            className="reveal"
          />
          
          <div className="mt-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-darkgrey-light -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-darkgrey p-6 rounded-lg shadow-md relative reveal">
                <div className="w-10 h-10 rounded-full bg-gold text-darkgrey flex items-center justify-center font-semibold absolute -top-5 left-1/2 transform -translate-x-1/2">1</div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold mb-3 text-gold">Consultation</h3>
                  <p className="text-gray-300 text-sm">In-depth discovery session to understand your goals, challenges, and vision.</p>
                </div>
              </div>
              
              <div className="bg-darkgrey p-6 rounded-lg shadow-md relative reveal">
                <div className="w-10 h-10 rounded-full bg-gold text-darkgrey flex items-center justify-center font-semibold absolute -top-5 left-1/2 transform -translate-x-1/2">2</div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold mb-3 text-gold">Analysis</h3>
                  <p className="text-gray-300 text-sm">Comprehensive assessment of your situation and potential strategic options.</p>
                </div>
              </div>
              
              <div className="bg-darkgrey p-6 rounded-lg shadow-md relative reveal">
                <div className="w-10 h-10 rounded-full bg-gold text-darkgrey flex items-center justify-center font-semibold absolute -top-5 left-1/2 transform -translate-x-1/2">3</div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold mb-3 text-gold">Strategy Development</h3>
                  <p className="text-gray-300 text-sm">Creation of tailored solutions and actionable implementation plans.</p>
                </div>
              </div>
              
              <div className="bg-darkgrey p-6 rounded-lg shadow-md relative reveal">
                <div className="w-10 h-10 rounded-full bg-gold text-darkgrey flex items-center justify-center font-semibold absolute -top-5 left-1/2 transform -translate-x-1/2">4</div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold mb-3 text-gold">Implementation & Support</h3>
                  <p className="text-gray-300 text-sm">Ongoing guidance, monitoring, and refinement as your journey evolves.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-darkgrey-light text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <BarChart3 size={48} className="text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 font-playfair text-gold">Ready to Build a Strategic Future?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Partner with Elfrida Limited's advisory team to navigate complexity and unlock sustainable growth.
            </p>
            <Link to="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20 bg-darkgrey">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
              <SectionTitle 
                title="Get Expert Guidance" 
                subtitle="Contact us today to discuss how our advisory services can help you achieve your goals."
                align="left"
                className="mb-8"
              />
              
              <div className="prose max-w-none text-gray-300">
                <p>
                  Our team of experts is ready to provide the strategic guidance you need to navigate complex challenges and seize opportunities. Whether you're seeking legal advice, financial planning, or CSR strategies, Elfrida Limited is your trusted partner.
                </p>
                <p className="mt-4">
                  Fill out the form, and one of our advisory specialists will contact you to schedule a consultation tailored to your needs.
                </p>
              </div>
            </div>
            
            <div className="bg-darkgrey-dark p-8 rounded-lg shadow-md reveal">
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

export default Advisory;
