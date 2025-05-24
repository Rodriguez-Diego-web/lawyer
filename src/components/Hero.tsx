import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  background-color: var(--color-background);
  position: relative;
  overflow: hidden;
  padding: 0;
  min-height: 90vh;
  display: flex;
  align-items: center;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background-color: #f0f0f0;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
    z-index: 0;
    
    @media (max-width: 992px) {
      width: 100%;
      clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
      height: 85%;
      top: auto;
      bottom: 0;
    }
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    padding: 3rem 0;
  }
`;

const HeroText = styled(motion.div)`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: 992px) {
    padding-right: 0;
    margin-top: 2rem;
    text-align: center;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  max-width: 650px;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: var(--color-text-light);
  max-width: 500px;
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CtaContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const CtaButton = styled.a`
  display: inline-block;
  background-color: black;
  color: white;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--color-secondary);
    color: white;
  }
`;

const CtaButtonSecondary = styled.a`
  display: inline-block;
  background-color: transparent;
  color: black;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid black;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const HeroImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const HeroImage = styled.div`
  width: 100%;
  max-width: 600px;
  height: 600px;
  background-image: url('https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80');
  background-size: cover;
  background-position: center;
  
  @media (max-width: 992px) {
    height: 450px;
    max-width: 400px;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer id="home">
      <div className="container">
        <HeroContent>
          <HeroText
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >LEGAL QUESTIONS? I'LL TAKE IT FROM HERE.</HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Mit über 15 Jahren Erfahrung biete ich Ihnen zuverlässige Unterstützung in allen Fragen des Familien- und Erbrechts. Persönlich, diskret und lösungsorientiert.
            </HeroSubtitle>
            <CtaContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <CtaButton href="#kontakt">Jetzt Beratung anfragen</CtaButton>
              <CtaButtonSecondary href="#fachgebiete">Meine Expertise</CtaButtonSecondary>
            </CtaContainer>
          </HeroText>
          <HeroImageContainer
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroImage />
          </HeroImageContainer>
        </HeroContent>
      </div>
    </HeroContainer>
  );
};

export default Hero;
