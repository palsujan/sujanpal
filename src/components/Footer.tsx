import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { IconWrapper } from '../utils/IconWrapper';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterLogo>Sujan Pal</FooterLogo>
          
          <FooterNav>
            <FooterNavLink href="#home">Home</FooterNavLink>
            <FooterNavLink href="#about">About</FooterNavLink>
            <FooterNavLink href="#skills">Skills</FooterNavLink>
            <FooterNavLink href="#projects">Projects</FooterNavLink>
            <FooterNavLink href="#contact">Contact</FooterNavLink>
          </FooterNav>
          
          <SocialLinks>
            <SocialLink href="https://github.com/palsujan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              {IconWrapper(FiGithub, { size: 20 })}
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/sujanpal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              {IconWrapper(FiLinkedin, { size: 20 })}
            </SocialLink>
            <SocialLink href="https://x.com/Sujan320" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              {IconWrapper(FiTwitter, { size: 20 })}
            </SocialLink>
            <SocialLink href="mailto:sujanpal79@gmail.com" aria-label="Email">
              {IconWrapper(FiMail, { size: 20 })}
            </SocialLink>
          </SocialLinks>
        </FooterContent>
        
        <FooterDivider />
        
        <FooterBottom>
          <Copyright>
            &copy; {currentYear} Sujan Pal. All rights reserved.
          </Copyright>
          
          <FooterCredit>
            Developed
            <HeartIcon>{IconWrapper(FiHeart)}</HeartIcon> by Sujan Pal
          </FooterCredit>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: var(--bg-secondary);
  padding: 4rem 0 2rem;
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

const FooterNavLink = styled.a`
  color: var(--text-secondary);
  transition: var(--transition);
  
  &:hover {
    color: var(--accent-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  transition: var(--transition);
  
  &:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const FooterDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--border-color);
  margin: 2rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const FooterCredit = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeartIcon = styled.span`
  color: #e25555;
  display: inline-flex;
  align-items: center;
  animation: heartbeat 1.5s infinite;
  
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

export default Footer; 