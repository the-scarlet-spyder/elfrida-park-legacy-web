import React from 'react';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import { CheckCircle, Target, Eye, Star, Layers, Shield, Award, Users, Gem, Heart, Church } from 'lucide-react';
import { Link } from 'react-router-dom';
interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}
const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  image
}) => <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all text-center group reveal">
    <div className="aspect-square overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold font-playfair">{name}</h3>
      <p className="text-earth">{position}</p>
    </div>
  </div>;
const About = () => {
  const teamMembers = [{
    name: "Oluwaseun Adeyemi",
    position: "Founder & Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000"
  }, {
    name: "Amara Okafor",
    position: "Director of Real Estate",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000"
  }, {
    name: "Chidi Nweze",
    position: "Head of Event Management",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000"
  }, {
    name: "Fatima Mohammed",
    position: "Director of Advisory Services",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1000"
  }];
  const values = [{
    title: "Divine Inspiration",
    description: "We act with a higher purpose in mind",
    icon: <Church size={32} className="text-gold" />
  }, {
    title: "Integrity First",
    description: "Transparent, honest, and trustworthy in all dealings",
    icon: <Shield size={32} className="text-gold" />
  }, {
    title: "Passion-Driven",
    description: "We're emotionally invested in your success",
    icon: <Heart size={32} className="text-gold" />
  }, {
    title: "People-Centric",
    description: "Clients aren't transactions — they're partners",
    icon: <Users size={32} className="text-gold" />
  }, {
    title: "Excellence Always",
    description: "High standards are our baseline",
    icon: <Award size={32} className="text-gold" />
  }, {
    title: "Nurturing Growth",
    description: "We support your journey at every stage",
    icon: <Gem size={32} className="text-gold" />
  }];
  const milestones = [{
    year: 2015,
    title: "Company Founded",
    description: "Elfrida Limited was established with a vision to deliver integrated solutions in real estate and advisory services."
  }, {
    year: 2017,
    title: "Event Management Division",
    description: "Expanded services to include luxury event planning and execution for corporate and private clients."
  }, {
    year: 2019,
    title: "Advisory Services Launch",
    description: "Formalized our strategic advisory offerings with a focus on legal, financial, and CSR consulting."
  }, {
    year: 2021,
    title: "Impact Initiative",
    description: "Launched our flagship CSR program focused on youth empowerment and community development."
  }, {
    year: 2023,
    title: "Portfolio Expansion",
    description: "Significantly grew our real estate portfolio and expanded client base across West Africa."
  }];
  return <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-earth-dark to-earth">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair reveal">
              About Elfrida Limited
            </h1>
            <p className="text-xl mb-8 text-earth-lighter reveal">
              Our story, our mission, and the values that drive us to nurture dreams and build legacies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <SectionTitle title="Our Story" subtitle="Founded with a vision to transform industries through purpose-driven excellence." align="left" className="mb-8" />
              
              <p className="text-earth-dark mb-6">
                Elfrida Limited is a dynamic, people-first company built on a foundation of purpose, integrity, and innovation. We offer integrated solutions across Real Estate, Event Management, and Strategic Advisory Services — designed to empower individuals, elevate businesses, and drive sustainable growth.
              </p>
              
              <p className="text-earth-dark mb-6">
                Our approach is deeply rooted in value creation. Whether helping a family secure their dream home, curating unforgettable events, or guiding organizations toward sound investment decisions, we operate with a singular focus: to enrich lives, build legacies, and lead change.
              </p>
              
              <p className="text-earth-dark">
                With a growing reputation for excellence, impact, and trust, we have become a preferred partner to both local and international clients who seek meaningful, tailored experiences and results. At Elfrida Limited, we don't just provide services — we build stories, create memories, and catalyze generational transformation.
              </p>
            </div>
            
            <div className="reveal">
              <img src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1000" alt="Elfrida Limited Building" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-earth-lightest">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md reveal">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-playfair">Our Mission</h3>
              <p className="text-earth-dark">
                Driven by a passion for creating value beyond transactions, we are committed to nurturing authentic relationships, delivering exceptional services, and fostering environments that promote growth, connection, and faith in a brighter future.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md reveal">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-playfair">Our Vision</h3>
              <p className="text-earth-dark">
                To be Nigeria's heartbeat company, delivering integrated solutions that transcend real estate — shaping lives, communities, and industries with bold innovation and timeless impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle title="Our Core Values: D.I.P.P.E.N." subtitle="The principles that guide every aspect of our operations and relationships." className="reveal" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => <div key={index} className="p-8 border border-earth-lightest rounded-lg hover:shadow-md transition-all text-center reveal">
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-gold/10 rounded-full">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 font-playfair text-gold">{value.title}</h3>
                <p className="text-earth-dark text-gray-950">{value.description}</p>
              </div>)}
          </div>
          
          <div className="text-center mt-10 reveal">
            <p className="text-earth-dark text-lg italic">
              "We don't just deliver — we care, connect, and create value that lasts."
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Journey Timeline */}
      <section className="py-20 bg-earth-lightest">
        <div className="container-custom">
          <SectionTitle title="Our Journey" subtitle="Key milestones in the evolution of Elfrida Limited." className="reveal" />
          
          <div className="relative mt-16">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/30"></div>
            
            {milestones.map((milestone, index) => <div key={index} className={`relative z-10 mb-12 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} reveal`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                  <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? '' : 'ml-auto'}`}>
                    <span className="text-gold font-bold text-lg">{milestone.year}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-3 font-playfair">{milestone.title}</h3>
                    <p className="text-earth-dark">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gold items-center justify-center">
                  <Star size={20} className="text-white" />
                </div>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle title="Our Leadership Team" subtitle="Meet the experienced professionals guiding Elfrida Limited's vision and operations." className="reveal" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => <TeamMember key={index} {...member} />)}
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="py-20 bg-gradient-to-r from-royal to-royal-light text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <SectionTitle title="Our Approach: D.I.P.P.E.N." subtitle="The methodology that defines how we deliver excellence across all our services." align="left" light={true} className="mb-8" />
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Divine Inspiration</h4>
                    <p className="text-white/80">We act with a higher purpose in mind, guided by principles that transcend mere business interests.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Integrity First</h4>
                    <p className="text-white/80">We maintain transparency, honesty, and trustworthiness in all our dealings and relationships.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Passion-Driven</h4>
                    <p className="text-white/80">We're emotionally invested in your success, bringing enthusiasm and dedication to every project.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">People-Centric</h4>
                    <p className="text-white/80">We view our clients as partners, not transactions, focusing on building meaningful relationships.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Excellence Always</h4>
                    <p className="text-white/80">High standards are our baseline, and we continuously strive to exceed expectations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Nurturing Growth</h4>
                    <p className="text-white/80">We support your journey at every stage, fostering sustainable development and advancement.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000" alt="Our Approach" className="rounded-lg shadow-lg" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gold/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Layers size={40} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-earth-dark text-white text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 text-earth-lighter">
              Let us help you nurture your dreams and build lasting legacies. Get in touch today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/services/real-estate" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>;
};
export default About;