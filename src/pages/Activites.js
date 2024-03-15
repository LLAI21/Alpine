import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import styled from 'styled-components';

const Activites = ({ utilisateurConnecte }) => {
  const [activites, setActivites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activiteSelectionnee, setActiviteSelectionnee] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/activites');
        setActivites(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des activités :', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectionActivite = (activite) => {
    setActiviteSelectionnee(activite);
  };

  return (
    <Container>
      <Header />
      <ActivitiesWrapper>
        <h2>Liste des Activités</h2>
        {loading ? (
          <p>Chargement en cours...</p>
        ) : (
          <ActivitiesList>
            {activites.map((activite) => (
              <ActivityItem key={activite.id} onClick={() => handleSelectionActivite(activite)}>
                <ActivityTitle>{activite.nom}</ActivityTitle>
              </ActivityItem>
            ))}
          </ActivitiesList>
        )}
        {activiteSelectionnee && (
          <ActiviteDetails>
            <h2>{activiteSelectionnee.nom}</h2>
            <p>{activiteSelectionnee.description}</p>
            <p>Niveau de difficulté : {activiteSelectionnee.niveau_difficulte}</p>
            {activiteSelectionnee.image_url && (
              <ActivityImage src={activiteSelectionnee.image_url} alt={activiteSelectionnee.nom} />
            )}
          </ActiviteDetails>
        )}
      </ActivitiesWrapper>
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

const ActivitiesWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ActivitiesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ActivityItem = styled.li`
  margin: 10px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ActivityTitle = styled.h3`
  margin: 0;
`;

const ActiviteDetails = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ActivityImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 15px;
  border-radius: 5px;
`;

export default Activites;
