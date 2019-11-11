import React from 'react';
import { Text } from 'rebass';

export const InlineName = props => {
  return (
    <Text
      {...props}
      pt={3}
      display="inline"
      sx={theme => ({
        color: theme.propName,
      })}
    ></Text>
  );
};

export const InlineValue = props => {
    return (
      <Text
        {...props}
        pt={3}
        display="inline"
        sx={theme => ({
          color: theme.propValue,
        })}
      ></Text>
    );
  };
