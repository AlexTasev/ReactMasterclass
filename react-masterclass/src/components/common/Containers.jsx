import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Card } from 'rebass';

export const LinkWrapper = props => {
  return (
    <Link
      {...props}
      as={RouterLink}
      variant="nav"
      sx={{
        borderRadius: 20,
        transition: 'transform 0.2s ease-in, box-shadow 0.2s ease-in',
        ':hover': {
          boxShadow: '20px 20px 20px rgba(0,0,0,0.125)',
          transform: 'scale(1.04)',
        },
      }}
    ></Link>
  );
};

export const BoxWrapper = props => {
  return (
    <Box
      {...props}
      width={[400, 600, 800, 1000]}
      height="100%"
      mx="auto"
      mt={[1, 2, 4]}
      pb={[1, 2, 3]}
    ></Box>
  );
};

export const CardDetails = props => {
  return (
    <Card
      {...props}
      width="1/2"
      sx={theme => ({
        backgroundColor: theme.cardBackground,
        border: '1px solid #E8EAED',
        borderRadius: 20,
      })}
      m={2}
      pb={3}
    ></Card>
  );
};
