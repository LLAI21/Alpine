// Import des dépendances nécessaires
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const Mountaineering = () => {
  const heroAnimation = useAnimation();
  const infoAnimation = useAnimation();
  const mapAnimation = useAnimation();
  const galleryAnimation = useAnimation();

  useEffect(() => {
    heroAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } });
    infoAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.2 } });
    mapAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.4 } });
    galleryAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.6 } });
  }, [heroAnimation, infoAnimation, mapAnimation, galleryAnimation]);

  return (
    <Container>
      <Header />
      <HeroSection animate={heroAnimation}>
        <HeroContent>
          <HeroTitle>Alpinisme Extrême</HeroTitle>
          <HeroText>
            Conquérez les sommets les plus élevés et explorez le monde de l'alpinisme extrême.
          </HeroText>
        </HeroContent>
      </HeroSection>

      <InfoSection animate={infoAnimation}>
        <InfoTitle>Informations sur l'Alpinisme</InfoTitle>
        <StyledInfoBlock>
          <StyledInfoText>
            L'alpinisme vous offre une aventure audacieuse. Apprenez les techniques d'escalade, découvrez les montagnes majestueuses et préparez-vous pour une expérience inoubliable.
          </StyledInfoText>
        </StyledInfoBlock>
      </InfoSection>

      <MapSection animate={mapAnimation}>
        <MapTitle>Montagnes à Explorer</MapTitle>
        <MapImage src="https://example.com/mountaineering-map.jpg" alt="Carte des Montagnes à Explorer" />
      </MapSection>

      <GallerySection animate={galleryAnimation}>
        <GalleryTitle>Galerie d'Alpinisme</GalleryTitle>
        <Gallery>
          <GalleryImage src="https://example.com/mountaineering-1.jpg" alt="Alpinisme 1" />
          <GalleryImage src="https://example.com/mountaineering-2.jpg" alt="Alpinisme 2" />
          <GalleryImage src="https://example.com/mountaineering-3.jpg" alt="Alpinisme 3" />
        </Gallery>
      </GallerySection>

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
  background: linear-gradient(180deg, #339966 0%, #004d40 100%);
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

const InfoSection = styled(motion.section)`
  margin-top: 60px;
  padding: 40px 20px;
`;

const InfoTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const StyledInfoBlock = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const StyledInfoText = styled(motion.p)`
  font-size: 1.2em;
  color: #555;
`;

const MapSection = styled(motion.section)`
  margin-top: 60px;
  padding: 40px 20px;
`;

const MapTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const MapImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const GallerySection = styled(motion.section)`
  margin-top: 60px;
  padding: 40px 20px;
`;

const GalleryTitle = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const GalleryImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

export default Mountaineering;
