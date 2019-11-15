import React from 'react';
import { Image, Flex } from 'rebass';
import { HeadingH3 } from '../common/Headings';

const CharacterItemComponent = ({ name, image }) => {
  if (!image) {
    image =
      'https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200';
  }

  return (
    <Flex
      alignItems="center"
      sx={theme => ({
        backgroundColor: theme.cardBackground,
        borderRadius: 20,
        ':hover': {
          boxShadow: '20px 20px 20px theme.cardBackground',
        },
      })}
    >
      <Image
        src={image}
        alt={'character_image'}
        p={0}
        height="100%"
        width={1 / 3}
        sx={{
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      />
      <HeadingH3 mx="auto">{name}</HeadingH3>
    </Flex>
  );
};

export default CharacterItemComponent;
