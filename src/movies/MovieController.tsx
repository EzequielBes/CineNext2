import { Catalogo } from "@/types/catalogo";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
interface movieInd extends Catalogo {
  movies: Catalogo;
  key: number;
}
export function Ageitafilme({ movies }: movieInd) {
  return (
    <Link href={`ingressos/comprarIngresso/${movies.sala}`}>
      <Flex
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        bg={"gray.700"}
        p={6}
        height={230}
        borderRadius={10}
      >
        <Text color={"red.300"} fontWeight={"bold"} fontSize={"2xl"}>
          {movies.name}
        </Text>
        <Text color={"gray.300"} fontSize={"small"} mt={5} mb={5}>
          {movies.description}
        </Text>
        {movies.maxAge == 18 ? (
          <Box bg={"red.400"} color={"red.900"} padding={2} border={'1px solid black'} borderRadius={10}>
            {movies.maxAge}
          </Box>
        ) : (
          <Box bg={"yellow.300"} color={"black"} padding={2} borderRadius={10}>
            {movies.maxAge}
          </Box>
        )}
      </Flex>
    </Link>
  );
}
