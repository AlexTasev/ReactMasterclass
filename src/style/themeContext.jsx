import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import useTheme from './hooks/useTheme';
import { lightTheme, darkTheme } from './themes';

export const ThemeContext = createContext(null);
ThemeContext.displayName = 'ThemeContext';

export const CustomThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
