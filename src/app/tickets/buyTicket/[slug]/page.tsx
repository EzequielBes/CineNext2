"use client"
import {BiArrowBack} from 'react-icons/bi'
import {  TicketModal } from "@/components/sala/modal"
import IngressoAnos80 from "@/components/sala/ticketMovie"
import { movieCatalogo } from "@/movies/catalogo"
import { Catalogo } from "@/types/Icatalog"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useMyContext } from '@/context/ticketContext'

export default function Page({ params }: { params: { slug: string } }) {
  let parametro = params.slug
  const movies = movieCatalogo
  const [movie, setMovie] = useState<Catalogo>()
  const [modal, setmodal] = useState(false)

  const getMovie = () => {
    let ok = movies.find(filme => filme.sala == parseInt(parametro))
    setMovie(ok)
    
  }
  const {indicet, setIndice} = useMyContext()
  setIndice
  useEffect(()=> {
    getMovie()
  },[])
  
 

  return(
    <Box bg={'#49416D'}>
      
    
      
      <Button position={'absolute'} fontSize={'30'} margin={'30px 300px'}>
         <Link href="/"><BiArrowBack/></Link>
        </Button>
      <Flex w={'80%'}  margin={'0 auto'} height={"container.sm"} bg={'#176B87'} display={'flex'}  flexDir={'column'} justifyItems={'center'} justifyContent={'center'}>
        
        <Flex flexDir={"column"} align={'center'}>
          <Text  color={'white'} fontSize={"3xl"}>{movie?.name}</Text>
          <Text color={'gray.300'}>{movie?.description}</Text>
        </Flex>

        <Flex ml={'1200'} position={'absolute'} mt={500}>
          
          <TicketModal ing={movie?.price ?? 0}/>
        </Flex>
        
      </Flex>
      <Box w={'80%'} margin={'0 auto'} height={'100vh'}>
      {typeof indicet?.indice !== 'undefined' &&
        
        <IngressoAnos80 ing={movie?.price ?? 0} name={movie?.name ?? ''} />
      
      }
      </Box>
      
        
      
    </Box>
  ) 
}