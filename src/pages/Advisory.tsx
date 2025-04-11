
import React from 'react';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { CheckCircle, Brain, Scale, Briefcase, LineChart, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 border border-earth-lightest rounded-lg hover:shadow-lg transition-all reveal">
    <div className="w-14 h-14 bg-earth-lightest rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4 font-playfair">{title}</h3>
    <p className="text-earth-dark">{description}</p>
  </div>
);

const CaseStudyCard = ({ title, client, outcome, image }: {
  title: string;
  client: string;
  outcome: string;
  image: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group reveal">
    <div className="aspect-[16/9] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 font-playfair">{title}</h3>
      <p className="text-earth mb-4">Client: {client}</p>
      <p className="text-earth-dark">{outcome}</p>
    </div>
  </div>
);

const Advisory = () => {
  const services = [
    {
      icon: <Scale size={28} className="text-gold" />,
      title: "Legal Advisory",
      description: "Expert guidance on legal matters specific to Nigerian business environments, regulatory compliance, and contract negotiations."
    },
    {
      icon: <LineChart size={28} className="text-gold" />,
      title: "Financial Strategy",
      description: "Comprehensive financial planning, investment advisory, and capital raising strategies for businesses and high-net-worth individuals."
    },
    {
      icon: <Heart size={28} className="text-gold" />,
      title: "CSR & Impact",
      description: "Development and implementation of meaningful corporate social responsibility initiatives that create genuine community impact."
    },
    {
      icon: <Briefcase size={28} className="text-gold" />,
      title: "Business Development",
      description: "Strategic planning for business growth, market entry, partnership development, and operational optimization."
    },
    {
      icon: <Users size={28} className="text-gold" />,
      title: "Stakeholder Management",
      description: "Building and maintaining effective relationships with key stakeholders, including government bodies, investors, and community leaders."
    },
    {
      icon: <Brain size={28} className="text-gold" />,
      title: "Strategic Consulting",
      description: "Holistic business advisory services addressing complex challenges and identifying opportunities for sustainable growth."
    }
  ];
  
  const caseStudies = [
    {
      title: "Corporate Governance Restructuring",
      client: "Major Financial Institution",
      outcome: "Implemented governance reforms resulting in improved compliance and operational efficiency.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000"
    },
    {
      title: "Community Impact Program",
      client: "Multinational Energy Company",
      outcome: "Developed a sustainable CSR initiative that benefited over 10,000 community members.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000"
    },
    {
      title: "Investment Strategy",
      client: "High-Net-Worth Family Office",
      outcome: "Created a diversified portfolio strategy yielding consistent above-market returns.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000"
    }
  ];
  
  const benefits = [
    "Access to seasoned experts with deep industry knowledge",
    "Tailored solutions addressing your specific challenges",
    "Strategic approach focused on long-term sustainability",
    "Integrated service model combining legal, financial, and social expertise",
    "Local insights with international best practices",
    "Measurable outcomes and impact-driven methodology"
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-earth-dark to-earth">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair reveal">
              Strategic Advisory Services
            </h1>
            <p className="text-xl mb-8 text-earth-lighter reveal">
              Expert guidance and solutions to navigate complex business challenges and create lasting impact.
            </p>
            <Link to="#contact-form" className="btn-primary reveal">
              Book a Consultation
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
                title="Guidance for Complex Challenges" 
                subtitle="Our advisory services combine local expertise with global insights to deliver strategic solutions that drive growth and impact."
                align="left"
                className="mb-8"
              />
              
              <p className="text-earth-dark mb-6">
                At Elfrida Park, we understand the unique challenges and opportunities in the Nigerian business landscape. Our advisory team brings together seasoned professionals with diverse expertise in legal matters, financial strategy, business development, and corporate social responsibility.
              </p>
              
              <p className="text-earth-dark">
                We work closely with clients to understand their specific needs and develop tailored solutions that address immediate challenges while building a foundation for long-term success and sustainability.
              </p>
            </div>
            
            <div className="reveal">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000" 
                alt="Strategic Advisory Meeting" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-earth-lightest">
        <div className="container-custom">
          <SectionTitle 
            title="Our Advisory Services" 
            subtitle="Comprehensive solutions designed to address your most pressing business and strategic challenges."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 reveal">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gold/10 rounded-lg p-6 flex flex-col items-center text-center">
                  <Scale size={36} className="text-gold mb-4" />
                  <h4 className="font-semibold mb-2">Legal Expertise</h4>
                  <p className="text-sm text-earth-dark">Navigation of complex regulatory frameworks</p>
                </div>
                <div className="bg-gold/10 rounded-lg p-6 flex flex-col items-center text-center mt-6">
                  <LineChart size={36} className="text-gold mb-4" />
                  <h4 className="font-semibold mb-2">Financial Acumen</h4>
                  <p className="text-sm text-earth-dark">Strategic financial planning and optimization</p>
                </div>
                <div className="bg-gold/10 rounded-lg p-6 flex flex-col items-center text-center">
                  <Heart size={36} className="text-gold mb-4" />
                  <h4 className="font-semibold mb-2">Social Impact</h4>
                  <p className="text-sm text-earth-dark">Purpose-driven CSR initiatives</p>
                </div>
                <div className="bg-gold/10 rounded-lg p-6 flex flex-col items-center text-center mt-6">
                  <Users size={36} className="text-gold mb-4" />
                  <h4 className="font-semibold mb-2">Relationship Building</h4>
                  <p className="text-sm text-earth-dark">Strategic stakeholder management</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 reveal">
              <SectionTitle 
                title="The Elfrida Park Advantage" 
                subtitle="Our unique approach combines expertise, experience, and a commitment to excellence."
                align="left"
                className="mb-8"
              />
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-earth-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-20 bg-earth-lightest">
        <div className="container-custom">
          <SectionTitle 
            title="Case Studies" 
            subtitle="Examples of how our advisory services have created tangible impact for our clients."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CSR Impact Section */}
      <section className="py-20 bg-gradient-to-r from-royal to-royal-light text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <SectionTitle 
                title="Creating Meaningful Social Impact" 
                subtitle="Our CSR advisory focuses on developing sustainable initiatives that deliver genuine value to communities."
                align="left"
                light={true}
                className="mb-8"
              />
              
              <p className="text-white/90 mb-6">
                At Elfrida Park, we believe that corporate social responsibility goes beyond philanthropy. Our approach integrates social impact into business strategy, creating shared value for companies and communities alike.
              </p>
              
              <p className="text-white/90 mb-8">
                From youth empowerment programs to women's initiatives and community development projects, we help organizations design and implement impactful CSR strategies that align with their values and business objectives.
              </p>
              
              <Link to="/impact" className="btn-secondary bg-white text-royal hover:bg-white/90">
                Explore Our Impact Work
              </Link>
            </div>
            
            <div className="reveal">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" 
                alt="Community Impact" 
                className="rounded-lg shadow-lg"
              />
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
                title="Ready to Transform Your Strategy?" 
                subtitle="Book a consultation with our advisory team to discuss your specific challenges and opportunities."
                align="left"
                light={true}
                className="mb-8"
              />
              
              <div className="prose max-w-none text-earth-lighter">
                <p>
                  Our advisory services begin with a thorough understanding of your current situation, challenges, and objectives. From there, we develop a tailored approach that addresses your specific needs and creates a roadmap for success.
                </p>
                <p className="mt-4">
                  Fill out the form, and one of our advisory specialists will contact you to schedule your consultation.
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

export default Advisory;
