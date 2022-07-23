import { Box, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

import { subCat } from "../links/links";
import bgVideo from "../video/bgVideo.mp4";
import play from "../assets/play.png"

const Home = () => {
  return (
    <Box>
      <Box mb="1rem">
        <Carousel />
      </Box>
      <Box w={"80vw"} m="auto" >
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
          <Box textAlign={"center"}>
            <Text
              fontSize={20}
              textColor="pink.800"
              textDecoration={"underline"}
              fontWeight="bold"
            >
              SHOP FROM CATEGORIES
            </Text>
            <HStack spacing="4rem">
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

      <Box className="video" pos={"relative"}  >
        <video width="100%" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </video>

        <Flex className="content"  >
        <Heading mb="2rem" > BRAND STORY</Heading>
        <Text>
          Backed by one of Europe's largest natural beauty companies, MyGlamm
          collaborated with global experts and makeup artists to bring about
          exciting innovation in makeup to accomplish our single, focused goal
          make looking glamorous effortless! Know More
        </Text>
        <Box mt="1rem" >
          <Image cursor={"pointer"}  src={play} alt="" />  
        </Box>
      </Flex>

      </Box>



    </Box>
  );
};

export default Home;
