import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsBag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        padding={"1rem"}
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
          <Image src="https://www.myglamm.com/images/shop.svg"></Image>
          <Text cursor={"pointer"}>MyGlamm store</Text>
        </HStack>
      </Flex>

      {/* ............................. Middle nav..................................... */}
      <Flex
        padding={".5rem"}
        px={"6rem"}
        justifyContent={"space-between"}
        border={"1px solid red"}
      >
        <HStack spacing="10rem">
          <Image
            onClick={() => navigate("/")}
            src="	https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg"
            cursor={"pointer"}
          />
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={
                <Image src="	https://www.myglamm.com/images/search.svg"></Image>
              }
            />
            <Input
              type="text"
              placeholder="Find Lipstick, Eyeliner, Makeup, Tutorial, etc"
              w={["10rem", "15rem", "20rem"]}
            />
          </InputGroup>
        </HStack>

        <HStack spacing={8}>
          <Icon as={BsBag} w={6} h={6} cursor="pointer" />
          <Icon as={FaRegUser} w={6} h={6} cursor="pointer" />
        </HStack>
      </Flex>

{/* ------------------------Category Navbar--------------------------------- */}


    </>
  );
};

export default Navbar;
