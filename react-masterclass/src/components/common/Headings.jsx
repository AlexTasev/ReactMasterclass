import React from 'react';
import { Heading } from 'rebass';

export const HeadingH1 = props => {
  return (
    <Heading
      {...props}
      p={[2, 3, 4]}
      fontSize={[3, 4, 5, 6]}
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
      p={[1, 2, 3]}
      textAlign="center"
      fontSize={[2, 3, 4, 5]}
      fontFamily="StarWars"
      fontWeight="normal"
      sx={theme => ({ color: theme.secondaryHeadingFontColor })}
    />
  );
};
