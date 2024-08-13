import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography, Snackbar } from '@mui/material';

const TeamBuilder = () => {
  const [pokemons, setPokemons] = useState([]);
  const [team, setTeam] = useState([]);
  const [selectedTeamPokemon, setSelectedTeamPokemon] = useState(null);
  const [selectedAvailablePokemon, setSelectedAvailablePokemon] = useState(null);
  const [combatResult, setCombatResult] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        const fetches = data.results.map(pokemon =>
          fetch(pokemon.url).then(response => response.json())
        );
        Promise.all(fetches).then(fullData => setPokemons(fullData));
      });
  }, []);

  const addToTeam = (pokemon) => {
    if (team.length < 6) {
      setTeam([...team, pokemon]);
      setSnackbarOpen(true);
    } else {
      alert('Votre équipe est déjà complète!');
    }
  };

  const removeFromTeam = (indexToRemove) => {
    setTeam(team.filter((_, index) => index !== indexToRemove));
  };

  const handleCombat = () => {
    if (!selectedTeamPokemon || !selectedAvailablePokemon) {
      alert('Sélectionnez un Pokémon des deux côtés pour lancer le combat!');
      return;
    }

    const teamPokemonStats = selectedTeamPokemon.stats.find(stat => stat.stat.name === 'hp').base_stat;
    const availablePokemonStats = selectedAvailablePokemon.stats.find(stat => stat.stat.name === 'hp').base_stat;

    if (teamPokemonStats > availablePokemonStats) {
      setCombatResult(`Votre Pokémon ${selectedTeamPokemon.name} a gagné le combat contre ${selectedAvailablePokemon.name}!`);
    } else if (teamPokemonStats < availablePokemonStats) {
      setCombatResult(`Votre Pokémon ${selectedTeamPokemon.name} a perdu le combat contre ${selectedAvailablePokemon.name}.`);
    } else {
      setCombatResult(`Le combat entre ${selectedTeamPokemon.name} et ${selectedAvailablePokemon.name} est un match nul.`);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#3d7dca', // Bleu Pokémon
      minHeight: '100vh',
    },
    logo: {
      width: '300px',
      marginBottom: '20px',
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '1200px',
      padding: '20px',
      backgroundColor: '#1a5ab7', // Bleu Pokémon plus foncé
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    card: {
      margin: '10px',
      width: '180px',
      cursor: 'pointer',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '3px solid #ffcb05', // Contours jaunes Pokémon
    },
    cardSelected: {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(255, 215, 0, 0.5)',
      border: '3px solid #ffcb05', // Contours jaunes Pokémon
    },
    buttonPrimary: {
      backgroundColor: '#ffcb05',
      color: '#3d7dca',
      '&:hover': {
        backgroundColor: '#f2a500',
      },
      padding: '10px 20px',
      borderRadius: '12px',
    },
    buttonSecondary: {
      backgroundColor: '#3d7dca',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#1a5ab7',
      },
      padding: '10px 20px',
      borderRadius: '12px',
    },
    teamSection: {
      flex: 1,
      paddingRight: '20px',
      color: '#ffffff',
    },
    combatSection: {
      flex: 1,
      paddingLeft: '20px',
      color: '#ffffff',
    },
    allPokemonsSection: {
      width: '100%',
      color: '#ffffff',
      marginTop: '30px',
    },
  };

  return (
    <div style={styles.container}>
      <img src="/images/pokemon-logo.png" alt="Pokémon Logo" style={styles.logo} />
      <div style={{ flex: 2, paddingLeft: '200px', paddingRight: '200px', color: '#ffffff' }}>
        <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Créez d'abord votre équipe en ajoutant des Pokémon à partir des cartes ci-dessous. Ensuite, sélectionnez un Pokémon de votre équipe et un Pokémon de l'équipe adverse pour lancer le combat.
        </Typography>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.teamSection}>
          <Typography variant="h3" gutterBottom>
            Votre équipe ({team.length} Pokémon)
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {team.map((pokemon, index) => (
              <Card
                key={index}
                style={{ ...styles.card, ...(selectedTeamPokemon === pokemon ? styles.cardSelected : {}) }}
                onClick={() => setSelectedTeamPokemon(pokemon)}
              >
                <CardContent>
                  <Typography variant="h6">{pokemon.name}</Typography>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '100px' }} />
                  <Typography variant="body2">Types: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</Typography>
                  <Typography variant="body2">PV: {pokemon.stats[0].base_stat}</Typography>
                  <Typography variant="body2">Compétences: 
                    {pokemon.moves.slice(0, 4).map(moveInfo => moveInfo.move.name).join(', ')}
                  </Typography>
                  <Button variant="contained" onClick={() => removeFromTeam(index)} style={styles.buttonSecondary}>
                    Retirer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div style={styles.combatSection}>
          <Typography variant="h3" gutterBottom>
            Lancer un Combat
          </Typography>
          <Button variant="contained" color="success" onClick={handleCombat} style={styles.buttonPrimary}>
            Lancer le Combat
          </Button>
          {combatResult && (
            <Typography variant="h5" style={{ marginTop: '20px', color: '#ffcb05' }}>
              {combatResult}
            </Typography>
          )}
        </div>
      </div>

      <div style={styles.allPokemonsSection}>
        <Typography variant="h3" gutterBottom>
          Tous les Pokémon
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {pokemons.map((pokemon, index) => (
            <Card
              key={index}
              style={{ ...styles.card, ...(selectedAvailablePokemon === pokemon ? styles.cardSelected : {}) }}
              onClick={() => setSelectedAvailablePokemon(pokemon)}
            >
              <CardContent>
                <Typography variant="h6">{pokemon.name}</Typography>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '100px' }} />
                <Typography variant="body2">Types: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</Typography>
                <Typography variant="body2">PV: {pokemon.stats[0].base_stat}</Typography>
                <Button variant="contained" color="primary" onClick={() => addToTeam(pokemon)} style={styles.buttonPrimary}>
                  Ajouter
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Pokémon ajouté à votre équipe !"
      />
    </div>
  );
};

export default TeamBuilder;
