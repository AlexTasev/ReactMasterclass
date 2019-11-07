import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Box, Heading, Text, Image, Card } from 'rebass';
import { Tiles } from '@rebass/layout';
import { STARSHIP_QUERY } from '../../client/queries/starship-query';
import Radar from './Radar-chart';

const Starship = () => {
  const { starshipId } = useParams();
  const { data, loading, error } = useQuery(STARSHIP_QUERY, {
    variables: { starshipId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const {
    starship: {
      name,
      model,
      image,
      starshipClass,
      cost,
      maxAtmosphericSpeed,
      hyperdriveRating,
      crew,
    },
  } = data;

  return (
    <>
      <Heading>{name}</Heading>
      <Heading>({model})</Heading>

      <Tiles columns={[1, 2]} backgroundColor="#E8EAED">
        <Card width="1/2">
          <Heading>{name}</Heading>
          <Image src={image} width="1/3" />
          <Text>Class: {starshipClass}</Text>
          <Text>Cost: {cost} credits</Text>
          <Text>Crew: {crew}</Text>
          <Text>Max Atmospheric Speed: {maxAtmosphericSpeed}</Text>
          <Text>HyperdriveRating: {hyperdriveRating}</Text>
        </Card>

        <Box>
          <Heading>Compared to Starship Class Max</Heading>
          <Radar data={data} />
        </Box>
      </Tiles>
    </>
  );
};

export default Starship;
