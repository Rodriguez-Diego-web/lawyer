import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
  background-color: var(--color-background);
  padding: 8rem 0;
`;

const ContactTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 4rem;
  font-size: 2.25rem;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    font-size: 2rem;
  }
`;

const ConsultationBox = styled(motion.div)`
  background-color: white;
  padding: 2.5rem 3rem;
  margin-bottom: 6rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin-bottom: 4rem;
  }
`;

const ConsultationTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ConsultationText = styled.p`
  font-size: 1rem;
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto 1.5rem;
  line-height: 1.5;
`;

const ConsultationButton = styled.a`
  display: inline-block;
  background-color: black;
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--color-secondary);
    color: white;
  }
`;

const ContactContent = styled(motion.div)`
  display: flex;
  gap: 4rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
`;

const ContactForm = styled(motion.form)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #eaeaea;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: black;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #eaeaea;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: black;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  margin-top: 1rem;
  
  &:hover {
    background-color: var(--color-secondary);
  }
  
  @media (max-width: 768px) {
    align-self: stretch;
  }
`;

const ContactInfoList = styled.ul`
  list-style: none;
  margin-bottom: 3rem;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  color: white;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.span`
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ContactValue = styled.span`
  color: var(--color-text-light);
  font-size: 1rem;
  line-height: 1.6;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #eaeaea;
  margin: 3rem 0;
`;

const MapContainer = styled(motion.div)`
  height: 350px;
  overflow: hidden;
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer id="kontakt">
      <div className="container">
        <ContactTitle
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >PERSÖNLICHE BERATUNG</ContactTitle>
        
        <ConsultationBox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
        >
          <ConsultationTitle>BEREIT FÜR EIN BERATUNGSGESPRÄCH?</ConsultationTitle>
          <ConsultationText>
            Vereinbaren Sie einen Termin für eine persönliche Beratung. Wir nehmen uns Zeit für Ihre rechtlichen Anliegen und entwickeln individuelle Lösungsstrategien.
          </ConsultationText>
          <ConsultationButton href="#kontaktformular">TERMIN VEREINBAREN</ConsultationButton>
        </ConsultationBox>
        
        <ContactContent 
          id="kontaktformular"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>KONTAKTIEREN SIE UNS</h3>
            <p>Wir stehen Ihnen gerne für Fragen oder Terminvereinbarungen zur Verfügung.</p>
            
            <ContactInfoList>
              <ContactItem>
                <ContactIcon>&#xf3c5;</ContactIcon>
                <ContactText>
                  <ContactLabel>ADRESSE</ContactLabel>
                  <ContactValue>Königstraße 28, 10117 Berlin</ContactValue>
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>&#xf095;</ContactIcon>
                <ContactText>
                  <ContactLabel>TELEFON</ContactLabel>
                  <ContactValue>+49 30 123456789</ContactValue>
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>&#xf0e0;</ContactIcon>
                <ContactText>
                  <ContactLabel>E-MAIL</ContactLabel>
                  <ContactValue>info@lwtc.de</ContactValue>
                </ContactText>
              </ContactItem>
            </ContactInfoList>
            
            <Divider />
            
            <h3>ÖFFNUNGSZEITEN</h3>
            <p>Montag - Freitag: 9:00 - 18:00 Uhr<br />Termine nach Vereinbarung</p>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3>NACHRICHT SENDEN</h3>
            <p>Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.</p>
            
            <FormGrid>
              <FormGroup>
                <Input type="text" name="name" placeholder="Ihr Name" />
              </FormGroup>
              
              <FormGroup>
                <Input type="email" name="email" placeholder="Ihre E-Mail" />
              </FormGroup>
              
              <FormGroup>
                <Input type="tel" name="phone" placeholder="Telefonnummer" />
              </FormGroup>
              
              <FormGroup>
                <Input type="text" name="subject" placeholder="Betreff" />
              </FormGroup>
            </FormGrid>
            
            <FormGroup>
              <TextArea name="message" placeholder="Ihre Nachricht" />
            </FormGroup>
            
            <SubmitButton type="submit">NACHRICHT SENDEN</SubmitButton>
          </ContactForm>
        </ContactContent>
        
        <MapContainer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.654980262564!2d13.382085376893445!3d52.51643697205172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851da983e610d%3A0x4a3c89f59341f9e4!2sK%C3%B6nigstra%C3%9Fe%2028%2C%2010117%20Berlin!5e0!3m2!1sde!2sde!4v1685523896274!5m2!1sde!2sde" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Kanzlei Standort"
          ></iframe>
        </MapContainer>
      </div>
    </ContactContainer>
  );
};

export default Contact;
