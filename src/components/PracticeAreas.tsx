import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PracticeContainer = styled.section`
  background-color: white;
  padding: 8rem 0;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 5rem;
  font-size: 2.5rem;
  text-transform: uppercase;
`;

const IntroText = styled.div`
  max-width: 800px;
  margin: 0 auto 5rem;
  text-align: center;
  
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
  
  p {
    font-size: 1.1rem;
    color: var(--color-text-light);
  }
`;

const CardGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background-color: var(--color-accent);
  padding: 3rem 2rem;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: white;
  font-size: 1.5rem;
`;

const CardTitle = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const CardDescription = styled.p`
  color: var(--color-text-light);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const practiceAreas = [
  {
    id: 1,
    title: 'MERGERS & ACQUISITIONS',
    description: 'Lawyer texting doesn\'t just benefit clients. It can enhance overall efficiency speeding up responses from clients',
    icon: '&#xf0c9;' // bars icon
  },
  {
    id: 2,
    title: 'DISPUTE RESOLUTION',
    description: 'Users can text clients directly from the the interface. This saves you time and making the process of lawyer easier.',
    icon: '&#xf067;' // plus icon
  },
  {
    id: 3,
    title: 'NATIONAL SECURITY LAW',
    description: 'Lawyer texting can be an effective way to communicate with clients, but it\'s also more complex than texting.',
    icon: '&#xf00c;' // check icon
  }
];

const PracticeAreas: React.FC = () => {
  return (
    <PracticeContainer id="fachgebiete">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >PRACTICE AREAS</SectionTitle>
        <CardGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {practiceAreas.map((area, index) => (
            <Card 
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <IconWrapper dangerouslySetInnerHTML={{__html: area.icon}} />
              <CardTitle>{area.title}</CardTitle>
              <CardDescription>{area.description}</CardDescription>
            </Card>
          ))}
        </CardGrid>
      </div>
    </PracticeContainer>
  );
};

export default PracticeAreas;
