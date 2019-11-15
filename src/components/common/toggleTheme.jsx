import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Logo } from './Logo';
import { ThemeContext } from '../../style/themeContext';

const ThemeToggle = ({ children }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return <Logo onClick={toggleTheme}> {children} </Logo>;
};

ThemeToggle.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ThemeToggle;
