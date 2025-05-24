import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutContainer = styled.section`
  background-color: white;
  padding: 8rem 0;
`;

const StraightTalkSection = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 5rem;
  margin-bottom: 8rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const StraightTalkImage = styled(motion.div)`
  flex: 1;
  height: 500px;
  background-image: url('https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80');
  background-size: cover;
  background-position: center;
  
  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
  }
`;

const StraightTalkText = styled(motion.div)`
  flex: 1;
`;

const StraightTalkTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  line-height: 1.2;
  text-transform: uppercase;
`;

const StraightTalkDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.7;
  color: var(--color-text-light);
`;

const ExploreButton = styled.a`
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

const CommitmentSection = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 5rem;
  flex-direction: row-reverse;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const CommitmentImage = styled(motion.div)`
  flex: 1;
  height: 500px;
  background-image: url('https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80');
  background-size: cover;
  background-position: top center;
  
  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
  }
`;

const CommitmentText = styled(motion.div)`
  flex: 1;
`;

const CommitmentTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  line-height: 1.2;
  text-transform: uppercase;
`;

const CommitmentDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.7;
  color: var(--color-text-light);
`;

const ServicesSection = styled(motion.div)`
  margin-bottom: 8rem;
  text-align: center;
`;

const ServiceTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 4rem;
  line-height: 1.2;
  text-transform: uppercase;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ServiceCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -1rem;
  
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

const ServiceCard = styled(motion.div)`
  flex: 1;
  background-color: #f8f8f8;
  padding: 2.5rem 2rem;
  border-left: 1px solid #e5e5e5;
  text-align: left;
  margin: 0 1rem;
  position: relative;
  
  @media (max-width: 992px) {
    flex-basis: calc(50% - 2rem);
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    margin: 0 0 2rem 0;
    width: 100%;
  }
`;

const ServiceIcon = styled.div`
  width: 45px;
  height: 45px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

const ServiceCardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ServiceCardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
`;

const LearnMoreLink = styled.a`
  color: #4cc9f0;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  
  span {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover span {
    transform: translateX(5px);
  }
`;

const ScheduleButton = styled.a`
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

const AboutMe: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const imageYTransform = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <AboutContainer id="ueber-mich">
      <div className="container">
        <StraightTalkSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <StraightTalkImage 
            style={{ y: imageYTransform }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <StraightTalkText
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <StraightTalkTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >STRAIGHT TALK IS GOOD BUSINESS TALK.</StraightTalkTitle>
            <StraightTalkDescription>
              Als Fachanwalt mit umfangreicher Erfahrung biete ich Ihnen klare, direkte Beratung ohne Fachjargon. Meine Mandanten schätzen meinen pragmatischen Ansatz, der komplexe rechtliche Sachverhalte verständlich erklärt.
            </StraightTalkDescription>
            <StraightTalkDescription>
              Ich glaube an effiziente Kommunikation und konkrete Lösungen, die Zeit und Kosten sparen. Mein Ziel ist es, Ihnen den bestmöglichen rechtlichen Schutz zu bieten und dabei stets transparent zu bleiben.
            </StraightTalkDescription>
            <ExploreButton href="#fachgebiete">EXPLORE NOW</ExploreButton>
          </StraightTalkText>
        </StraightTalkSection>

        <ServicesSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <ServiceTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            I'LL EARN YOUR TRUST AND WILL BE DILIGENT IN YOUR CASE.
          </ServiceTitle>
          
          <ServiceCards>
            <ServiceCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <ServiceIcon>&#xf0c8;</ServiceIcon>
              <ServiceCardTitle>HEALTH CARE & MEDICAL</ServiceCardTitle>
              <ServiceCardDescription>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </ServiceCardDescription>
              <LearnMoreLink href="#fachgebiete">Learn More <span>→</span></LearnMoreLink>
            </ServiceCard>
            
            <ServiceCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <ServiceIcon>&#xf2bc;</ServiceIcon>
              <ServiceCardTitle>REAL ESTATE INVESTMENTS</ServiceCardTitle>
              <ServiceCardDescription>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </ServiceCardDescription>
              <LearnMoreLink href="#fachgebiete">Learn More <span>→</span></LearnMoreLink>
            </ServiceCard>
            
            <ServiceCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <ServiceIcon>&#xf0a6;</ServiceIcon>
              <ServiceCardTitle>DISPUTE RESOLUTIONS</ServiceCardTitle>
              <ServiceCardDescription>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </ServiceCardDescription>
              <LearnMoreLink href="#fachgebiete">Learn More <span>→</span></LearnMoreLink>
            </ServiceCard>
          </ServiceCards>
        </ServicesSection>
        
        <CommitmentSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <CommitmentImage 
            style={{ y: imageYTransform }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <CommitmentText
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <CommitmentTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >COMMITTED TO HELP MY CLIENTS SUCCEED.</CommitmentTitle>
            <CommitmentDescription>
              Der Erfolg meiner Mandanten steht im Mittelpunkt meiner Arbeit. Ich setze mein juristisches Fachwissen und meine Erfahrung ein, um optimale Ergebnisse zu erzielen und Ihre Interessen bestmöglich zu vertreten.
            </CommitmentDescription>
            <CommitmentDescription>
              Meine Mandanten profitieren von meinem tiefgreifenden Verständnis des deutschen Rechtssystems und meinem engagierten Einsatz für ihre Belange. Ich stehe Ihnen als zuverlässiger Partner zur Seite.
            </CommitmentDescription>
            <ScheduleButton href="#kontakt">SCHEDULE A CALL</ScheduleButton>
          </CommitmentText>
        </CommitmentSection>
      </div>
    </AboutContainer>
  );
};

export default AboutMe;
