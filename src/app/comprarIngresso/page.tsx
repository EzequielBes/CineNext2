'use client'

import { Sala } from "@/Models/Sala";
import { movieCatalogo } from "@/movies/catalogo";
import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PiPopcorn } from "react-icons/pi";


export default function IngressoComprar() {

   
   const [formValue, setFormValue] = useState("")
    const [isOnSale, setOnSale] = useState(Boolean)
   

    function muda(event:any) {
        setFormValue(event.target.value)
    }

   function handleSubmit(event: any) {
    event.preventDefault();
    
    let moviesr = movieCatalogo.filter(movie => movie.name === formValue)
    if(moviesr.length !== 0){
        setOnSale(true)
    }
    
   }
   function criarMenu() {
    let mod = new Sala(5)
    mod.CadeirasAvainable()
    console.log(mod)

   }

    return (
        <Box bg={"gray.800"} height={"100vh"}>
            <Box w={'80%'} margin={'0 auto'}>
                <Box bg={'gray.700'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDir={'column'} height={"50vh"} >
                    <Text color={'white'} fontSize={20} mb={20} >Comprar ingresso</Text>
                    <form onSubmit={handleSubmit} >
                        <FormLabel color={'white'}>Nome do filme</FormLabel>
                        <Input type="text" name="filme" placeholder="Digite o nome do filme" onChange={muda} color={"whiteAlpha.600"} />
                        
                    </form>
                    {isOnSale == true && <Box color={"green"}>Comprar ingresso para <Button>{formValue}</Button> </Box>}
                </Box>
                <Button onClick={criarMenu}></Button>
            </Box>
        </Box>
    )
}