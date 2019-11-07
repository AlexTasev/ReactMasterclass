import React from 'react';
import { Heading, Image, Flex, Box } from 'rebass';

const StarshipItem = ({ name, image }) => {
  return (
    <Box my={3} >
      <Flex
        sx={theme => ({
          backgroundColor: theme.cardBackground,
          border: '1px solid #E8EAED',
          borderRadius: 20,
          justifyContent: 'center',
          itemsAlign: 'center',
        })}
      >
        <Image
          src={image}
          p={0}
          height="100%"
          width={1 / 5}
          sx={{
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        />

        <Heading
          fontSize={[1, 2, 3]}
          fontFamily="StarWars"
          fontWeight="normal"
          width={4 / 5}
          px={3}
          textAlign="center"
          verticalAlign="middle"
          my="auto"
          sx={theme => ({
            color: theme.primaryHeadingFontColor,
          })}
        >
          {name}
        </Heading>
      </Flex>
    </Box>
  );
};

export default StarshipItem;
