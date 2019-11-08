import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { STARSHIP_QUERY } from '../../client/queries/starship-query';
import StarshipComponent from '../../components/starships/Starship-component';

const Starship = () => {
  const { starshipId } = useParams();
  const { data, loading, error } = useQuery(STARSHIP_QUERY, {
    variables: { starshipId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { starship } = data;

  return <StarshipComponent starship={starship} data={data}/>;
};

export default Starship;
