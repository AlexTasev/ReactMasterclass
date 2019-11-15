import React, { useState } from 'react';
import { Box, Flex } from 'rebass';
import Logo from '../common/Logo';
import ButtonSW from '../common/ButtonSW';
import InputSW from '../common/InputSW';
import { BoxWrapper } from '../common/Containers';

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
    <BoxWrapper width="100%" p={0}>
      <Box
        backgroundColor="black"
        width="80%"
        height="100%"
        mx="auto"
        sx={{ borderRadius: 20 }}
      >
        <Box fontSize={[4, 5, 6, 7, 8]}>
          <Logo fontSize={[8, 9, 10]} mx="auto" textAlign="center" />
        </Box>
        {credentialsError && <Box>Invalid credentials!</Box>}
        <Box
          as="form"
          onSubmit={handleSubmit}
          mx="auto"
          my={5}
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
              <ButtonSW type="submit" textAlign="right" mb={3}>
                Login
              </ButtonSW>
            </Box>
          </Flex>
        </Box>
      </Box>
    </BoxWrapper>
  );
};

export default LoginComponent;
