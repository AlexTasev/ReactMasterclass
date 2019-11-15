import React from 'react';
import { Image, Flex, Box } from 'rebass';
import { HeadingH3 } from '../common/Headings';

const StarshipItemComponent = ({ name, image }) => {
  return (
    <Box my={3}>
      <Flex
        sx={theme => ({
          backgroundColor: theme.cardBackground,
          border: '1px solid #E8EAED',
          borderRadius: 20,
          justifyContent: 'center',
          itemsAlign: 'center',
          ':hover': {
            boxShadow: '20px 20px 20px theme.cardBackground',
          },
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

        <HeadingH3 my="auto">{name}</HeadingH3>
      </Flex>
    </Box>
  );
};

export default StarshipItemComponent;
