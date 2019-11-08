import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { CHARACTER_QUERY } from '../../client/queries/character-queries';
import CharacterDetailsComponent from '../../components/characters/Character-details-component';

const Character = () => {
  const { characterId } = useParams();

  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: { characterId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on getting character details</p>;

  const { person } = data;

  return <CharacterDetailsComponent character={person} />;
};

export default Character;
