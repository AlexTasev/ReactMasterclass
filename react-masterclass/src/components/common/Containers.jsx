import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Image, Flex, Link } from 'rebass';

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
