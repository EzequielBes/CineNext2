"use client"
import { SalaCinema } from "@/components/sala/Sala"
import { movieCatalogo } from "@/movies/catalogo"
import { Catalogo } from "@/types/catalogo"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { slug: string } }) {
  let parametro = params.slug
  const movies = movieCatalogo
  const [movie, setMovie] = useState<Catalogo>()


  const getMovie = () => {
    let ok = movies.find(filme => filme.sala == parseInt(parametro))
    setMovie(ok)
    console.log(ok)
  }
  
  useEffect(()=> {
    getMovie()
  },[])
  
  return(
    <Box bg={'#001C30'}>
      

      

      <Flex w={'80%'}  margin={'0 auto'} height={"container.sm"} bg={'#176B87'} display={'flex'}  flexDir={'column'} justifyItems={'center'} justifyContent={'center'}>
        
        <Flex flexDir={"column"} align={'center'}>
          <Text  color={'white'} fontSize={"3xl"}>{movie?.name}</Text>
          <Text color={'gray.300'}>{movie?.description}</Text>
        </Flex>

        <Flex ml={'1200'} position={'absolute'} mt={500}>
          <Button>Comprar ingresso R$ {movie?.price},00 </Button>
        </Flex>
        
      </Flex>
      <Box w={'80%'} margin={'0 auto'} height={'100vh'}>
         <SalaCinema/>
      </Box>
        
      
    </Box>
  ) 
}