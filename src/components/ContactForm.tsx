
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = "Get In Touch",
  subtitle = "Fill out the form below, and our team will get back to you shortly.",
  dark = false,
  className,
}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond shortly.",
      duration: 5000,
    });
    
    setFormState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className={className}>
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <h3 className={`text-2xl font-semibold ${dark ? 'text-white' : 'text-foreground'}`}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className={`mt-2 ${dark ? 'text-earth-lighter' : 'text-earth-dark'}`}>
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label 
              htmlFor="name" 
              className={`block mb-2 text-sm font-medium ${dark ? 'text-earth-lighter' : 'text-earth-dark'}`}
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-md border focus:ring-gold focus:border-gold ${
                dark 
                  ? 'bg-earth-dark border-earth text-white placeholder-earth-light' 
                  : 'bg-white border-earth-lighter text-foreground'
              }`}
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label 
              htmlFor="email" 
              className={`block mb-2 text-sm font-medium ${dark ? 'text-earth-lighter' : 'text-earth-dark'}`}
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-md border focus:ring-gold focus:border-gold ${
                dark 
                  ? 'bg-earth-dark border-earth text-white placeholder-earth-light' 
                  : 'bg-white border-earth-lighter text-foreground'
              }`}
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label 
              htmlFor="phone" 
              className={`block mb-2 text-sm font-medium ${dark ? 'text-earth-lighter' : 'text-earth-dark'}`}
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={handleChange}
              className={`w-full p-3 rounded-md border focus:ring-gold focus:border-gold ${
                dark 
                  ? 'bg-earth-dark border-earth text-white placeholder-earth-light' 
                  : 'bg-white border-earth-lighter text-foreground'
              }`}
              placeholder="+234 123 456 7890"
            />
          </div>
          
          <div>
            <label 
              htmlFor="subject" 
              className={`block mb-2 text-sm font-medium ${dark ? 'text-earth-lighter' : 'text-earth-dark'}`}
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-md border focus:ring-gold focus:border-gold ${
                dark 
                  ? 'bg-earth-dark border-earth text-white placeholder-earth-light' 
                  : 'bg-white border-earth-lighter text-foreground'
              }`}
            >
              <option value="">Select a subject</option>
              <option value="Real Estate Inquiry">Real Estate Inquiry</option>
              <option value="Event Management">Event Management</option>
              <option value="Advisory Services">Advisory Services</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
        </div>
        
        <div>
          <label 
            htmlFor="message" 
            className={`block mb-2 text-sm font-medium ${dark ? 'text-earth-lighter' : 'text-earth-dark'}`}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={5}
            className={`w-full p-3 rounded-md border focus:ring-gold focus:border-gold ${
              dark 
                ? 'bg-earth-dark border-earth text-white placeholder-earth-light' 
                : 'bg-white border-earth-lighter text-foreground'
            }`}
            placeholder="How can we help you?"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
