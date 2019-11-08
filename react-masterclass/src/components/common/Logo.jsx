import React, { useContext } from 'react';
import { Box } from 'rebass';
import { ThemeContext } from '../../style/themeContext';

const Logo = props => {
  const { toggleTheme } = useContext(ThemeContext);
  
  return (
    <Box
      {...props}
      fontWeight="bold"
      fontFamily="StarWars"
      fontSize="2em"
      color="#FFE300"
      sx={{ cursor: 'pointer', ':hover': { color: '#4BD5EE' } }}
      onClick={toggleTheme}
    >
      SWAPP
    </Box>
  );
};

export default Logo;
