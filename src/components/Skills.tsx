import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 50 },
        { name: 'React', level: 80 },
        { name: 'React Native', level: 50 },
      ]
    },
    // {
    //   title: 'Backend',
    //   skills: [
    //     { name: 'Node.js', level: 88 },
    //     { name: 'Express', level: 90 },
    //     { name: 'MongoDB', level: 85 },
    //     { name: 'SQL', level: 82 },
    //     { name: 'PHP', level: 75 }
    //   ]
    // },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Figma/Adobe XD', level: 90 },
        { name: 'Webpack/Vite', level: 85 },
        { name: 'Docker', level: 80 },
        // { name: 'AWS/GCP', level: 75 }
      ]
    }
  ];
  
  return (
    <SkillsSection id="skills" className="section">
      <div className="container">
        <SectionTitle>My Skills</SectionTitle>
        
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillsCard 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              
              <SkillsList>
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name}>
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillPercentage>{skill.level}%</SkillPercentage>
                    </SkillHeader>
                    <SkillBar>
                      <SkillProgress level={skill.level} />
                    </SkillBar>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillsCard>
          ))}
        </SkillsGrid>
        
        <ExtraSkillsContainer>
          <ExtraSkillsHeading>Additional Technologies</ExtraSkillsHeading>
          <SkillTagsContainer>
            {[
              'Next.js', 'Tailwind CSS', 'Redux', 
               'Sass/SCSS', 'Material UI', 'Bootstrap'
            ].map((tag, index) => (
              <SkillTag 
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {tag}
              </SkillTag>
            ))}
          </SkillTagsContainer>
        </ExtraSkillsContainer>
      </div>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillsCard = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: var(--accent-color);
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const SkillItem = styled.div``;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
  color: var(--text-primary);
`;

const SkillPercentage = styled.span`
  color: var(--accent-color);
  font-weight: 500;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
`;

const SkillProgress = styled.div<{ level: number }>`
  height: 100%;
  background-color: var(--accent-color);
  border-radius: 4px;
  width: ${props => props.level}%;
  transition: width 1.5s ease-in-out;
`;

const ExtraSkillsContainer = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const ExtraSkillsHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
`;

const SkillTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SkillTag = styled(motion.div)`
  background-color: var(--bg-secondary);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  color: var(--text-primary);
  font-weight: 500;
  transition: var(--transition);
  cursor: default;
  
  &:hover {
    background-color: var(--accent-color);
    color: white;
    transform: translateY(-3px);
  }
`;

export default Skills; 