import React from 'react';
import { Box, Heading, Image, Card } from 'rebass';
import { Tiles } from '@rebass/layout';
import RadarChartComponent from './Radar-chart-component';
import { InlineName, InlineValue } from '../common/InlineText';
import { HeadingH1 } from '../common/Headings';

const StarshipComponent = ({
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
  data,
}) => {
  return (
    <>
      <HeadingH1>{name}</HeadingH1>
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
        width={[400, 600, 800, 1000, 1600]}
        height="100vh"
        mx="auto"
        mt={[1, 2, 4]}
        pb={5}
      >
        <Tiles
          columns={[1, 2]}
          sx={theme => ({ backgroundColor: theme.background })}
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
              <br />
              <InlineName>Class: </InlineName>
              <InlineValue>{starshipClass}</InlineValue>
              <br />
              <InlineName>Cost: </InlineName>
              <InlineValue>{cost} credits</InlineValue>
              <br />
              <InlineName>Crew: </InlineName>
              <InlineValue>{crew}</InlineValue>
              <br />
              <InlineName>Max Atmospheric Speed: </InlineName>
              <InlineValue>{maxAtmosphericSpeed}</InlineValue>
              <br />
              <InlineName>HyperdriveRating: </InlineName>
              <InlineValue>{hyperdriveRating}</InlineValue>
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
            <RadarChartComponent data={data} />
          </Box>
        </Tiles>
      </Box>
    </>
  );
};

export default StarshipComponent;
