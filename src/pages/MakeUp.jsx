import { Box,  Heading, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const MakeUp = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await axios.get(`?product_category=lipstick`);
    console.log(res.data);

    setData([...data, ...res.data]);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box w="90vw" margin={"auto"} mt="14rem" >
      <Heading
        textAlign={"center"}
        m="4rem"
        textShadow="1px 1px 2px green, 0 0 25px pink, 0 0 25px orange"
      >
        MAKEUP
      </Heading>
      <SimpleGrid
        justifyContent={"flex-start"}
        alignItems={"center"}
        columns={4}
        gap="3rem"
      >
        {data.map((el) => (
          <Card key={el.id} item={el} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MakeUp;
