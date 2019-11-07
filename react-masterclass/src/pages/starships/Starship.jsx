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
      <Heading
        mt={4}
        textAlign="center"
        fontSize={[3, 4, 5]}
        fontFamily="StarWars"
        fontWeight="normal"
        sx={theme => ({ color: theme.primaryHeadingFontColor })}
      >
        {name}
      </Heading>
      <Heading
        textAlign="center"
        fontSize={[2, 3, 4]}
        fontFamily="StarWars"
        fontWeight="normal"
        sx={theme => ({ color: theme.secondaryHeadingFontColor })}
      >
        ({model})
      </Heading>
      <Box
        width={[400, 600, 800, 1000]}
        height="100%"
        mx="auto"
        mt={[1, 2, 4]}
        pb={5}
      >
        <Tiles
          columns={[1, 2]}
          sx={theme => ({ backgroundColor: theme.background })}
          mb={4}
        >
          <Card
            sx={theme => ({
              backgroundColor: theme.cardBackground,
              border: '1px solid #E8EAED',
              borderRadius: 20,
            })}
            width="1/2"
            mr={3}
          >
            <Heading
              py={3}
              textAlign="center"
              fontSize={[1, 2, 3]}
              fontFamily="StarWars"
              fontWeight="normal"
              sx={theme => ({ color: theme.primaryHeadingFontColor })}
            >
              {name}
            </Heading>
            <Box px={4} pb={3}>
              <Image src={image} width="1/3" />
              <br/>
              <Text
                pt={3}
                display="inline"
                sx={theme => ({
                  color: theme.propName,
                })}
              >
                Class:{' '}
              </Text>
              <Text
                pt={3}
                display="inline"
                sx={theme => ({
                  color: theme.propValue,
                })}
              >
                {starshipClass}
              </Text>
              <br />
              <Text
                pt={3}
                display="inline"
                sx={theme => ({
                  color: theme.propName,
                })}
              >
                Cost:{' '}
              </Text>
              <Text
                pt={3}
                display="inline"
                sx={theme => ({
                  color: theme.propValue,
                })}
              >
                {cost} credits
              </Text>
              <br />
              <Text
                pt={3}
                display="inline"
                sx={theme => ({
                  color: theme.propName,
                })}
              >
                Crew:{' '}
              </Text>
              <Text
                pt={3}
                display="inline"
                sx={theme => ({
                  color: theme.propValue,
                })}
              >
                {crew}
              </Text>
              <br />
              <Text
                pt={3}
                display="inline"
                sx={theme => ({
                  color: theme.propName,
                })}
              >
                Max Atmospheric Speed:{' '}
              </Text>
              <Text
                pt={3}
                display="inline"
                sx={theme => ({
                  color: theme.propValue,
                })}
              >
                {maxAtmosphericSpeed}
              </Text>
              <br />
              <Text
                pt={3}
                display="inline"
                sx={theme => ({
                  color: theme.propName,
                })}
              >
                HyperdriveRating:{' '}
              </Text>
              <Text
                pt={3}
                display="inline"
                sx={theme => ({
                  color: theme.propValue,
                })}
              >
                {hyperdriveRating}
              </Text>
            </Box>
          </Card>
          <Box>
            <Heading
              textAlign="center"
              fontSize={[1, 2, 3]}
              fontFamily="StarWars"
              fontWeight="normal"
              sx={theme => ({ color: theme.secondaryHeadingFontColor })}
            >
              Compared to Starship Class Max
            </Heading>
            <Radar data={data} />
          </Box>
        </Tiles>
      </Box>
    </>
  );
};

export default Starship;
