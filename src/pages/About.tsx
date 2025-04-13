
import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Church, 
  Shield, 
  Heart, 
  Users, 
  Award, 
  Gem, 
  Target, 
  Eye, 
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="bg-card border-ash-dark hover:border-gold transition-all duration-300">
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-gold/10 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 gold-gradient font-playfair">{title}</h3>
        <p className="text-black">{description}</p>
      </CardContent>
    </Card>
  );
};

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image }) => {
  return (
    <Card className="overflow-hidden group reveal border-ash-dark hover:border-gold transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold font-playfair gold-gradient">{name}</h3>
        <p className="text-black">{position}</p>
      </CardContent>
    </Card>
  );
};

interface MilestoneProps {
  year: number;
  title: string;
  description: string;
  isEven: boolean;
}

const Milestone: React.FC<MilestoneProps> = ({ year, title, description, isEven }) => {
  return (
    <div className={`relative z-10 mb-12 flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} reveal`}>
      <div className={`md:w-1/2 ${isEven ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
        <Card className={`bg-white p-6 rounded-lg shadow-md ${isEven ? '' : 'ml-auto'} border-ash-dark`}>
          <span className="text-gold font-bold text-lg">{year}</span>
          <h3 className="text-xl font-semibold mt-1 mb-3 font-playfair gold-gradient">{title}</h3>
          <p className="text-black">{description}</p>
        </Card>
      </div>
      
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gold items-center justify-center">
        <Star size={20} className="text-white" />
      </div>
    </div>
  );
};

const About = () => {
  const teamMembers = [
    {
      name: "Oluwaseun Adeyemi",
      position: "Founder & Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000"
    }, 
    {
      name: "Amara Okafor",
      position: "Director of Real Estate",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000"
    }, 
    {
      name: "Chidi Nweze",
      position: "Head of Event Management",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000"
    }, 
    {
      name: "Fatima Mohammed",
      position: "Director of Advisory Services",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1000"
    }
  ];
  
  const values = [
    {
      title: "Divine Inspiration",
      description: "We act with a higher purpose in mind",
      icon: <Church size={32} className="text-gold" />
    }, 
    {
      title: "Integrity First",
      description: "Transparent, honest, and trustworthy in all dealings",
      icon: <Shield size={32} className="text-gold" />
    }, 
    {
      title: "Passion-Driven",
      description: "We're emotionally invested in your success",
      icon: <Heart size={32} className="text-gold" />
    }, 
    {
      title: "People-Centric",
      description: "Clients aren't transactions — they're partners",
      icon: <Users size={32} className="text-gold" />
    }, 
    {
      title: "Excellence Always",
      description: "High standards are our baseline",
      icon: <Award size={32} className="text-gold" />
    }, 
    {
      title: "Nurturing Growth",
      description: "We support your journey at every stage",
      icon: <Gem size={32} className="text-gold" />
    }
  ];
  
  const milestones = [
    {
      year: 2015,
      title: "Company Founded",
      description: "Elfrida Park Limited was established with a vision to deliver integrated solutions in real estate and advisory services."
    }, 
    {
      year: 2017,
      title: "Event Management Division",
      description: "Expanded services to include luxury event planning and execution for corporate and private clients."
    }, 
    {
      year: 2019,
      title: "Advisory Services Launch",
      description: "Formalized our strategic advisory offerings with a focus on legal, financial, and CSR consulting."
    }, 
    {
      year: 2021,
      title: "Impact Initiative",
      description: "Launched our flagship CSR program focused on youth empowerment and community development."
    }, 
    {
      year: 2023,
      title: "Portfolio Expansion",
      description: "Significantly grew our real estate portfolio and expanded client base across West Africa."
    }
  ];
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-b from-background to-muted">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair gold-gradient reveal">
              About Elfrida Park Limited
            </h1>
            <p className="text-xl mb-8 text-white/90 reveal">
              Our story, our mission, and the values that drive us at Elfrida's to nurture dreams and build legacies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="section-title gold-gradient mb-8">Our Story</h2>
              <p className="text-black mb-6">
                Elfrida Park Limited is a dynamic, people-first company built on a foundation of purpose, integrity, and innovation. At Elfrida's, we offer integrated solutions across Real Estate, Event Management, and Strategic Advisory Services — designed to empower individuals, elevate businesses, and drive sustainable growth.
              </p>
              
              <p className="text-black mb-6">
                Our approach is deeply rooted in value creation. Whether helping a family secure their dream home, curating unforgettable events, or guiding organizations toward sound investment decisions, we operate with a singular focus: to enrich lives, build legacies, and lead change.
              </p>
              
              <p className="text-black">
                With a growing reputation for excellence, impact, and trust, we have become a preferred partner to both local and international clients who seek meaningful, tailored experiences and results. At Elfrida's, we don't just provide services — we build stories, create memories, and catalyze generational transformation.
              </p>
            </div>
            
            <div className="reveal">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1000" 
                alt="Elfrida Park Limited Building" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="section-padding bg-earth-lightest">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 border-ash-dark hover:border-gold transition-all duration-300 reveal">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-playfair gold-gradient">Our Mission</h3>
              <p className="text-black">
                Driven by a passion for creating value beyond transactions, we are committed to nurturing authentic relationships, delivering exceptional services, and fostering environments that promote growth, connection, and faith in a brighter future.
              </p>
            </Card>
            
            <Card className="p-8 border-ash-dark hover:border-gold transition-all duration-300 reveal">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-playfair gold-gradient">Our Vision</h3>
              <p className="text-black">
                To be Nigeria's heartbeat company, delivering integrated solutions that transcend real estate — shaping lives, communities, and industries with bold innovation and timeless impact.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title gold-gradient text-center mb-8 reveal">Our Core Values: D.I.P.P.E.N.</h2>
          <p className="section-subtitle text-black text-center mx-auto mb-12 reveal">
            The principles that guide every aspect of our operations and relationships.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-12 reveal">
            <p className="text-black text-lg italic">
              "We don't just deliver — we care, connect, and create value that lasts."
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Journey Timeline */}
      <section className="section-padding bg-earth-lightest">
        <div className="container-custom">
          <h2 className="section-title gold-gradient text-center mb-8 reveal">Our Journey</h2>
          <p className="section-subtitle text-black text-center mx-auto mb-12 reveal">
            Key milestones in the evolution of Elfrida Park Limited.
          </p>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/30"></div>
            
            {milestones.map((milestone, index) => (
              <Milestone 
                key={index}
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title gold-gradient text-center mb-8 reveal">Our Leadership Team</h2>
          <p className="section-subtitle text-black text-center mx-auto mb-12 reveal">
            Meet the experienced professionals guiding Elfrida's vision and operations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name} 
                position={member.position} 
                image={member.image} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="section-padding bg-gradient-to-r from-royal to-royal-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="section-title gold-gradient mb-8">Our Approach: D.I.P.P.E.N.</h2>
              <p className="text-white/90 mb-8">
                The methodology that defines how we deliver excellence across all our services.
              </p>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium mb-1 gold-gradient">{value.title}</h4>
                      <p className="text-white/90">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="reveal">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000" 
                  alt="Our Approach" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="section-padding bg-earth-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto reveal text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair gold-gradient">Ready to Partner with Us?</h2>
            <p className="text-white mb-8">
              Let us help you nurture your dreams and build lasting legacies. Get in touch with Elfrida's today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/services/real-estate" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-background/20 backdrop-blur-sm">
              <p className="text-white/80 text-sm">
                Elfrida's Suite, No 235 RIVTAF Shopping Complex (Golf Estate), Off Peter Odili Road, Port Harcourt, Rivers State.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
