import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLink } from 'react-icons/fi';
import { IconWrapper } from '../utils/IconWrapper';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  category: string;
}

const Projects: React.FC = () => {
  const categories = ['All', 'Web App', 'Website', 'Mobile App', 'UI/UX'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment integration.',
      image: 'https://placehold.co/600x400/e9ecef/495057?text=E-Commerce+Platform',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
      category: 'Web App'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with sleek animations, responsive design, and interactive elements to showcase work.',
      image: 'https://placehold.co/600x400/e9ecef/495057?text=Portfolio+Website',
      tags: ['React', 'Styled Components', 'Framer Motion'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
      category: 'Website'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, task categories, priorities, and user collaboration.',
      image: 'https://placehold.co/600x400/e9ecef/495057?text=Task+Management+App',
      tags: ['React', 'Firebase', 'Material UI', 'Redux'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
      category: 'Web App'
    },
    {
      id: 4,
      title: 'Food Delivery App UI',
      description: 'A clean and intuitive mobile app UI design for a food delivery service with seamless ordering experience.',
      image: 'https://placehold.co/600x400/e9ecef/495057?text=Food+Delivery+App',
      tags: ['Figma', 'Adobe XD', 'UI/UX'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
      category: 'UI/UX'
    },
    {
      id: 5,
      title: 'Travel Companion App',
      description: 'A mobile application for travelers to discover destinations, create itineraries, and share experiences with others.',
      image: 'https://placehold.co/600x400/e9ecef/495057?text=Travel+Companion+App',
      tags: ['React Native', 'Expo', 'Firebase', 'Google Maps API'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
      category: 'Mobile App'
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather conditions for multiple locations.',
      image: 'https://placehold.co/600x400/e9ecef/495057?text=Weather+Dashboard',
      tags: ['React', 'OpenWeather API', 'Chart.js'],
      demoLink: 'https://example.com',
      codeLink: 'https://github.com',
      category: 'Web App'
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <ProjectsSection id="projects" className="section">
      <div className="container">
        <SectionTitle>My Projects</SectionTitle>
        
        <CategoryFilter>
          {categories.map(category => (
            <CategoryButton
              key={category}
              active={category === activeCategory}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryFilter>
        
        <ProjectsGrid>
          <AnimatePresence>
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <ProjectImageContainer>
                  <ProjectImage src={project.image} alt={project.title} />
                  <ProjectOverlay>
                    <ProjectLinks>
                      <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        {IconWrapper(FiExternalLink, { size: 20 })}
                        <span>Live Demo</span>
                      </ProjectLink>
                      <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        {IconWrapper(FiGithub, { size: 20 })}
                        <span>View Code</span>
                      </ProjectLink>
                    </ProjectLinks>
                  </ProjectOverlay>
                </ProjectImageContainer>
                
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <ProjectTags>
                    {project.tags.map(tag => (
                      <ProjectTag key={tag}>{tag}</ProjectTag>
                    ))}
                  </ProjectTags>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
        
        <MoreProjectsLink href="https://github.com/palsujan" target="_blank" rel="noopener noreferrer">
          <span>View More Projects on GitHub</span>
          {IconWrapper(FiLink, { size: 18 })}
        </MoreProjectsLink>
      </div>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
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

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const CategoryButton = styled.button<{ active: boolean }>`
  background-color: ${props => props.active ? 'var(--accent-color)' : 'var(--bg-primary)'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--accent-color)' : 'var(--border-color)'};
    transform: translateY(-3px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  
  &:hover {
    img {
      transform: scale(1.05);
    }
    
    .project-overlay {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  className: 'project-overlay';
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--accent-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: var(--transition);
  
  &:hover {
    background-color: white;
    color: var(--accent-color);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ProjectTag = styled.span`
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
`;

const MoreProjectsLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 3rem auto 0;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
  border-radius: 4px;
  font-weight: 500;
  transition: var(--transition);
  width: fit-content;
  
  &:hover {
    background-color: var(--accent-color);
    color: white;
    transform: translateY(-3px);
  }
`;

export default Projects; 