// Import des dépendances nécessaires
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const Paragliding = () => {
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
          <HeroTitle>Randonnée en Parapente</HeroTitle>
          <HeroText>
            Découvrez les cieux et l'adrénaline du parapente avec nos aventures palpitantes.
          </HeroText>
        </HeroContent>
      </HeroSection>

      <InfoSection animate={infoAnimation}>
        <InfoTitle>Informations sur le Parapente</InfoTitle>
        <StyledInfoBlock>
          <StyledInfoText>
            Le parapente vous offre une expérience unique dans les airs. Apprenez les bases, découvrez les zones de vol populaires et préparez-vous pour une aventure inoubliable.
          </StyledInfoText>
        </StyledInfoBlock>
      </InfoSection>

      <MapSection animate={mapAnimation}>
        <MapTitle>Points de Vol</MapTitle>
        <MapImage src="https://www.cybershack.qc.ca/wp-content/uploads/2021/08/CYQB-CYUL_003.jpg" alt="Carte de Vol en Parapente" />
      </MapSection>

      <GallerySection animate={galleryAnimation}>
        <GalleryTitle>Galerie de Parapente</GalleryTitle>
        <Gallery>
          <center><GalleryImage src="https://www.k2parapente.com/medias/baptemes/v-g0017968-copie.webp?v=5.0" alt="Parapente 1" />
          <GalleryImage src="https://img.adrenactive.com/img/43/800_600/43-10260-bapteme-parapente-col-de-la-forclaz-800.jpg" alt="Parapente 2" />
          <GalleryImage src="https://www.moustiers.fr/sites/moustiers.fr/files/blog/2601/parapente_sports_aeriens_moustiers_verdon_alpes_haute_provence_vol_biplace_croc_n_vol.jpg" alt="Parapente 3" /></center>
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
  background: linear-gradient(180deg, #ff9900 0%, #e64d00 100%);
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

export default Paragliding;
