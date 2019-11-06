import React from 'react';
import { Heading, Image, Flex } from 'rebass';

const StarshipItem = ({ name, image }) => {
  return (
    <Flex
      bg="white"
      sx={{
        borderRadius: 10,
        justifyContent: 'center',
        itemsAlign: 'center',
      }}
    >
      <Image
        src={image}
        p={0}
        height="100%"
        width={1 / 5}
        sx={{
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      />

      <Heading
        fontSize={[2, 3, 4]}
        color="#4BD5EE"
        width={4 / 5}
        px={3}
        textAlign="center"
        verticalAlign="middle"
        py="3"
      >
        {name}
      </Heading>
    </Flex>
  );
};

export default StarshipItem;
