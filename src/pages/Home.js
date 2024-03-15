import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const heroAnimation = useAnimation();
  const aboutAnimation = useAnimation();
  const featuredAnimation = useAnimation();

  useEffect(() => {
    heroAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } });
    aboutAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut", delay: 0.2 } });
    featuredAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut", delay: 0.4 } });
  }, [heroAnimation, aboutAnimation, featuredAnimation]);

  const handleDiscoverClick = () => {
    // Redirigez l'utilisateur vers la page de connexion
    navigate('/connexion');
  };

  return (
    <Container>
      <Header />

      <HeroSection animate={heroAnimation}>
        <HeroContent>
          <HeroTitle
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut", delay: 0.5 } }}
          >
            Bienvenue sur Aventures Alpines
          </HeroTitle>
          <HeroText
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut", delay: 0.7 } }}
          >
            Explorez le monde des sports de montagne et de l'exploration en altitude.
          </HeroText>
          <HeroButton whileHover={{ scale: 1.1 }} onClick={handleDiscoverClick}>
            Découvrir
          </HeroButton>
        </HeroContent>
      </HeroSection>

      <ActivitiesSection animate={featuredAnimation}>
        <SectionTitle
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut", delay: 0.6 } }}
        >
          Activités Populaires
        </SectionTitle>

        <ActivitiesGrid>

  <ActivityItem whileHover={{ scale: 1.1 }}>
    <ActivityImage src="https://www.assurance-prevention.fr/sites/default/files/social_share/422-benefices-alpinismeRS.jpg" alt="Alpinisme" />
    <ActivityTitle>Alpinisme</ActivityTitle>
    <Link to="/alpinisme">
      <ActivityButton>Explorer</ActivityButton>
    </Link>

  </ActivityItem>
    <ActivityItem whileHover={{ scale: 1.1 }}>
    <ActivityImage src="https://conseilsante.cliniquecmi.com/wp-content/uploads/2022/05/bienfait-randonnee-conseil-sante.jpg" alt="Randonnée" />
    <ActivityTitle>Randonnée</ActivityTitle>
    <Link to="/Randonnee">
      <ActivityButton>Explorer</ActivityButton>
    </Link>

  </ActivityItem>
  <ActivityItem whileHover={{ scale: 1.1 }}>
    <ActivityImage src="https://www.france-montagnes.com/sites/default/files/activite/patrice_schreyer1.jpg" alt="Parapente" />
    <ActivityTitle>Parapente</ActivityTitle>
    <Link to="/Parapente">
      <ActivityButton>Explorer</ActivityButton>
    </Link>
  </ActivityItem>

  <ActivityItem whileHover={{ scale: 1.1 }}>
    <ActivityImage src="https://static.actu.fr/uploads/2019/11/Ski-AdobeStock_234163969.jpeg" alt="Ski" />
    <ActivityTitle>Ski</ActivityTitle>
    <Link to="/Ski">
      <ActivityButton>Explorer</ActivityButton>
    </Link>
  </ActivityItem>

  <ActivityItem whileHover={{ scale: 1.1 }}>
    <ActivityImage src="https://radiomontblanc.fr/photos/articles/vignettes/faire-pratiquer-escalade-sport-decouvrir-montagne_28151.jpg" alt="Escalade" />
    <ActivityTitle>Escalade</ActivityTitle>
    <Link to="/Escalade">
      <ActivityButton>Explorer</ActivityButton>
    </Link>
  </ActivityItem>

  <ActivityItem whileHover={{ scale: 1.1 }}>
    <ActivityImage src="https://www.isere-tourisme.com/sites/default/files/sitra/5033640_10578594.jpg" alt="Rafting" />
    <ActivityTitle>Rafting</ActivityTitle>
    <Link to="/Rafting">
      <ActivityButton>Explorer</ActivityButton>
    </Link>
  </ActivityItem>

        </ActivitiesGrid>

      </ActivitiesSection>

      <Footer />

    </Container>
  );
};

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  background-color: #f7f7f7;
  color: #333;
  overflow-x: hidden;
`;

const HeroSection = styled(motion.section)`
  background: linear-gradient(180deg, #0066cc 0%, #004080 100%);
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

const HeroButton = styled(motion.button)`
  background-color: #fff;
  color: #0066cc;
  font-size: 1.2em;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0066cc;
    color: #fff;
  }
`;

const ActivitiesSection = styled(motion.section)`
  margin-top: 60px;
  padding: 40px 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const ActivityItem = styled(motion.div)`
  background-color: #fff;
  color: #0066cc;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ActivityImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const ActivityTitle = styled(motion.h3)`
  font-size: 2em;
  margin-bottom: 15px;
  font-weight: bold;
  color: #333;
`;

const ActivityButton = styled(motion.button)`
  background-color: #0066cc;
  color: #fff;
  font-size: 1.2em;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fff;
    color: #0066cc;
  }
`;

export default Home;
