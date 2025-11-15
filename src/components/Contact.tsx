import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { IconWrapper } from '../utils/IconWrapper';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // In a real application, you would send the form data to a server here
    // For demo purposes, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent successfully!'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };
  
  return (
    <ContactSection id="contact" className="section">
      <div className="container">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <ContactContainer>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactHeading>Let's talk about your project</ContactHeading>
            <ContactDescription>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </ContactDescription>
            
            <ContactInfoItems>
              <ContactInfoItem>
                <ContactInfoIcon>
                  {IconWrapper(FiMail)}
                </ContactInfoIcon>
                <ContactInfoText>
                  <ContactInfoLabel>Email</ContactInfoLabel>
                  <ContactInfoValue>sujanpal79@gmail.com</ContactInfoValue>
                </ContactInfoText>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactInfoIcon>
                  {IconWrapper(FiPhone)}
                </ContactInfoIcon>
                <ContactInfoText>
                  <ContactInfoLabel>Phone</ContactInfoLabel>
                  <ContactInfoValue>+91-7005674037</ContactInfoValue>
                </ContactInfoText>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactInfoIcon>
                  {IconWrapper(FiMapPin)}
                </ContactInfoIcon>
                <ContactInfoText>
                  <ContactInfoLabel>Location</ContactInfoLabel>
                  <ContactInfoValue>Bommanahalli, Bangalore, India</ContactInfoValue>
                </ContactInfoText>
              </ContactInfoItem>
            </ContactInfoItems>
          </ContactInfo>
          
          <ContactFormContainer
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Name*</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email*</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                />
              </FormGroup>
              
              <FormGroup fullWidth>
                <FormLabel htmlFor="message">Message*</FormLabel>
                <FormTextarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={5} 
                  required 
                />
              </FormGroup>
              
              {formStatus && (
                <FormMessage success={formStatus.success}>
                  {formStatus.message}
                </FormMessage>
              )}
              
              <SubmitButton type="submit">
                {IconWrapper(FiSend, { size: 18 })}
                <span>Send Message</span>
              </SubmitButton>
            </ContactForm>
          </ContactFormContainer>
        </ContactContainer>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  background-color: var(--bg-primary);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--accent-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const ContactHeading = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContactDescription = styled.p`
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const ContactInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContactInfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: var(--bg-secondary);
  border-radius: 50%;
  color: var(--accent-color);
  font-size: 1.25rem;
`;

const ContactInfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfoLabel = styled.span`
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
`;

const ContactInfoValue = styled.span`
  color: var(--text-secondary);
`;

const ContactFormContainer = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: var(--card-shadow);
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  grid-column: ${props => props.fullWidth ? '1 / -1' : 'auto'};
`;

const FormLabel = styled.label`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const FormInput = styled.input`
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: inherit;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  resize: vertical;
  font-family: inherit;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
  }
`;

const FormMessage = styled.div<{ success: boolean }>`
  grid-column: 1 / -1;
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: 500;
  background-color: ${props => props.success ? 'rgba(39, 174, 96, 0.1)' : 'rgba(235, 87, 87, 0.1)'};
  color: ${props => props.success ? '#27AE60' : '#EB5757'};
  border: 1px solid ${props => props.success ? '#27AE60' : '#EB5757'};
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 0.85rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 1rem;
  
  &:hover {
    background-color: #005bb5;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 102, 204, 0.2);
  }
`;

export default Contact; 