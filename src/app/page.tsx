"use client";
import { Conteudo } from "@/components/layout/conteudo";
import { Header } from "../components/layout/header";
import { Box, Flex, Img } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Box bg={"black"}>
        <Box width={"80%"} margin={"0 auto"} >
          <Box height={"100vh"} display={"flex"}>
            <Box
              justifyContent={"center"}
              display={"flex"}
              alignItems={"center"}
            >
              <Conteudo />
            </Box>
            
          </Box>
          <Box height={"100vh"}>
              <Img width={"100vw"} height={"100vh"} 
                src="https://wallpaperaccess.com/full/3967998.jpg"
                alt="Imagem de cinema"
              />
            </Box>
        </Box>
      </Box>
    </>
  );
}
