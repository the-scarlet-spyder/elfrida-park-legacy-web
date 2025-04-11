
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
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <div className="text-earth-dark">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-earth-dark to-earth">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair reveal">
              Contact Us
            </h1>
            <p className="text-xl mb-8 text-earth-lighter reveal">
              Reach out to our team for inquiries, collaborations, or to learn more about our services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
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
                      <a href="tel:+2341234567890" className="hover:text-gold transition-colors">+234 123 456 7890</a><br />
                      <a href="tel:+2341234567891" className="hover:text-gold transition-colors">+234 123 456 7891</a>
                    </p>
                  }
                />
                
                <ContactInfoItem 
                  icon={<Mail size={24} className="text-gold" />}
                  title="Email Us"
                  content={
                    <p>
                      <a href="mailto:info@elfridapark.com" className="hover:text-gold transition-colors">info@elfridapark.com</a><br />
                      <a href="mailto:inquiries@elfridapark.com" className="hover:text-gold transition-colors">inquiries@elfridapark.com</a>
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
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-earth-lightest hover:bg-gold hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-earth-lightest hover:bg-gold hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-earth-lightest hover:bg-gold hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-earth-lightest hover:bg-gold hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                      </a>
                    </div>
                  }
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-earth-lightest">
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
              title="Elfrida Park Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common inquiries about Elfrida Park and our services."
            className="reveal"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 font-playfair">What services does Elfrida Park offer?</h3>
                <p className="text-earth-dark">
                  Elfrida Park offers integrated solutions in Real Estate (property sales, rentals, and development), Event Management (corporate, state, and social events), and Strategic Advisory Services (legal, financial, and CSR consulting).
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 font-playfair">Where are your properties located?</h3>
                <p className="text-earth-dark">
                  We offer premium properties across Nigeria's major cities, with a focus on Lagos, Abuja, and Port Harcourt. Contact us for our current property listings and locations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 font-playfair">How can I invest with Elfrida Park?</h3>
                <p className="text-earth-dark">
                  We offer various investment opportunities in real estate and other sectors. Contact our investment advisory team for personalized guidance on investment options that align with your goals.
                </p>
              </div>
            </div>
            
            <div className="reveal">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 font-playfair">What types of events do you manage?</h3>
                <p className="text-earth-dark">
                  We manage a wide range of events, including corporate conferences, product launches, diplomatic gatherings, weddings, social celebrations, and cultural festivals. Our team tailors each event to meet your specific needs.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 font-playfair">How can I partner with your CSR initiatives?</h3>
                <p className="text-earth-dark">
                  We welcome partnerships with organizations that share our commitment to creating positive social impact. Contact our CSR team to discuss potential collaboration opportunities.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 font-playfair">What is your response time for inquiries?</h3>
                <p className="text-earth-dark">
                  We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please indicate so in your message, and we will prioritize your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gold text-white text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Whether you're interested in real estate, planning an event, or seeking advisory services, we're here to help you achieve your goals.
            </p>
            <a href="tel:+2341234567890" className="btn-secondary bg-white text-gold hover:bg-white/90">
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
