// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // Styles pour la page
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: 'url("/images/pokemon-background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#3d7dca', // Couleur blanche pour le texte
    },
    logo: {
      width: '400px',
      marginBottom: '20px',
    },
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '40px',
    },
    button: {
      padding: '15px 30px',
      fontSize: '20px',
      backgroundColor: '#ffcb05', // Jaune Pokémon
      color: '#3d7dca', // Bleu Pokémon
      textDecoration: 'none',
      borderRadius: '5px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#f2a500', // Jaune Pokémon foncé
    },
  };

  return (
    <div style={styles.container}>
      <img src="/images/pokemon-logo.png" alt="Pokémon Logo" style={styles.logo} />
      <h1 style={styles.title}>Bienvenue dans le Jeu Pokémon !</h1>
      <Link to="/team-builder" style={styles.button}>
        Commencer à construire votre équipe
      </Link>
    </div>
  );
};

export default LandingPage;

