import React from 'react';
import { Box, Image } from 'rebass';
import { Tiles } from '@rebass/layout';
import RadarChartComponent from './Radar-chart-component';
import { InlineName, InlineValue } from '../common/InlineText';
import { HeadingH1, HeadingH2, HeadingH3 } from '../common/Headings';
import { CardDetails, BoxWrapper } from '../common/Containers';

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
      <BoxWrapper height="100vh">
        <HeadingH1 pt={[1, 2, 3]}>{name}</HeadingH1>
        <HeadingH2 pb={[1, 2, 3]}>({model})</HeadingH2>
        <hr width="100%" sx={theme => theme.lineColor} />

        <Tiles
          columns={[1, 2]}
          sx={theme => ({ backgroundColor: theme.background })}
        >
          <CardDetails>
            <HeadingH3 py={3}>{name}</HeadingH3>
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
          </CardDetails>
          <Box>
            <HeadingH2 py={3}>Compared to Starship Class Max</HeadingH2>
            <RadarChartComponent data={data} />
          </Box>
        </Tiles>
      </BoxWrapper>
    </>
  );
};

export default StarshipComponent;
