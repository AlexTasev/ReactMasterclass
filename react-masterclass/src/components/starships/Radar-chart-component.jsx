import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { STATS_QUERY } from '../../client/queries/starship-query';

const RadarChartComponent = ({ data }) => {
  const { data: stats, loading, error } = useQuery(STATS_QUERY, {
    skip: !data || !data.starship || !data.starship.starshipClass,
    variables: {
      starshipClass:
        data && data.starship && data.starship.starshipClass
          ? data.starship.starshipClass
          : null,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(stats);

  return <div></div>;
};

export default RadarChartComponent;
