
import React from 'react';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import { Heart, Users, Sprout, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImpactInitiatives from '@/components/impact/ImpactInitiatives';
import ImpactMetrics from '@/components/impact/ImpactMetrics';
import TestimonialSlider from '@/components/TestimonialSlider';

interface PartnerLogoProps {
  name: string;
  logo: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, logo }) => (
  <div className="bg-darkgrey-light p-4 rounded-lg shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-all">
    <img src={logo} alt={name} className="max-h-12 max-w-full" />
  </div>
);

const Impact = () => {
  const initiatives = [
    {
      title: "Youth Empowerment Program",
      description: "Providing skills training, mentorship, and entrepreneurship support to young Nigerians.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000",
      stats: ["500+ Youth Trained", "70% Employment Rate", "25 Startups Launched", "3 States Covered"]
    },
    {
      title: "Women in Business Initiative",
      description: "Supporting female entrepreneurs through access to finance, markets, and business development services.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
      stats: ["300+ Women Supported", "₦50M+ in Financing", "85% Business Survival Rate", "6 Industries"]
    },
    {
      title: "Community Development Projects",
      description: "Implementing infrastructure and social development projects in underserved communities.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000",
      stats: ["12 Communities Served", "30,000+ Beneficiaries", "8 Water Projects", "5 Educational Facilities"]
    }
  ];
  
  const partnerLogos = [
    { name: "United Nations Development Programme", logo: "https://placeholder.svg/300x100/E9E6E0/9B9B9B/UNDP" },
    { name: "Federal Ministry of Youth Development", logo: "https://placeholder.svg/300x100/E9E6E0/9B9B9B/FMYD" },
    { name: "Lagos State Government", logo: "https://placeholder.svg/300x100/E9E6E0/9B9B9B/LASG" },
    { name: "Tony Elumelu Foundation", logo: "https://placeholder.svg/300x100/E9E6E0/9B9B9B/TEF" },
    { name: "African Development Bank", logo: "https://placeholder.svg/300x100/E9E6E0/9B9B9B/AfDB" },
    { name: "Ford Foundation", logo: "https://placeholder.svg/300x100/E9E6E0/9B9B9B/Ford" }
  ];
  
  const sdgGoals = [
    {
      number: 1,
      title: "No Poverty",
      description: "Supporting economic empowerment initiatives that lift people out of poverty."
    },
    {
      number: 4,
      title: "Quality Education",
      description: "Providing access to skills training and educational resources."
    },
    {
      number: 5,
      title: "Gender Equality",
      description: "Promoting women's economic participation and leadership."
    },
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      description: "Creating sustainable employment and entrepreneurship opportunities."
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      quote: "The youth empowerment program changed my life completely. I went from being unemployed to starting my own tech business that now employs five people.",
      name: "Chidinma Okonkwo",
      role: "Program Beneficiary",
      rating: 5
    },
    {
      id: 2,
      quote: "Elfrida's support for female entrepreneurs has created opportunities that simply didn't exist before. Their mentorship and funding helped me scale my business beyond my wildest dreams.",
      name: "Aisha Bello",
      role: "Women in Business Initiative Participant",
      rating: 5
    },
    {
      id: 3,
      quote: "Our community has seen incredible transformation through Elfrida's development projects. The new water system has improved health outcomes dramatically.",
      name: "Chief Emeka Nwosu",
      role: "Community Leader",
      rating: 5
    },
    {
      id: 4,
      quote: "The training I received through the Youth Empowerment Program gave me skills that universities don't teach. I'm now financially independent and supporting my family.",
      name: "Tunde Adeyemi",
      role: "Program Graduate",
      rating: 4
    },
    {
      id: 5,
      quote: "As a community partner, I've witnessed firsthand how Elfrida's holistic approach to development creates lasting change rather than just temporary relief.",
      name: "Dr. Fatima Mohammed",
      role: "NGO Director",
      rating: 5
    }
  ];

  const impactMetrics = [
    {
      value: "800+",
      label: "Lives Directly Impacted"
    },
    {
      value: "12",
      label: "Communities Served"
    },
    {
      value: "₦100M+",
      label: "Invested in Impact"
    },
    {
      value: "25",
      label: "Impact Projects"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-darkgrey-dark to-gold">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair reveal text-darkgrey">
              Our Social Impact
            </h1>
            <p className="text-xl mb-8 text-darkgrey/90 reveal">
              Creating meaningful change and building sustainable futures for communities across Nigeria.
            </p>
          </div>
        </div>
      </section>
      
      {/* Impact Philosophy */}
      <section className="py-20 bg-darkgrey">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <SectionTitle 
                title="Our Impact Philosophy" 
                subtitle="We believe in creating sustainable, measurable social impact that transforms lives and communities."
                align="left"
                className="mb-8"
              />
              
              <p className="text-white/80 mb-6">
                At Elfrida Park, social impact is not an afterthought but a core component of our business strategy. We believe that businesses have a responsibility to contribute positively to society, and we are committed to making a difference in the communities where we operate.
              </p>
              
              <p className="text-white/80">
                Our approach to social impact focuses on three key areas: youth empowerment, women's economic inclusion, and community development. By focusing on these areas, we aim to create sustainable change that addresses systemic challenges and creates opportunities for long-term growth and development.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 reveal">
              <div className="bg-darkgrey-light p-6 rounded-lg text-center">
                <Heart size={32} className="text-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gold">Purpose-Driven</h3>
                <p className="text-white/80 text-sm">Creating meaningful impact aligned with community needs</p>
              </div>
              
              <div className="bg-darkgrey-light p-6 rounded-lg text-center mt-8">
                <Users size={32} className="text-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gold">Community-Centered</h3>
                <p className="text-white/80 text-sm">Engaging communities as partners in development</p>
              </div>
              
              <div className="bg-darkgrey-light p-6 rounded-lg text-center">
                <Sprout size={32} className="text-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gold">Sustainable</h3>
                <p className="text-white/80 text-sm">Building solutions that last and scale over time</p>
              </div>
              
              <div className="bg-darkgrey-light p-6 rounded-lg text-center mt-8">
                <GraduationCap size={32} className="text-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gold">Skills-Focused</h3>
                <p className="text-white/80 text-sm">Developing capabilities for long-term success</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Initiatives */}
      <ImpactInitiatives initiatives={initiatives} />
      
      {/* SDG Alignment */}
      <section className="py-20 bg-darkgrey">
        <div className="container-custom">
          <SectionTitle 
            title="Aligned with Global Goals" 
            subtitle="Our initiatives contribute to the United Nations Sustainable Development Goals."
            className="reveal"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {sdgGoals.map((goal) => (
              <div key={goal.number} className="border border-darkgrey-light rounded-lg p-6 text-center hover:border-gold transition-colors reveal bg-darkgrey-light">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-darkgrey text-2xl font-bold mx-auto mb-4">
                  {goal.number}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gold">{goal.title}</h3>
                <p className="text-white/80 text-sm">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Testimonials */}
      <section className="py-20 bg-gradient-to-r from-darkgrey-dark to-darkgrey text-white">
        <div className="container-custom">
          <SectionTitle 
            title="Impact Stories" 
            subtitle="Hear from those whose lives have been transformed through our initiatives."
            light={true}
            className="reveal"
          />
          
          <div className="mt-12 reveal">
            <TestimonialSlider testimonials={testimonials} autoplaySpeed={6000} />
          </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="py-20 bg-darkgrey-light">
        <div className="container-custom">
          <SectionTitle 
            title="Our Impact Partners" 
            subtitle="Collaborating with organizations that share our commitment to creating positive change."
            className="reveal"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {partnerLogos.map((partner, index) => (
              <PartnerLogo key={index} {...partner} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Metrics */}
      <section className="py-20 bg-darkgrey">
        <div className="container-custom">
          <SectionTitle 
            title="Our Impact in Numbers" 
            subtitle="Measuring the difference we've made through our initiatives."
            className="reveal"
          />
          
          <ImpactMetrics metrics={impactMetrics} className="mt-12" />
        </div>
      </section>
      
      {/* Get Involved */}
      <section className="py-20 bg-darkgrey-dark text-white text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair text-gold">Partner With Us For Impact</h2>
            <p className="text-xl mb-8 text-white/90">
              Join us in our mission to create meaningful change and build sustainable futures. Whether as a corporate partner, donor, or volunteer, there are many ways to get involved.
            </p>
            <Link to="/contact" className="btn-primary bg-gold hover:bg-gold-dark inline-flex items-center">
              <span>Get Involved</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Annual Report */}
      <section className="py-20 bg-darkgrey-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 reveal">
              <div className="bg-darkgrey p-8 rounded-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000"
                  alt="Impact Report"
                  className="rounded shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-gold text-darkgrey text-sm py-1 px-3 rounded-full">
                  2023
                </div>
                <div className="absolute -bottom-5 -right-5 bg-darkgrey-light p-4 rounded-lg shadow-lg">
                  <Award size={32} className="text-gold" />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 reveal">
              <SectionTitle 
                title="Annual Impact Report" 
                subtitle="Detailed insights into our social impact initiatives and outcomes."
                align="left"
                className="mb-8"
              />
              
              <p className="text-white/80 mb-6">
                Our Annual Impact Report provides a comprehensive overview of our impact initiatives, including detailed metrics, beneficiary stories, and financial transparency. Download the report to learn more about how we're making a difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/impact-report" className="btn-primary">
                  Download Report
                </Link>
                <Link to="/impact-stories" className="btn-secondary">
                  Read Impact Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Impact;
