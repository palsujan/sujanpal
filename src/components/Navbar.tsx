import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { IconWrapper } from '../utils/IconWrapper';

interface NavLinkProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.navbar-content') && !target.closest('.menu-button')) {
          setIsOpen(false);
        }
      };
      
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);
  
  const navLinks: NavLinkProps[] = [
    { to: '#home', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#skills', label: 'Skills' },
    { to: '#projects', label: 'Projects' },
    { to: '#contact', label: 'Contact' }
  ];
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <div className="container">
        <NavbarContent>
          <Logo>Sujan Pal</Logo>
          
          <DesktopMenu>
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.to}>
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle onClick={toggleTheme}>
              {theme === 'dark' ? IconWrapper(FiSun, { size: 20 }) : IconWrapper(FiMoon, { size: 20 })}
            </ThemeToggle>
          </DesktopMenu>
          
          <MobileMenuButton className="menu-button" onClick={toggleMenu}>
            {isOpen ? IconWrapper(FiX, { size: 24 }) : IconWrapper(FiMenu, { size: 24 })}
          </MobileMenuButton>
        </NavbarContent>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <MobileMenuContainer 
            className="navbar-content"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <MobileMenuLinks>
              {navLinks.map((link) => (
                <MobileNavLink 
                  key={link.label} 
                  href={link.to}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </MobileNavLink>
              ))}
              <MobileThemeToggle onClick={toggleTheme}>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                {theme === 'dark' ? IconWrapper(FiSun, { size: 20 }) : IconWrapper(FiMoon, { size: 20 })}
              </MobileThemeToggle>
            </MobileMenuLinks>
          </MobileMenuContainer>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: ${props => props.scrolled ? 'var(--bg-primary)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: var(--transition);
  z-index: 1000;
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  display: flex;
  align-items: center;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  height: 100%;
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--text-primary);
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-color);
    transition: var(--transition);
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  
  &:hover {
    background-color: var(--bg-secondary);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenuContainer = styled(motion.div)`
  position: absolute;
  top: var(--header-height);
  left: 0;
  width: 100%;
  background-color: var(--bg-primary);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  z-index: 999;
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
`;

const MobileNavLink = styled.a`
  color: var(--text-primary);
  font-weight: 500;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
`;

const MobileThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem 0;
  width: 100%;
  font-weight: 500;
  border-top: 1px solid var(--border-color);
  margin-top: 0.5rem;
`;

export default Navbar; 