import React from 'react';
import { Button } from 'rebass';

const ButtonSW = props => {
  return (
    <Button
      {...props}
      p={3}
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
