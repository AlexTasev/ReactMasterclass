import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Heading, Link, Image, Flex, Box } from "rebass";
import { Tiles } from "@rebass/layout";

const CardItem = ({ name, image }) => {
  return (
    <Flex
      bg="white"
      height="20"
      sx={{
        borderRadius: 10,
        justifyContent: "center",
        itemsAlign: "center"
      }}
    >
      <Image
        src={image}
        p={0}
        height="100%"
        width={1 / 3}
        sx={{
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10
        }}
      />

      <Heading
        fontSize={[2, 3, 4]}
        color="#4BD5EE"
        width={2 / 3}
        px={3}
        textAlign="center"
        verticalAlign="middle"
        py="3"
      >
        {name}
      </Heading>
    </Flex>
  );
};

export default CardItem;
