import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Box, Heading, Text, Image, Card, Link } from 'rebass';
import { Tiles } from '@rebass/layout';
import StarshipItem from '../starships/Starship-item';
import { CHARACTER_QUERY } from '../../client/queries/character-queries';

const Character = () => {
  const { characterId } = useParams();

  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: { characterId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on getting character details</p>;

  const {
    person: { name, image, height, mass, species, homeworld, starships },
  } = data;
  return (
    <Box width={[400, 600, 800, 1000]} height="100%" mx="auto" my={[1, 2, 4]}>
      <Heading>{name}</Heading>
      <Tiles columns={[1, 2]} backgroundColor="#E8EAED">
        <Card width="1/2" sx={{ borderRadius: 20 }} >
          <Heading textAlign="center" pt={2}>{name}</Heading>
          <Box p={4}>
            <Image src={image} mb={3} />
            <Text>Height: {height}</Text>
            <Text>Weight: {mass}</Text>
            <Text>Species: {species.name}</Text>
            <Text>Homeworld: {homeworld.name}</Text>
          </Box>
        </Card>
        <Box p={3}>
          <Heading>Piloted Starships</Heading>
          <Box p={3}>
            {starships.edges.map(({ node: starship }) => (
              <Link
                as={RouterLink}
                variant="nav"
                key={starship.id}
                to={`/starships/${starship.id}`}
                id={starship.id}
              >
                <StarshipItem
                  key={starship.id}
                  id={starship.id}
                  name={starship.name}
                  image={starship.image}
                />
              </Link>
            ))}
          </Box>
        </Box>
      </Tiles>
    </Box>
  );
};

export default Character;
