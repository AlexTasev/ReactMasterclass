import React from 'react';
import { Button } from 'rebass';

const ButtonSW = props => {
  return (
    <Button
      {...props}
      px={[1, 2, 3]}
      py={[1, 2]}
      fontSize={[1, 2, 3]}
      sx={theme => ({
        color: theme.buttonFontColor,
        backgroundColor: theme.buttonBackground,
        ':hover': {
          backgroundColor: 'green',
        },
        cursor: 'pointer',
        fontWeight: '900',
        borderRadius: 10,
      })}
    ></Button>
  );
};

export default ButtonSW;
