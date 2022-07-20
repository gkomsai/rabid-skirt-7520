import { Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Flex
        padding={".5rem"}
        px={"6rem"}
        justifyContent={"space-between"}
        bg="#FEE8E8"
        border={"1px solid red"}
      >
        <HStack spacing="4">
          <Image src="https://www.myglamm.com/images/gift.svg"></Image>
          <Text cursor="pointer">Flat 199 store</Text>
          <Text cursor={"pointer"} color="orange">
            Shop Now
          </Text>
        </HStack>
        <HStack spacing={4}>
          <Image
            src="https://www.myglamm.com/images/shop.svg
"
          ></Image>
          <Text cursor={"pointer"}>MyGlamm store</Text>
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
