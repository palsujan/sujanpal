import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { IconWrapper } from '../utils/IconWrapper';

const About: React.FC = () => {
  return (
    <AboutSection id="about" className="section">
      <div className="container">
        <SectionTitle>About Me</SectionTitle>
        
        <AboutContainer>
          <AboutImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AboutImage src={require('../assets/img/sujan2.jpg')} alt="Sujan Pal" />
            <ImageBorder />
          </AboutImageContainer>
          
          <AboutContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AboutHeading>Professional Web Developer & Designer</AboutHeading>
            <AboutText>
               Front-end Developer with 4.7+ years of experience building scalable, responsive web and mobile applications using HTML5, CSS3, JavaScript, ReactJS, React Native, TypeScript, and SCSS. Proven expertise in delivering high-quality UIs for high-traffic products like Walmart , RummyCircle , and Wowzy Ludo 
            </AboutText>
            <InfoList>
              <InfoItem>
                <InfoLabel>Name:</InfoLabel>
                <InfoValue>Sujan Pal</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Email:</InfoLabel>
                <InfoValue>sujanpal79@.com</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Location:</InfoLabel>
                <InfoValue> Bommanahalli, Bangalore, India</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Availability:</InfoLabel>
                <InfoValue>Open to opportunities</InfoValue>
              </InfoItem>
            </InfoList>
            
            <ResumeButton href={require("../assets/Sujan-Pal.pdf")} download>  
              {IconWrapper(FiDownload, { size: 18 })}
              <span>Download Resume</span>
            </ResumeButton>
          </AboutContent>
        </AboutContainer>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  background-color: var(--bg-secondary);
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

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  position: relative;
  z-index: 2;
`;

const ImageBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid var(--accent-color);
  border-radius: 8px;
  top: 20px;
  left: 20px;
  z-index: 1;
  
  @media (max-width: 768px) {
    top: 10px;
    left: 10px;
  }
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const AboutHeading = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AboutText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

const InfoList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: var(--text-primary);
  margin-right: 0.5rem;
`;

const InfoValue = styled.span`
  color: var(--text-secondary);
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  max-width: fit-content;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 102, 204, 0.2);
  }
`;

export default About; 