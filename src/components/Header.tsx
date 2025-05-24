import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

const NavContainer = styled(motion.header)`
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1.5rem 0;
  
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const MenuItems = styled(motion.ul)`
  display: flex;
  list-style: none;
  gap: 3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(motion.li)`
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  a {
    color: var(--color-text);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--color-secondary);
    }
  }
`;

const ContactButton = styled(motion.a)`
  background-color: black;
  color: white;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--color-secondary);
    color: white;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const BurgerButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 150;
  position: relative;
  width: 30px;
  height: 30px;
  padding: 0;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  
  &:focus {
    outline: none;
  }
`;

const BurgerLine = styled(motion.span)<{ isOpen?: boolean }>`
  width: 100%;
  height: 3px;
  background-color: ${props => props.isOpen ? 'white' : 'black'};
  transition: all 0.3s ease;
  position: absolute;
  left: 0;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 140;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const MobileMenuItems = styled(motion.ul)`
  list-style: none;
  width: 100%;
  max-width: 300px;
`;

const MobileMenuItem = styled(motion.li)`
  margin-bottom: 2rem;
  text-align: center;
  
  a {
    color: white;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    padding: 0.5rem 0;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--color-secondary);
    }
  }
`;

const MobileContactButton = styled(motion.a)`
  background-color: white;
  color: black;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 2rem;
  
  &:hover {
    background-color: var(--color-secondary);
    color: white;
  }
`;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const updateScrolled = () => {
      if (scrollY.get() > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    const unsubscribe = scrollY.onChange(updateScrolled);
    return () => unsubscribe();
  }, [scrollY]);
  
  return (
    <NavContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 1)'
      }}
    >
      <div className="container">
        <Nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Logo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >LWTC™</Logo>
          <MenuItems
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MenuItem
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ y: -5 }}
            ><a href="#home">Home</a></MenuItem>
            <MenuItem
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ y: -5 }}
            ><a href="#ueber-mich">About Me</a></MenuItem>
            <MenuItem
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileHover={{ y: -5 }}
            ><a href="#fachgebiete">Services</a></MenuItem>
            <MenuItem
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              whileHover={{ y: -5 }}
            ><a href="#blog">Blog</a></MenuItem>
            <MenuItem
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              whileHover={{ y: -5 }}
            ><a href="#kontakt">Contact</a></MenuItem>
          </MenuItems>
          <ContactButton 
            href="#kontakt"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >Beratung anfragen</ContactButton>
          
          <BurgerButton 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <BurgerLine 
              isOpen={isMenuOpen}
              initial={{ top: '0%' }}
              animate={{ 
                top: isMenuOpen ? '50%' : '0%', 
                rotate: isMenuOpen ? '45deg' : '0deg' 
              }}
              transition={{ duration: 0.3 }}
            />
            <BurgerLine 
              isOpen={isMenuOpen}
              initial={{ opacity: 1, top: '50%' }}
              animate={{ opacity: isMenuOpen ? 0 : 1, top: '50%' }}
              transition={{ duration: 0.3 }}
            />
            <BurgerLine 
              isOpen={isMenuOpen}
              initial={{ top: '100%' }}
              animate={{ 
                top: isMenuOpen ? '50%' : '100%', 
                rotate: isMenuOpen ? '-45deg' : '0deg' 
              }}
              transition={{ duration: 0.3 }}
            />
          </BurgerButton>
        </Nav>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
          >
            <MobileMenuItems
              initial="hidden"
              animate="visible"
              variants={{

                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              <MobileMenuItem
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
              </MobileMenuItem>
              <MobileMenuItem
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <a href="#ueber-mich" onClick={() => setIsMenuOpen(false)}>About Me</a>
              </MobileMenuItem>
              <MobileMenuItem
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <a href="#fachgebiete" onClick={() => setIsMenuOpen(false)}>Services</a>
              </MobileMenuItem>
              <MobileMenuItem
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              </MobileMenuItem>
              <MobileMenuItem
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <a href="#kontakt" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </MobileMenuItem>
              <MobileContactButton 
                href="#kontakt"
                onClick={() => setIsMenuOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                } as any}
              >
                Beratung anfragen
              </MobileContactButton>
            </MobileMenuItems>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Header;
