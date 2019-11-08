import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_EPISODES_QUERY } from '../../client/queries/episode-queries';
import EpisodesComponent from '../../components/episodes/Episodes-component';

const Episodes = () => {
  const { loading, error, data } = useQuery(ALL_EPISODES_QUERY, {
    variables: { first: 30 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on getting all episodes</p>;

  return <EpisodesComponent data={data}/>
};

export default Episodes;
