import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsBag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../links/links";

let activeStyle = {
  color: "red",
};

let baseStyle = {
  textDecoration: "none",
  color: "black",
};

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        padding={"1rem"}
        px={"6rem"}
        justifyContent={"space-between"}
        bg="#FEE8E8"
       
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
     
      <HStack px={"8rem"} spacing={10}>
        {links.map((el) => (
          <Box key={el.title}>
            <NavLink
              to={el.to}
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            >
              {el.title}
            </NavLink>
          </Box>
        ))}
      </HStack>
    </>
  );
};

export default Navbar;
