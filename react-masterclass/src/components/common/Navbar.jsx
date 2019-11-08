import React from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { Box, Image, Flex, Link, Button } from 'rebass';
import { Tiles } from '@rebass/layout';
import Logo from './Logo';
import icon from '../../style/images/emergency-exit-svgrepo-com.svg';

const Navbar = () => {
  const client = useApolloClient();

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log(client);
    client.cache.reset();
    client.writeData({ data: { authenticated: false } });
  };

  return (
    <Tiles
      columns={[1, 2]}
      p={3}
      flexDirection="row"
      justifyContent="flexEnd"
      fontSize={[12, 16, 18]}
      sx={theme => ({
        backgroundColor: theme.appBarBackground,
        color: theme.appBarFontColor,
        border: '1px solid',
        borderColor: theme.appBarBorderColor,
      })}
    >
      <Box width={1 / 3}>
        <Logo />
      </Box>
      <Flex justifyContent="flex-end" alignItems="center">
        <Link
          as={RouterLink}
          variant="nav"
          to={'/episodes'}
          fontWeight="bold"
          mx={3}
          sx={theme => ({
            color: theme.appBarFontColor,
          })}
        >
          EPISODES
        </Link>
        <Link
          as={RouterLink}
          variant="nav"
          to={'/characters'}
          fontWeight="bold"
          mx={3}
          sx={theme => ({
            color: theme.appBarFontColor,
          })}
        >
          CHARACTERS
        </Link>
        <Button onClick={handleLogout} sx={{ cursor: 'pointer' }}>
          <Image
            src={icon}
            width={20}
            mx={3}
            sx={theme => ({
              color: theme.appBarFontColor,
            })}
          />
        </Button>
      </Flex>
    </Tiles>
  );
};

export default Navbar;
