import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { IconWrapper } from '../utils/IconWrapper';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!typingRef.current) return;
    
    const roles = ['Frontend Developer',  'UI Developer'];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        
        typingSpeed = 50;
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          typingSpeed = 500; // Pause before typing the next role
        }
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        
        typingSpeed = 100;
        
        if (currentCharIndex === currentRole.length) {
          isDeleting = true;
          typingSpeed = 1500; // Pause before deleting
        }
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <HeroSection id="home">
      <HeroContainer className="container">
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Greeting>Hello, I'm</Greeting>
            <Name>Sujan Pal</Name>
            <RoleWrapper>
              I'm a <TypingText ref={typingRef}></TypingText>
              <Cursor />
            </RoleWrapper>
            <Description>
              Passionate about creating beautiful, responsive, and user-friendly web applications
              that solve real-world problems.
            </Description>
            
            <ButtonGroup>
              <PrimaryButton href="#contact">Contact Me</PrimaryButton>
              <SecondaryButton href="#projects">View Projects</SecondaryButton>
            </ButtonGroup>
            
            <SocialLinks>
              <SocialLink href="https://github.com/palsujan" target="_blank" rel="noopener noreferrer">
                {IconWrapper(FiGithub, { size: 20 })}
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/sujanpal" target="_blank" rel="noopener noreferrer">
                {IconWrapper(FiLinkedin, { size: 20 })}
              </SocialLink>
              <SocialLink href="https://x.com/Sujan320" target="_blank" rel="noopener noreferrer">
                {IconWrapper(FiTwitter, { size: 20 })}
              </SocialLink>
              <SocialLink href="mailto:sujanpal79@gmail.com">
                {IconWrapper(FiMail, { size: 20 })}
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </HeroContent>
        
        <HeroImageContainer
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HeroImage src={require('../assets/img/sujan.jpg')} alt="Sujan Pal" />
          <BackgroundShape />
        </HeroImageContainer>
      </HeroContainer>
      
      <ScrollIndicator href="#about">
        <ScrollDot />
      </ScrollIndicator>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: var(--header-height);
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin-bottom: 3rem;
    order: 2;
  }
`;

const Greeting = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--accent-color);
`;

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const RoleWrapper = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TypingText = styled.span`
  color: var(--accent-color);
  margin-left: 0.5rem;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background-color: var(--accent-color);
  margin-left: 0.25rem;
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  transition: var(--transition);
  
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--accent-color);
  color: white;
  border: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 102, 204, 0.2);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-color);
  
  &:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--text-primary);
  background-color: var(--bg-secondary);
  transition: var(--transition);
  
  &:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const HeroImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

const HeroImage = styled.img`
  max-width: 400px;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    max-width: 300px;
  }
  
  @media (max-width: 576px) {
    max-width: 250px;
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: -10%;
  right: -10%;
  width: 120%;
  height: 120%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 102, 204, 0.2) 100%);
  z-index: 1;
  animation: morphing 15s infinite;
  
  @keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    25% {
      border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    }
    75% {
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
  }
`;

const ScrollIndicator = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border: 2px solid var(--text-secondary);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    border-color: var(--accent-color);
  }
`;

const ScrollDot = styled.div`
  width: 6px;
  height: 6px;
  background-color: var(--text-secondary);
  border-radius: 50%;
  margin-top: 10px;
  animation: scrollDown 2s infinite;
  
  @keyframes scrollDown {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;

export default Hero; 