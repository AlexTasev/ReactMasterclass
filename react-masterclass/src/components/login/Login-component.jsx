import React, { useState } from 'react';
import { Box, Flex } from 'rebass';
import Logo from '../common/Logo';
import ButtonSW from '../common/ButtonSW';
import InputSW from '../common/InputSW';

const LoginComponent = ({ login }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  let credentialsError = false;

  const handleSubmit = event => {
    event.preventDefault();

    if (userEmail && userPassword) {
      login({ variables: { email: userEmail, password: userPassword } });
    } else {
      credentialsError = true;
    }
  };

  return (
    <Box width="100%" pt={[3, 4, 5]}>
      <Box
        backgroundColor="black"
        width={[400, 600, 800]}
        height="100%"
        mx="auto"
        sx={{ borderRadius: 20 }}
        pb={[2, 3, 4]}
      >
        <Box fontSize={[4, 5, 6, 7, 8]}>
          <Logo fontSize={[8, 9, 10]} mx="auto" textAlign="center" />
        </Box>
        {credentialsError && <Box>Invalid credentials!</Box>}
        <Box
          as="form"
          onSubmit={handleSubmit}
          mx="auto"
          sx={theme => ({
            backgroundColor: theme.cardBackground,
            borderRadius: 20,
            width: '80%',
          })}
        >
          {' '}
          <Flex
            flexDirection="column"
            justifyContent="spaceBetween"
            alignItems="center"
          >
            <InputSW
              type="email"
              name="email"
              value={userEmail}
              placeholder="email"
              onChange={e => setUserEmail(e.target.value)}
            />
            <InputSW
              type="password"
              name="password"
              value={userPassword}
              placeholder="password"
              onChange={e => setUserPassword(e.target.value)}
            />
            <Box px="auto">
              <ButtonSW type="submit" mb={3}>
                Login
              </ButtonSW>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComponent;
