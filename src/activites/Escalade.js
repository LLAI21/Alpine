// Import des dépendances nécessaires
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

// Définition du composant de la page Escalade
const Climbing = () => {
  // Animation des éléments de la page
  const heroAnimation = useAnimation();
  const introAnimation = useAnimation();
  const sitesAnimation = useAnimation();
  const videosAnimation = useAnimation();

  useEffect(() => {
    // Animation des éléments lors du chargement de la page
    heroAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } });
    introAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.2 } });
    sitesAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.4 } });
    videosAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.6 } });
  }, [heroAnimation, introAnimation, sitesAnimation, videosAnimation]);

  // Contenu de la page Escalade
  return (
    <Container>
      <Header />

      <HeroSection animate={heroAnimation}>
        <HeroContent>
          <HeroTitle
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut', delay: 0.5 } }}
          >
            Escalade en Montagne
          </HeroTitle>
          <HeroText
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut', delay: 0.7 } }}
          >
            Découvrez l'excitation de l'escalade en montagne et explorez des sites incroyables.
          </HeroText>
        </HeroContent>
      </HeroSection>

      <IntroSection animate={introAnimation}>
        <IntroTitle>Introduction à l'Escalade</IntroTitle>
        <IntroText
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut', delay: 0.7 } }}
        >
          L'escalade en montagne est une aventure passionnante. Pour les débutants, il est essentiel de comprendre les conseils de sécurité, de maîtriser les techniques de base et de s'équiper correctement. Explorez notre guide pour commencer votre voyage d'escalade en toute sécurité.
        </IntroText>
      </IntroSection>

      <SitesSection animate={sitesAnimation}>
        <SitesTitle>Sites d'Escalade Renommés</SitesTitle>
        <SitesList>
          {/* Ajoutez ici une liste de sites d'escalade avec des niveaux de difficulté */}
          <SiteItem>https://escahool.fr - Niveau Facile</SiteItem>
          <SiteItem>https://escalademoyen.com - Niveau Moyen</SiteItem>
          <SiteItem>https://monteurmontagne - Niveau Difficile</SiteItem>
        </SitesList>
      </SitesSection>

      <VideosSection animate={videosAnimation}>
  <VideosTitle>Vidéos d'Escalade</VideosTitle>
  <VideosGrid>
    <VideoItem>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=WRDzvFuf-WQ&pp=ygUXdmlkZW8gZXNjYWxhZGUgbW9udGFnbmU%3D"
        width="100%"
        height="100%"
        controls={true}
      />
    </VideoItem>
    <VideoItem>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=c8u63-5rCz8"
        width="100%"
        height="100%"
        controls={true}
      />
    </VideoItem>
    <VideoItem>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=redbullvideo"
        width="100%"
        height="100%"
        controls={true}
      />
    </VideoItem>
  </VideosGrid>
</VideosSection>

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

const IntroSection = styled(motion.section)`
  margin-top: 60px;
  padding: 40px 20px;
`;

const IntroTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const IntroText = styled(motion.p)`
  font-size: 1.2em;
  color: #555;
`;

const SitesSection = styled(motion.section)`
  margin-top: 60px;
  padding: 40px 20px;
`;

const SitesTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const SitesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SiteItem = styled.li`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const VideosSection = styled(motion.section)`
  margin-top: 60px;
  padding: 40px 20px;
`;

const VideosTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const VideoItem = styled.iframe`
  max-width: 100%;
  border-radius: 10px;
`;

// Export du composant
export default Climbing;
