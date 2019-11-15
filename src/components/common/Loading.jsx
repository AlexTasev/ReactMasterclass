import React from 'react';
import { BubbleSpinLoader } from 'react-css-loaders';
import { Box } from 'rebass';

const Loading = () => {
  const theme = localStorage.getItem('theme');
  let bubbleColor = '#4BD5EE';

  if (theme === 'dark') {
    bubbleColor = '#FFE300';
  }

  return (
    <Box
      width="100%"
      height="100%"
      m={0}
      sx={theme => ({ backgroundColor: theme.background })}
    >
      <BubbleSpinLoader color={bubbleColor} />
    </Box>
  );
};

export default Loading;
