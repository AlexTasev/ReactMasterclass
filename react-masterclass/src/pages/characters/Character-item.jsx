import React from 'react';
import { Heading, Image, Flex } from 'rebass';

const CharacterItem = ({ name, image }) => {
  if (!image) {
    image =
      'https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200';
  }

  return (
    <Flex
      alignItems="center"
      bg="white"
      sx={{
        borderRadius: 20,
        ':hover': {
          boxShadow: '20px 20px 20px grey',
        },
      }}
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

      <Heading
        fontSize={[1, 2, 3]}
        color="#4BD5EE"
        width={2 / 3}
        px={3}
        textAlign="center"
        py="3"
      >
        {name}
      </Heading>
    </Flex>
  );
};

export default CharacterItem;
