
import React from 'react';
import MainLayout from '@/components/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Users, 
  Sprout, 
  GraduationCap, 
  Award, 
  ArrowRight,
  Gift,
  Target,
  BadgeCheck,
  Star,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ImpactCardProps {
  title: string;
  description: string;
  image: string;
  stats: string[];
}

const ImpactCard: React.FC<ImpactCardProps> = ({ title, description, image, stats }) => {
  return (
    <Card className="overflow-hidden h-full border-ash-dark hover:border-gold transition-all reveal">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 font-playfair gold-gradient">{title}</h3>
        <p className="text-black mb-6">{description}</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-earth-lightest p-3 rounded-md text-center">
              <p className="text-black text-sm">{stat}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface PartnerLogoProps {
  name: string;
  logo: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, logo }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 border border-ash-dark/20 hover:border-gold/50 transition-all">
      <img src={logo} alt={name} className="max-h-12 max-w-full" />
    </div>
  );
};

interface SDGGoalProps {
  number: number;
  title: string;
  description: string;
}

const SDGGoal: React.FC<SDGGoalProps> = ({ number, title, description }) => {
  return (
    <Card className="border-ash-dark hover:border-gold transition-colors p-6 text-center reveal h-full">
      <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2 gold-gradient">{title}</h3>
      <p className="text-black text-sm">{description}</p>
    </Card>
  );
};

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role }) => {
  return (
    <Card className="bg-white/10 backdrop-blur-sm p-8 shadow-lg reveal border border-white/20">
      <p className="text-white/90 italic text-lg mb-6">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
          <Users size={20} className="text-white" />
        </div>
        <div className="ml-4">
          <p className="font-medium text-white">{name}</p>
          <p className="text-sm text-white/70">{role}</p>
        </div>
      </div>
    </Card>
  );
};

interface ImpactStatProps {
  value: string;
  label: string;
}

