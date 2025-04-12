
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
    
    try {
      // Create form data to submit
      const formData = new FormData();
      Object.entries(formState).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // Set the receiving email address
      formData.append('_to', 'info@elfridas.com');
      formData.append('_subject', `Elfrida Limited Website Inquiry: ${formState.subject}`);
      
      // Submit the form using formspree or a similar service
      const response = await fetch('https://formspree.io/f/info@elfridas.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
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
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Message Could Not Be Sent",
        description: "Please try again later or contact us directly at info@elfridas.com",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <h3 className="text-2xl font-semibold text-white">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-2 text-white/80">
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
              className="block mb-2 text-sm font-medium text-white"
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
              className="w-full p-3 rounded-md border bg-earth-dark border-earth text-white placeholder-earth-light focus:ring-gold focus:border-gold"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label 
              htmlFor="email" 
              className="block mb-2 text-sm font-medium text-white"
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
              className="w-full p-3 rounded-md border bg-earth-dark border-earth text-white placeholder-earth-light focus:ring-gold focus:border-gold"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label 
              htmlFor="phone" 
              className="block mb-2 text-sm font-medium text-white"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-md border bg-earth-dark border-earth text-white placeholder-earth-light focus:ring-gold focus:border-gold"
              placeholder="+234 123 456 7890"
            />
          </div>
          
          <div>
            <label 
              htmlFor="subject" 
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border bg-earth-dark border-earth text-white placeholder-earth-light focus:ring-gold focus:border-gold"
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
            className="block mb-2 text-sm font-medium text-white"
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
            className="w-full p-3 rounded-md border bg-earth-dark border-earth text-white placeholder-earth-light focus:ring-gold focus:border-gold"
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
