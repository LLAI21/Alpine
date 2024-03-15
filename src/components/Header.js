import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header
      style={{
        textAlign: 'center',
        padding: '20px',
        background: '#fff', // Ajout d'une couleur de fond
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Ajout d'une ombre légère
      }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', // Centrer verticalement les éléments
          }}
        >
          <NavItem to="/">Accueil</NavItem>
          <Separator /> {/* Ajout d'un séparateur */}
          <NavItem to="/Randonnee">Randonnée</NavItem>
          <Separator />
          <NavItem to="/Ski">Ski</NavItem>
          <Separator />
          <NavItem to="/Parapente">Parapente</NavItem>
          <Separator />
          <NavItem to="/Escalade">Escalade</NavItem>
          <Separator />
          <NavItem to="/Rafting">Rafting</NavItem>
          <Separator />
          <NavItem to="/Alpinisme">Alpinisme</NavItem>
          <Separator />
          <NavItem to="/Contact">Contact</NavItem>
          <Separator />
          <NavItem to="/Activites">Activités</NavItem>
          <Separator />
          <NavItem to="/Connexion">Connexion</NavItem>
          <Separator />
          <NavItem to="/Inscription">Inscription</NavItem>
        </ul>
      </nav>
    </motion.header>
  );
};

// Composant pour le séparateur
const Separator = () => {
  return (
    <div
      style={{
        width: '2px',
        height: '20px',
        background: '#ccc', // Couleur du séparateur
        margin: '0 10px', // Marge autour du séparateur
      }}
    />
  );
};

const NavItem = ({ to, children }) => {
  return (
    <motion.li
      style={{
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={to} style={{ textDecoration: 'none', color: '#333' }}>
        {children}
      </Link>
    </motion.li>
  );
};

export default Header;
