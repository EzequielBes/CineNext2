import { buyTicket } from "@/linkRoutes/rotas";
import { Catalogo } from "@/types/Icatalog";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface movieInd extends Catalogo {
  movies: Catalogo;
  key: number;
}

export function Ageitafilme({ movies }: movieInd) {

  let description = movies.description
  if(description.length > 100) {
    description = description.substring(0, 130) + '...'
  }

  return (
    <Link href={`${buyTicket}/${movies.room}`}>
      <Flex
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        bgImage={movies.imagepath}
        bgSize={'cover'}
        p={{base: 3, lg: 6}}
        height={{base:300,  lg:230}}
        borderRadius={10}
      >
        <Box bg={'rgba(0,0,0,0.5)'}  p={4} borderRadius={10}>
        <Text color={"red.300"} fontWeight={"bold"} fontSize={{base:"sm" ,lg: "2xl"}}>
          {movies.name}
        </Text>
        <Text color={"gray.300"} fontSize={{base:"small",  lg:"sm"}} mt={{base: 3, lg:5}} mb={5}>
          {description}
        </Text>
        {movies.maxage == 18 ? (
          <Flex bg={"red.400"} color={"red.900"}w={10}  margin={'0 auto'} padding={2} border={'1px solid black'} borderRadius={10} justify={'center'}>
            {movies.maxage}
          </Flex>
        ) : (
          <Flex bg={"yellow.300"} margin={'0 auto'} w={10} color={"black"} padding={2} border={'1px solid black'} borderRadius={10} justify={'center'}>
            {movies.maxage}
          </Flex>
        )}
        </Box>
      </Flex>
      
    </Link>
  );
}
