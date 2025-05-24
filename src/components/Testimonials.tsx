import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsContainer = styled.section`
  background-color: #f8f8f8;
  padding: 8rem 0;
`;

const TestimonialsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const TestimonialsTitle = styled(motion.h2)`
  font-size: 3rem;
  line-height: 1.2;
  text-transform: uppercase;
  margin: 0;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TestimonialsDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-light);
  max-width: 400px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

const CarouselControl = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: black;
    color: white;
    border-color: black;
  }
  
  &:focus {
    outline: none;
  }
`;

const CarouselSlides = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestimonialCard = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e5e5e5;
  min-width: 280px;
  
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
  color: #FFD700;
`;

const Star = styled.span`
  font-size: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 2rem;
`;

const Highlight = styled.span`
  color: #4cc9f0;
  font-weight: 600;
  cursor: pointer;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const AuthorTitle = styled.div`
  font-size: 0.85rem;
  color: var(--color-text-light);
`;

// Testimonial data
const testimonials = [
  {
    id: 1,
    rating: 5,
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving and',
    highlight: 'Improving',
    author: 'Serhiy Hipskyy',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    authorTitle: 'CEO',
  },
  {
    id: 2,
    rating: 5,
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    highlight: 'likewise debating',
    author: 'Justus Menke',
    authorImage: 'https://randomuser.me/api/portraits/men/36.jpg',
    authorTitle: 'CFO',
  },
  {
    id: 3,
    rating: 5,
    text: 'Accusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    highlight: 'voluptatum',
    author: 'Britain Eriksen',
    authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    authorTitle: 'CMO',
  },
  {
    id: 4,
    rating: 5,
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.',
    highlight: 'dignissimos',
    author: 'Anna Smith',
    authorImage: 'https://randomuser.me/api/portraits/women/68.jpg',
    authorTitle: 'Customer',
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth > 768 ? 3 : 1;
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + 1
    );
  }, [itemsPerPage, testimonials.length]);
  
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - 1
    );
  }, [itemsPerPage, testimonials.length]);
  
  // Auto-slide effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [nextSlide]);
  
  // Get visible testimonials
  const visibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };
  
  return (
    <TestimonialsContainer id="testimonials">
      <div className="container">
        <TestimonialsContent>
          <TestimonialsHeader>
            <TestimonialsTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              WHAT MY CLIENTS ARE SAYING
            </TestimonialsTitle>
            <TestimonialsDescription>
              By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands.
            </TestimonialsDescription>
          </TestimonialsHeader>
          
          <CarouselContainer>
            <AnimatePresence mode="wait">
              <CarouselSlides>
                {visibleTestimonials().map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Stars>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i}>★</Star>
                      ))}
                    </Stars>
                    <TestimonialText>
                      {testimonial.text.split(testimonial.highlight).map((part, i, arr) => 
                        i < arr.length - 1 ? (
                          <React.Fragment key={i}>
                            {part}<Highlight>{testimonial.highlight}</Highlight>
                          </React.Fragment>
                        ) : part
                      )}
                    </TestimonialText>
                    <TestimonialAuthor>
                      <AuthorAvatar style={{ backgroundImage: `url(${testimonial.authorImage})` }} />
                      <AuthorInfo>
                        <AuthorName>{testimonial.author}</AuthorName>
                        <AuthorTitle>{testimonial.authorTitle}</AuthorTitle>
                      </AuthorInfo>
                    </TestimonialAuthor>
                  </TestimonialCard>
                ))}
              </CarouselSlides>
            </AnimatePresence>
            
            <CarouselControls>
              <CarouselControl onClick={prevSlide} aria-label="Previous testimonial">
                &#8592;
              </CarouselControl>
              <CarouselControl onClick={nextSlide} aria-label="Next testimonial">
                &#8594;
              </CarouselControl>
            </CarouselControls>
          </CarouselContainer>
        </TestimonialsContent>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;
