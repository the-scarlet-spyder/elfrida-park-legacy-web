
import React from 'react';
import MainLayout from '@/components/MainLayout';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content }) => (
  <div className="flex items-start space-x-4 reveal">
    <div className="mt-1 bg-gold/10 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1 text-white">{title}</h3>
      <div className="text-white/90">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="page-hero bg-[url('https://images.unsplash.com/photo-1582653291997-079b4f1a1f6f?q=80&w=2000')] bg-cover bg-center">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair reveal gold-gradient">
              Contact Us
            </h1>
            <p className="text-xl mb-8 text-white/90 reveal max-w-2xl mx-auto">
              Reach out to our team for inquiries, collaborations, or to learn more about our services.
            </p>
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
                subtitle="We're here to help. Fill out the form, and our team will get back to you promptly."
                align="left"
                className="mb-8"
              />
              
              <div className="space-y-8 mb-8">
                <ContactInfoItem 
                  icon={<MapPin size={24} className="text-gold" />}
                  title="Visit Us"
                  content={
                    <p>
                      123 Lagos Business District<br />
                      Victoria Island, Lagos<br />
                      Nigeria
                    </p>
                  }
                />
                
                <ContactInfoItem 
                  icon={<Phone size={24} className="text-gold" />}
                  title="Call Us"
                  content={
                    <p>
                      <a href="tel:09160002771" className="hover:text-gold transition-colors">09160002771</a><br />
                      <a href="tel:09160002772" className="hover:text-gold transition-colors">09160002772</a>
                    </p>
                  }
                />
                
                <ContactInfoItem 
                  icon={<Mail size={24} className="text-gold" />}
                  title="Email Us"
                  content={
                    <p>
                      <a href="mailto:info@elfridas.com" className="hover:text-gold transition-colors">info@elfridas.com</a>
                    </p>
                  }
                />
                
                <ContactInfoItem 
                  icon={<Clock size={24} className="text-gold" />}
                  title="Business Hours"
                  content={
                    <p>
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  }
                />
                
                <ContactInfoItem 
                  icon={<MessageSquare size={24} className="text-gold" />}
                  title="Connect With Us"
                  content={
                    <div className="flex space-x-4 mt-2">
                      <a 
                        href="https://www.instagram.com/elfridasltd" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black-light hover:bg-gold hover:text-black transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      </a>
                      <a 
                        href="https://www.linkedin.com/company/elfridas-ltd" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black-light hover:bg-gold hover:text-black transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                      <a 
                        href="https://www.elfridas.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black-light hover:bg-gold hover:text-black transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                      </a>
                    </div>
                  }
                />
              </div>
            </div>
            
            <div className="glass-card p-8 reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-black-light">
        <div className="container-custom">
          <SectionTitle 
            title="Find Us" 
            subtitle="Visit our office in the heart of Lagos Business District."
            className="reveal"
          />
          
          <div className="mt-8 rounded-lg overflow-hidden shadow-md h-96 reveal">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63427.97620499433!2d3.3790121935070164!3d6.45478826727042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1650000000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              title="Elfrida Limited Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common inquiries about Elfrida Limited and our services."
            className="reveal"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 font-playfair text-white">What services does Elfrida Limited offer?</h3>
                <p className="text-white/90">
                  Elfrida Limited offers integrated solutions in Real Estate (property sales, rentals, and development), Event Management (corporate, state, and social events), and Strategic Advisory Services (legal, financial, and CSR consulting).
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 font-playfair text-white">Where are your properties located?</h3>
                <p className="text-white/90">
                  We offer premium properties across Nigeria's major cities, with a focus on Lagos, Abuja, and Port Harcourt. Contact us for our current property listings and locations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 font-playfair text-white">How can I invest with Elfrida Limited?</h3>
                <p className="text-white/90">
                  We offer various investment opportunities in real estate and other sectors. Contact our investment advisory team for personalized guidance on investment options that align with your goals.
                </p>
              </div>
            </div>
            
            <div className="reveal">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 font-playfair text-white">What types of events do you manage?</h3>
                <p className="text-white/90">
                  We manage a wide range of events, including corporate conferences, product launches, diplomatic gatherings, weddings, social celebrations, and cultural festivals. Our team tailors each event to meet your specific needs.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 font-playfair text-white">How can I partner with your CSR initiatives?</h3>
                <p className="text-white/90">
                  We welcome partnerships with organizations that share our commitment to creating positive social impact. Contact our CSR team to discuss potential collaboration opportunities.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 font-playfair text-white">What is your response time for inquiries?</h3>
                <p className="text-white/90">
                  We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please indicate so in your message, and we will prioritize your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gold text-black text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 text-black/90">
              Whether you're interested in real estate, planning an event, or seeking advisory services, we're here to help you achieve your goals.
            </p>
            <a href="tel:09160002771" className="btn-secondary bg-black text-gold hover:bg-black/90 border-black">
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
