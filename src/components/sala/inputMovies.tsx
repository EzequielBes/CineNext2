"use client";

import { Sala } from "@/Models/Sala";
import { movieCatalogo } from "@/movies/catalogo";
import { Box, Button, FormLabel, Input, InputLeftAddon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import {buyTicket} from '../../linkRoutes/rotas'

export default function Ingressos() {
  const [formValue, setFormValue] = useState("");
  const [isOnSale, setOnSale] = useState(Boolean);
  const [idmovie, setIdMovie] = useState(0);

  function muda(event: any) {
    setFormValue(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    let moviesr = movieCatalogo.filter((movie) => movie.name === formValue);

    if (moviesr.length !== 0) {
      setIdMovie(moviesr[0].sala);

      setOnSale(true);
    }
  }
  

  return (
    <Box>
      
      <form onSubmit={handleSubmit}>
       
        <Input
          type="text"
          name="filme"
          placeholder="Digite o nome do filme"
          onChange={muda}
          border={'1px solid black'}
          bg={"gray.300"}
          color={"gray.700"}
        />
      </form>
      {isOnSale == true && (
        <Box color={"green"} position={'absolute'}>
          Comprar ingresso para{" "}
          <Link href={`${buyTicket}/${idmovie}`}>
            {formValue}
          </Link>{" "}
          
        </Box>
      )}
    </Box>
  );
}
