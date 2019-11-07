import React, {useContext} from 'react';
import { Box } from 'rebass';
import {ThemeContext} from '../../style/themeContext'
import './common.scss';

const Logo = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Box
      fontWeight="bold"
      fontFamily="LogoFont"
      color="#FFE300"
      onClick={toggleTheme}
    >
      SWAPP
    </Box>
  );
};

export default Logo;
