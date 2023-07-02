"use client";
import { Conteudo } from "@/components/layout/homeCatalog";
import { Header } from "../components/layout/header";
import { Box, Button, Flex, Img } from "@chakra-ui/react";
import { useMyContext } from "@/context/ticketContext";



export default function Home() {

 
  const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  }
  

  return (
    <>
      <Header />
      <Box bg={"black"}>
        <Box width={{base: "100vw", md: '90vw', lg: '80vw'}} margin={"0 auto"} display={{base: 'flex', lg: "block"}} flexDir={{base: 'column', lg:"row"}}>
          <Box height={{base:"full" ,lg:"100vh"}} display={"flex"}>
            <Box
              justifyContent={{base:"center", lg:"center"}}
              display={"flex"}
              mt={{base:20 , lg: 0}}
             
              alignItems={{base:"flex-start"   ,lg:"center"}}
            >
              <Conteudo />
            </Box>
            
          </Box>
        </Box>
      </Box>
    </>
  );
}
