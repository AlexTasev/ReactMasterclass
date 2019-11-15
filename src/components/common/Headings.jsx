import React from 'react';
import { Heading } from 'rebass';

export const HeadingH1 = props => {
  return (
    <Heading
      {...props}
      fontSize={[3, 4, 5]}
      mx="auto"
      fontFamily="StarWars"
      fontWeight="normal"
      textAlign="center"
      sx={theme => ({
        color: theme.primaryHeadingFontColor,
      })}
    />
  );
};

export const HeadingH2 = props => {
  return (
    <Heading
      {...props}
      textAlign="center"
      mx="auto"
      fontSize={[2, 3, 4]}
      fontFamily="StarWars"
      fontWeight="normal"
      sx={theme => ({ color: theme.secondaryHeadingFontColor })}
    />
  );
};

export const HeadingH3 = props => {
  return (
    <Heading
      {...props}
      textAlign="center"
      mx="auto"
      fontSize={[1, 2, 3]}
      fontFamily="StarWars"
      fontWeight="normal"
      sx={theme => ({ color: theme.secondaryHeadingFontColor })}
    />
  );
};
