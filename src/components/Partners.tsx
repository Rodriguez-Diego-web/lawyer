import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PartnersContainer = styled.section`
  background-color: #f8f8f8;
  padding: 5rem 0;
`;

const PartnersContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 4rem;
  }
`;

const PartnersText = styled(motion.div)`
  flex: 1;
  max-width: 400px;
  
  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

const PartnersTitle = styled(motion.h2)`
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const PartnersDescription = styled(motion.p)`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const LogosContainer = styled(motion.div)`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  align-items: center;
  justify-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Logo = styled(motion.div)`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  max-width: 120px;
  max-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 100%;
    max-height: 100%;
  }
  
  &:hover {
    opacity: 1;
  }
`;

const Partners: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <PartnersContainer>
      <div className="container">
        <PartnersContent>
          <PartnersText
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <PartnersTitle>
              GROW PROFESSIONALLY WITH THE BEST
            </PartnersTitle>
            <PartnersDescription>
              To grow professionally, any person - both a specialist - needs to learn.
            </PartnersDescription>
          </PartnersText>
          
          <LogosContainer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Logo variants={itemVariants} whileHover={{ scale: 1.1 }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Pentagram_Logo.svg" alt="Pentagram" />
            </Logo>
            <Logo variants={itemVariants} whileHover={{ scale: 1.1 }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/BuzzFeed.svg" alt="BuzzFeed" />
            </Logo>
            <Logo variants={itemVariants} whileHover={{ scale: 1.1 }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Chase-logo.svg" alt="Chase" />
            </Logo>
            <Logo variants={itemVariants} whileHover={{ scale: 1.1 }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Allianz_logo.svg" alt="Allianz" />
            </Logo>
            <Logo variants={itemVariants} whileHover={{ scale: 1.1 }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Logo_Sennheiser.svg" alt="Sennheiser" />
            </Logo>
            <Logo variants={itemVariants} whileHover={{ scale: 1.1 }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Lexmark_logo.svg" alt="Lexmark" />
            </Logo>
          </LogosContainer>
        </PartnersContent>
      </div>
    </PartnersContainer>
  );
};

export default Partners;
