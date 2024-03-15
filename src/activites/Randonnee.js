// Import des dépendances nécessaires
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

// Définition du composant de la page Randonnée
const Hiking = () => {
  // Animation des éléments de la page
  const heroAnimation = useAnimation();
  const infoAnimation = useAnimation();
  const mapAnimation = useAnimation();
  const galleryAnimation = useAnimation();

  useEffect(() => {
    // Animation des éléments lors du chargement de la page
    heroAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } });
    infoAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.2 } });
    mapAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.4 } });
    galleryAnimation.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.6 } });
  }, [heroAnimation, infoAnimation, mapAnimation, galleryAnimation]);

  // Contenu de la page Randonnée
  return (
    <Container>
      <Header />

      <HeroSection animate={heroAnimation}>
        <HeroContent>
          <HeroTitle
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut', delay: 0.5 } }}
          >
            Randonnée en Montagne
          </HeroTitle>
          <HeroText
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut', delay: 0.7 } }}
          >
            Découvrez les sentiers pittoresques et explorez la beauté de la nature en randonnée.
          </HeroText>
        </HeroContent>
      </HeroSection>

      <InfoSection animate={infoAnimation}>
        <InfoTitle>Informations sur la Randonnée</InfoTitle>
        <StyledInfoBlock>
          <StyledInfoText
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut', delay: 0.7 } }}
          >
            La randonnée en montagne offre une expérience immersive au cœur de la nature. Explorez des sentiers de divers niveaux de difficulté, découvrez les équipements recommandés et choisissez la saison idéale pour votre aventure.

            Niveaux de difficulté : Choisissez parmi une gamme de sentiers, des promenades faciles aux randonnées plus difficiles en haute altitude.

            Équipement recommandé : Préparez-vous avec des chaussures confortables, des bâtons de randonnée et un sac à dos bien équipé.

            Meilleures saisons : Profitez de la floraison printanière, de l'été ensoleillé ou des couleurs automnales, chaque saison offre une expérience unique.
          </StyledInfoText>
        </StyledInfoBlock>
      </InfoSection>

      <MapSection animate={mapAnimation}>
  <MapTitle>Carte Interactive</MapTitle>
  {/* Intégrez ici une carte interactive avec des points d'intérêt */}
  {/* Assurez-vous de remplacer cette section par une carte réelle */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4053.7210920612965!2d6.042991031457754!3d45.11955684916553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478a6b06856c6cdb%3A0x9e63e54e3531c7ab!2sL&#39;Alpe%20d&#39;Huez%2C%2038750%20Huez!5e1!3m2!1sfr!2sfr!4v1707945320445!5m2!1sfr!2sfr"
    width="600"
    height="450"
    style={{ border: '0' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</MapSection>

      <GallerySection animate={galleryAnimation}>
        <GalleryTitle>Galerie de Randonnées Passées</GalleryTitle>
        <Gallery>
          {/* Ajoutez ici des images représentant des randonnées passées */}
          {/* Assurez-vous de remplacer les liens d'image par les liens réels vers vos images */}
          <GalleryImage src="https://www.randonnee-aveyron.fr/wp-content/uploads/2018/05/RR-Margeride-2014-004-1024x668.jpg" alt="Randonnée 1" />
          <GalleryImage src="https://1.bp.blogspot.com/-EPu6Tmndslk/XFn24HrjoiI/AAAAAAAAAQU/DHCm5cPETqYVccSxBdv2V3isuBmfWtGgACPcBGAYYCw/s2048/groupe%2Brandonne%25CC%2581e%2BcalanquesJPG.JPG" alt="Randonnée 2" />
          <GalleryImage src="https://cms.ffrandonnee.fr/data/SIEGE/images/randonneurs-groupe-ete-1170x650.jpg" alt="Randonnée 3" />
          <GalleryImage src="https://cms.ffrandonnee.fr/data/SIEGE/images/randonneurs-groupe-ete-1170x650.jpg" alt="Randonnée 3" />
          <GalleryImage src="https://cms.ffrandonnee.fr/data/SIEGE/images/randonneurs-groupe-ete-1170x650.jpg" alt="Randonnée 3" />
          <GalleryImage src="https://www.hillwalktours.com/wp-content/uploads/2018/11/Randonn%C3%A9e-en-groupe.jpeg" alt="Randonnée 3" />
        </Gallery>
      </GallerySection>

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

// Export du composant
export default Hiking;
