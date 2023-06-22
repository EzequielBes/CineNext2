'use client'

import { movieCatalogo } from "@/movies/catalogo"
import { useEffect, useState } from "react"
import { Catalogo } from "@/types/catalogo"
import { Ageitafilme } from "@/movies/MovieController"
import { Box, Flex, Grid } from "@chakra-ui/react"

export function Conteudo () {

    const [movie, setMovie] = useState<Catalogo[]>()

    function getMovies() {
        setMovie(movieCatalogo)
    }
    
    useEffect(()=>{
        getMovies()
    },[])
    

    return (
        <Box>
            <Grid className=" grid grid-cols-3 gap-4  ">   
                {movie?.map((movie, index) => (
                    <Ageitafilme movies={movie} key={index} name={""} description={""} maxAge={0} price={0} sala={0}  />
                ))}
            </Grid>

        </Box>
    )
}