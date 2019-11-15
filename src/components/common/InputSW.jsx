import React from 'react';
import { Input } from '@rebass/forms';

const InputSW = props => {
  return (
    <Input
      {...props}
      m={3}
      width= {4/5}
      sx={theme => ({
        color: theme.inputFontColor,
        backgroundColor: theme.inputBackground,
        border: '1px solid',
        borderColor: theme.inputBorderColor,
        borderRadius: 10
      })}
    ></Input>
  );
};

export default InputSW;
