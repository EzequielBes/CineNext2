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
import { getAllMovies } from '@/movies/api'

export default function Page({ params }: { params: { slug: string } }) {
  let parametro = params.slug
  
  const [movie, setMovie] = useState<Catalogo>()
  const [modal, setmodal] = useState(false)

   const getMovie = async () => {
    const movies:Catalogo[] = await getAllMovies
    let ok =  movies.find(filme => filme.room == parseInt(parametro))
    setMovie(ok)
    
  }
  const {indicet, setIndice} = useMyContext()
  setIndice
  useEffect(()=> {
    getMovie()
  },[])
  
 

  return(
    <Box bg={'#49416D'}>
      
    
      
      <Button position={'absolute'} fontSize={'30'} margin={{lg:'30px 300px'}} style={{
        backgroundColor: '#4169E1'
      }}>
         <Link href="/"><BiArrowBack/></Link>
        </Button>
      <Flex w={{sm:'100%', lg:'80%'}}  margin={{lg:'0 auto'}} height={"container.sm"} backgroundImage={movie?.imagepath} bgSize={'cover'}  display={'flex'}  flexDir={'column'} justifyItems={'center'} justifyContent={'center'}>
        
        <Flex flexDir={"column"} align={'center'} bg={'rgba(0,0,0,0.5)'} >
          <Text  color={'white'} fontSize={"3xl"}>{movie?.name}</Text>
          <Flex w={{basic:'', lg:'700px'}}>
            <Text color={'gray.300'} textAlign={'center'}>{movie?.description}</Text>
          </Flex>
        </Flex>

        <Flex ml={{lg: '1200'}} position={'absolute'} top={{}} marginTop={{ lg:'500px'}} bg={'orange.400'} borderRadius={6} transition={'0 all 0.5s'} >
          
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