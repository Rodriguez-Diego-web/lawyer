import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  background-color: black;
  color: white;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const FooterColumn = styled(motion.div)`
  flex: 1;
  min-width: 200px;
`;

const FooterLogo = styled(motion.div)`
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const FooterDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  max-width: 300px;
  line-height: 1.6;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: black;
  }
`;

const FooterHeading = styled.h4`
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const FooterList = styled(motion.ul)`
  list-style: none;
`;

const FooterItem = styled(motion.li)`
  margin-bottom: 0.8rem;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    transition: color 0.3s ease;
    font-size: 0.9rem;
    
    &:hover {
      color: white;
    }
  }
`;

const ContactDetail = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const ContactIcon = styled.div`
  margin-right: 1rem;
  color: white;
`;

// Newsletter-Komponente für zukünftige Implementierung
// const Newsletter = styled.div`
//   margin-top: 2rem;
// `;

const InputContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  flex-grow: 1;
  font-size: 0.9rem;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 0 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const BottomBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    gap: 1rem;
    text-align: center;
  }
`;

const FooterCopyright = styled(motion.div)`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FooterLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  
  a {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: white;
    }
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const DeveloperCredit = styled(motion.div)`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  margin-top: 1.5rem;
  text-align: center;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    transition: color 0.3s ease;
    text-decoration: none;
    
    &:hover {
      color: white;
    }
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Container variants for staggered animations
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

  // Item variants for child elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <FooterContent
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <FooterColumn>
            <FooterLogo whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>LWTC™</FooterLogo>
            <FooterDescription>
              Spezialisiert auf Familienrecht und Erbrecht mit über 15 Jahren Erfahrung in der juristischen Beratung.
            </FooterDescription>
            <SocialLinks>
              <SocialIcon 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                &#xf08c;
              </SocialIcon>
              <SocialIcon 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                &#xf099;
              </SocialIcon>
              <SocialIcon 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                &#xf09a;
              </SocialIcon>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn variants={itemVariants}>
            <FooterHeading>Kontakt</FooterHeading>
            <FooterList>
              <ContactDetail>
                <ContactIcon>&#xf3c5;</ContactIcon>
                <div>Königstraße 28, 10117 Berlin</div>
              </ContactDetail>
              <ContactDetail>
                <ContactIcon>&#xf095;</ContactIcon>
                <div>+49 30 123456789</div>
              </ContactDetail>
              <ContactDetail>
                <ContactIcon>&#xf0e0;</ContactIcon>
                <div>info@lwtc.de</div>
              </ContactDetail>
            </FooterList>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Services</FooterHeading>
            <FooterList>
              <FooterItem variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}><a href="#fachgebiete">Mergers & Acquisitions</a></FooterItem>
              <FooterItem variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}><a href="#fachgebiete">Services</a></FooterItem>
              <FooterItem variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}><a href="#fachgebiete">National Security Law</a></FooterItem>
              <FooterItem variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}><a href="#fachgebiete">Health Care & Medical</a></FooterItem>
              <FooterItem variants={itemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}><a href="#fachgebiete">Real Estate Investments</a></FooterItem>
            </FooterList>
          </FooterColumn>
          
          <FooterColumn variants={itemVariants}>
            <FooterHeading>Newsletter</FooterHeading>
            <FooterDescription>
              Abonnieren Sie unseren Newsletter für aktuelle Rechtsinformationen und Kanzlei-Updates.
            </FooterDescription>
            <InputContainer>
              <Input type="email" placeholder="Ihre E-Mail-Adresse" />
              <SubmitButton type="submit">Go</SubmitButton>
            </InputContainer>
          </FooterColumn>
        </FooterContent>
        
        <BottomBar>
          <FooterCopyright
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div>© {currentYear} LWTC™ | Alle Rechte vorbehalten</div>
            <FooterLinks
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="/impressum">Impressum</a>
              <a href="/datenschutz">Datenschutz</a>
              <a href="/agb">AGB</a>
            </FooterLinks>
          </FooterCopyright>
          
          <DeveloperCredit
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Made by <a href="https://rodriguez-web.de/" target="_blank" rel="noopener noreferrer">Rodriguez Web</a> | Diego Rodriguez
          </DeveloperCredit>
        </BottomBar>
      </div>
    </FooterContainer>
  );
};

export default Footer;
