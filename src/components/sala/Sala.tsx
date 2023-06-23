'use client'

import { Sala } from "@/Models/Sala"
import { Cadeiras } from "@/types/cadeiras"
import { Box, Flex, Grid, GridItem, Icon } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {TbArmchair} from 'react-icons/tb'

export function SalaCinema() {
    const [cadeirasOnline, setCadeiras] = useState<any[]>()

    
    
    const cadeirasSala = () => {
        const createSala = new Sala(5)
        const cadeiras = createSala.CadeirasAvainable()
        setCadeiras(cadeiras)
        console.log(cadeirasOnline)
        
    }
    useEffect(()=>{
        cadeirasSala()
    },[])

    return (
        <Flex  >
            <Box bg={'whiteAlpha.500'} height={'100vh'} width={'100%'} >
            <Grid  templateColumns="repeat(5, 1fr)" templateRows="repeat(6, 1fr)" gap={6} > 
                {cadeirasOnline?.map((cadeira, index) => (
                    <GridItem key={index} colSpan={1} rowSpan={1} >

                        <Icon cursor={'pointer'} fontSize={25}><TbArmchair/></Icon>
                    </GridItem>
                ))}
                </Grid>
            </Box>
        </Flex>
    )
}