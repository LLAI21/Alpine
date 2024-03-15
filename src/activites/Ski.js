// Import des dépendances nécessaires
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

// Définition du composant de la page Ski
const Skiing = () => {
  // Animation des éléments de la page
  const heroAnimation = useAnimation();
  const disciplinesAnimation = useAnimation();
  const snowConditionsAnimation = useAnimation();
  const testimonialsAnimation = useAnimation();

  useEffect(() => {
    // Animation des éléments lors du chargement de la page
    heroAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } });
    disciplinesAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.2 } });
    snowConditionsAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.4 } });
    testimonialsAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.6 } });
  }, [heroAnimation, disciplinesAnimation, snowConditionsAnimation, testimonialsAnimation]);

  // État pour les conditions d'enneigement (simulées)
  const [snowConditions, setSnowConditions] = useState({
    partnerStations: [
      { name: 'Station A', snowDepth: 120 },
      { name: 'Station B', snowDepth: 90 },
      { name: 'Station C', snowDepth: 150 },
    ],
  });

  // Contenu de la page Ski
  return (
    <Container>
      <Header />

      <HeroSection animate={heroAnimation}>
        <HeroContent>
          <HeroTitle
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut', delay: 0.5 } }}
          >
            Ski en Montagne
          </HeroTitle>
          <HeroText
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut', delay: 0.7 } }}
          >
            Découvrez les plaisirs du ski dans des paysages montagneux extraordinaires.
          </HeroText>
        </HeroContent>
      </HeroSection>

      <DisciplinesSection animate={disciplinesAnimation}>
        <DisciplinesTitle>Disciplines de Ski</DisciplinesTitle>
        <DisciplinesGrid>
          <center><DisciplineBlock>
            <DisciplineImage src="https://hotel-kaya.com/assets/uploads/2022/06/regles-ski-alpin.jpg" alt="Ski Alpin" />
            <DisciplineTitle>Ski Alpin</DisciplineTitle>
            <DisciplineDescription>
              Une descente rapide à travers les pistes variées, idéale pour les amateurs de vitesse.
            </DisciplineDescription>
          </DisciplineBlock></center>
          <center><DisciplineBlock>
            <DisciplineImage src="https://hotel-kaya.com/assets/uploads/2022/06/ski-de-fond.jpg" alt="Ski de Fond" />
            <DisciplineTitle>Ski de Fond</DisciplineTitle>
            <DisciplineDescription>
              Parcourez de longues distances sur des sentiers glacés, parfaits pour les amateurs de fond.
            </DisciplineDescription>
          </DisciplineBlock></center>
          <center><DisciplineBlock>
            <DisciplineImage src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Skieuse.jpg" alt="Ski Hors-Piste" />
            <DisciplineTitle>Ski Hors-Piste</DisciplineTitle>
            <DisciplineDescription>
              Explorez les zones non balisées, idéal pour les aventuriers en quête de terrains inexplorés.
            </DisciplineDescription>
          </DisciplineBlock></center>
        </DisciplinesGrid>
      </DisciplinesSection>

      <SnowConditionsSection animate={snowConditionsAnimation}>
        <SnowConditionsTitle>Conditions d'Enneigement</SnowConditionsTitle>
        <SnowConditionsList>
          {/* Affichage des conditions d'enneigement pour les stations partenaires */}
          {snowConditions.partnerStations.map((station) => (
            <SnowConditionItem key={station.name}>
              {station.name}: {station.snowDepth} cm de neige
            </SnowConditionItem>
          ))}
        </SnowConditionsList>
      </SnowConditionsSection>

      <TestimonialsSection animate={testimonialsAnimation}>
        <TestimonialsTitle>Témoignages de Skieurs Passionnés</TestimonialsTitle>
        <TestimonialsGrid>
          {/* Ajoutez ici des témoignages de skieurs passionnés */}
          <TestimonialBlock>
            <TestimonialText>
              "Le ski en montagne m'a offert des moments inoubliables. Les descentes rapides et les paysages à couper le souffle font de chaque journée une aventure unique."
            </TestimonialText>
            <TestimonialAuthor>- Skieur A</TestimonialAuthor>
          </TestimonialBlock>
          <TestimonialBlock>
            <TestimonialText>
              "Les stations partenaires offrent des conditions parfaites pour tous les niveaux. Je recommande vivement cette expérience à tous les amateurs de ski."
            </TestimonialText>
            <TestimonialAuthor>- Skieur B</TestimonialAuthor>
          </TestimonialBlock>
        </TestimonialsGrid>
      </TestimonialsSection>

      <Footer />
    </Container>
  );
};

// Styles de la page
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  background-color: #f7f7f7;
  color: #333;
  overflow-x: hidden;
`;

const HeroSection = styled(motion.section)`
  background: linear-gradient(180deg, #33ccff 0%, #0099cc 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3em;
  margin-bottom: 20px;
  color: #fff;
  font-weight: bold;
`;

const HeroText = styled(motion.p)`
  font-size: 1.5em;
  color: #fff;
  margin-bottom: 30px;
`;

const DisciplinesSection = styled(motion.section)`
  margin-top: 60px;
  padding: 40px 20px;
`;

const DisciplinesTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const DisciplinesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const DisciplineBlock = styled(motion.div)`
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const DisciplineImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const DisciplineTitle = styled(motion.h3)`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
`;

const DisciplineDescription = styled(motion.p)`
  font-size: 1.2em;
  color: #555;
`;

const SnowConditionsSection = styled(motion.section)`
  margin-top: 60px;
  padding: 40px 20px;
`;

const SnowConditionsTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const SnowConditionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SnowConditionItem = styled.li`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const TestimonialsSection = styled(motion.section)`
  margin-top: 60px;
  padding: 40px 20px;
`;

const TestimonialsTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const TestimonialBlock = styled(motion.div)`
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const TestimonialText = styled(motion.p)`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 10px;
`;

const TestimonialAuthor = styled(motion.p)`
  font-size: 1.2em;
  color: #333;
  font-weight: bold;
`;

// Export du composant
export default Skiing;
