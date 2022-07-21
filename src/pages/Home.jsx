import {
  border,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { subCat } from "../links/links";

const Home = () => {
  return (
    <Box>
      <Box>
        <Carousel />
      </Box>
      <Box w="80%" m="auto">
        <VStack spacing="1rem">
          {" "}
          <Box mt="-10rem">
            <Image src="https://files.myglamm.com/site-images/original/proposition-banner-2240x614_1.jpg" />
          </Box>
          <Box>
            <Image src="https://files.myglamm.com/site-images/original/1920x527-(6).jpg" />
          </Box>
          <Box>
            <Image src="https://files.myglamm.com/site-images/original/2240x6140-cta.jpg" />
          </Box>
          <Box textAlign={"center"} >
            <Text
              fontSize={20}
            textColor="pink.800"
        textDecoration={"underline"}
              fontWeight="bold"
            >
              SHOP FROM CATEGORIES
            </Text>
            <HStack spacing="40px">
              {subCat.map((el) => (
                <Box key={el.title}>
                  <Link to={el.to}>
                    {" "}
                    <Image src={el.img} alt="" />{" "}
                  </Link>
                  <Text fontWeight="bold"> {el.title}</Text>
                </Box>
              ))}
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