const ImpactStat: React.FC<ImpactStatProps> = ({ value, label }) => {
  return (
    <div className="text-center p-6 reveal">
      <div className="text-4xl font-bold text-gold mb-2">{value}</div>
      <p className="text-black">{label}</p>
    </div>
  );
};

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
      quote: "The youth empowerment program changed my life completely. I went from being unemployed to starting my own business.",
      name: "Chidinma Okonkwo",
      role: "Program Beneficiary"
    },
    {
      quote: "Elfrida's support for female entrepreneurs has created opportunities that simply didn't exist before.",
      name: "Aisha Bello",
      role: "Women in Business Initiative Participant"
    }
  ];

  const impactStats = [
    { value: "800+", label: "Lives Impacted" },
    { value: "12", label: "Communities Served" },
    { value: "₦100M+", label: "Invested in Impact" },
    { value: "25", label: "Impact Projects" }
  ];

  const impactPhilosophyCards = [
    {
      icon: <Heart size={32} className="text-gold mx-auto mb-4" />,
      title: "Purpose-Driven",
      description: "Creating meaningful impact aligned with community needs"
    },
    {
      icon: <Users size={32} className="text-gold mx-auto mb-4" />,
      title: "Community-Centered",
      description: "Engaging communities as partners in development"
    },
    {
      icon: <Sprout size={32} className="text-gold mx-auto mb-4" />,
      title: "Sustainable",
      description: "Building solutions that last and scale over time"
    },
    {
      icon: <GraduationCap size={32} className="text-gold mx-auto mb-4" />,
      title: "Skills-Focused",
      description: "Developing capabilities for long-term success"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-b from-gold-dark to-gold">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair text-white reveal">
              Our Social Impact
            </h1>
            <p className="text-xl mb-8 text-white/90 reveal">
              Creating meaningful change and building sustainable futures for communities across Nigeria.
            </p>
          </div>
        </div>
      </section>
      
      {/* Impact Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="section-title gold-gradient mb-8">Our Impact Philosophy</h2>
              <p className="text-black mb-6">
                At Elfrida Park, social impact is not an afterthought but a core component of our business strategy. We believe that businesses have a responsibility to contribute positively to society, and we are committed to making a difference in the communities where we operate.
              </p>
              
              <p className="text-black">
                Our approach to social impact focuses on three key areas: youth empowerment, women's economic inclusion, and community development. By focusing on these areas, we aim to create sustainable change that addresses systemic challenges and creates opportunities for long-term growth and development.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 reveal">
              {impactPhilosophyCards.map((card, index) => (
                <Card key={index} className={`p-6 text-center border-ash-dark ${index % 2 !== 0 ? 'mt-8' : ''}`}>
                  {card.icon}
                  <h3 className="text-lg font-semibold mb-2 gold-gradient">{card.title}</h3>
                  <p className="text-black text-sm">{card.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Initiatives */}
      <section className="section-padding bg-earth-lightest">
        <div className="container-custom">
          <h2 className="section-title gold-gradient text-center mb-4 reveal">Our Impact Initiatives</h2>
          <p className="section-subtitle text-center mx-auto mb-12 text-black reveal">
            See how our programs are making a difference in communities across Nigeria.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <ImpactCard key={index} {...initiative} />
            ))}
          </div>
        </div>
      </section>
      
      {/* SDG Alignment */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title gold-gradient text-center mb-4 reveal">Aligned with Global Goals</h2>
          <p className="section-subtitle text-center mx-auto mb-12 text-black reveal">
            Our initiatives contribute to the United Nations Sustainable Development Goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sdgGoals.map((goal) => (
              <SDGGoal 
                key={goal.number}
                number={goal.number}
                title={goal.title}
                description={goal.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Testimonials */}
      <section className="section-padding bg-gradient-to-r from-earth-dark to-earth">
        <div className="container-custom">
          <h2 className="section-title gold-gradient text-center mb-4 reveal">Impact Stories</h2>
          <p className="section-subtitle text-center mx-auto mb-12 text-white/90 reveal">
            Hear from those whose lives have been transformed through our initiatives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title gold-gradient text-center mb-4 reveal">Our Impact Partners</h2>
          <p className="section-subtitle text-center mx-auto mb-12 text-black reveal">
            Collaborating with organizations that share our commitment to creating positive change.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerLogos.map((partner, index) => (
              <PartnerLogo key={index} {...partner} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Metrics */}
      <section className="section-padding bg-earth-lightest">
        <div className="container-custom">
          <h2 className="section-title gold-gradient text-center mb-4 reveal">Our Impact in Numbers</h2>
          <p className="section-subtitle text-center mx-auto mb-12 text-black reveal">
            Measuring the difference we've made through our initiatives.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <ImpactStat 
                key={index}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Get Involved */}
      <section className="section-padding bg-royal text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair gold-gradient">
              Partner With Us For Impact
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join us in our mission to create meaningful change and build sustainable futures. Whether as a corporate partner, donor, or volunteer, there are many ways to get involved.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              <span>Get Involved</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Annual Report */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 reveal">
              <div className="bg-earth-lightest p-8 rounded-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000"
                  alt="Impact Report"
                  className="rounded shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-gold text-white text-sm py-1 px-3 rounded-full">
                  2023
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                  <Award size={32} className="text-gold" />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 reveal">
              <h2 className="section-title gold-gradient mb-4">Annual Impact Report</h2>
              <p className="mb-6 text-black">
                Our Annual Impact Report provides a comprehensive overview of our impact initiatives, including detailed metrics, beneficiary stories, and financial transparency. Download the report to learn more about how we're making a difference at Elfrida's.
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

      {/* Address Footer */}
      <section className="py-10 bg-earth-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/80 text-sm">
              Elfrida's Suite, No 235 RIVTAF Shopping Complex (Golf Estate), <br />
              Off Peter Odili Road, Port Harcourt, Rivers State.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Impact;
