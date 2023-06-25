"use client";

import { Sala } from "@/Models/Sala";
import { Cadeiras } from "@/types/IChairs";
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
  const {salaCadeira, setSalaCadeira} = useMyContext()
  const [cadeirasOnline, setCadeiras] = useState<Cadeiras[]| undefined>();
  const {indicet, setIndice} = useMyContext()
  const [historyCOmpras,setHistoryCompras] = useState<number[]>([])

  const createMovieTheater = () => {
    if(cadeirasOnline) return
    const createSala = new Sala(5);
    const chairs = createSala.CadeirasAvainable();
    return salaCadeira??chairs
  };

  function handleSelectChair(selected: number) {
    if(!cadeirasOnline) return
    let lugares = new ComprarLugar(cadeirasOnline);
    setIndice({indice: selected + 1})
    let newLugares = lugares.isAvainable(selected);
    setHistoryCompras([...historyCOmpras,selected])
    setCadeiras([...newLugares])
  }

  useEffect(()=>{
    let cadeiras = cadeirasOnline ? [...cadeirasOnline] : []
    for(let lugar=0; lugar<historyCOmpras.length -1; lugar++){
      if(cadeiras.length>0)
        cadeiras[historyCOmpras[lugar]].isOcuped = false
    }
    setSalaCadeira(cadeirasOnline)
  }),[historyCOmpras]

  useEffect(() => {
    setCadeiras(createMovieTheater())
  }, [])

  return (
    <Flex>
      <Box bg={"#49416D"} height={"60vh"} width={"100%"} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Grid
          templateColumns="repeat(5, 1fr)"
          templateRows="repeat(6, 1fr)"
          gap={6}
        >
          {cadeirasOnline?.map((chair, index) => (
            <GridItem key={index} colSpan={1} rowSpan={1}>
              <Button onClick={() => handleSelectChair(index)}>
                <Icon
                  cursor={"pointer"}
                  fontSize={25}
                  style={{
                    color: chair?.isOcuped === true ? "orange" : "#6f95ff",
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
