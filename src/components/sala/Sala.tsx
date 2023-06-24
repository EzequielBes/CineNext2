"use client";

import { Sala } from "@/Models/Sala";
import { Cadeiras } from "@/types/cadeiras";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  color,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TbArmchair } from "react-icons/tb";
import { useColorMode } from "@chakra-ui/react";
import { ComprarLugar } from "@/Models/ComprarLugar";
import { useMyContext } from "@/context/ticketContext";

export function SalaCinema() {
  const [cadeirasOnline, setCadeiras] = useState<Cadeiras[]>([]);
 
 const {indicet, setIndice} = useMyContext()
  

  const { colorMode } = useColorMode();

  const cadeirasSala = () => {
    const createSala = new Sala(5);
    const cadeiras = createSala.CadeirasAvainable();
    setCadeiras(cadeiras)
    
    return createSala;
  };
  function clijogar(num: number) {
    const lugares = new ComprarLugar(cadeirasOnline);
    setIndice({indice: num})
    const newLugares = lugares.isAvainable(num);
    setCadeiras([...newLugares])
  }

  useEffect(() => {
    cadeirasSala();
  }, []);

  return (
    <Flex>
      <Box bg={"#49416D"} height={"60vh"} width={"100%"} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Grid
          templateColumns="repeat(5, 1fr)"
          templateRows="repeat(6, 1fr)"
          gap={6}
        >
          {cadeirasOnline.map((cadeira, index) => (
            <GridItem key={index} colSpan={1} rowSpan={1}>
              <Button onClick={() => clijogar(index)}>
                <Icon
                  cursor={"pointer"}
                  fontSize={25}
                  style={{
                    color: cadeira.isOcuped === true ? "orange" : "#6f95ff",
                  }}
                >
                  
                  <TbArmchair />
                </Icon>
              </Button>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}
