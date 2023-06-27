'use client'

import { movieCatalogo } from "@/movies/catalogo"
import { useEffect, useState } from "react"
import { Catalogo } from "@/types/Icatalog"
import { Ageitafilme } from "@/movies/MovieController"
import { Box, Flex, Grid } from "@chakra-ui/react"
import {getAllMovies} from '../../movies/api'


export function Conteudo () {
    const [movie, setMovie] = useState<Catalogo[]>()

    async function getMovies() {
        const movies = await  getAllMovies
        setMovie(movies)
    }
    
    
    

    useEffect(()=>{
        getMovies()
    },[])

    return (
        <Box>
            <Grid templateColumns={{base:"repeat(1, 1fr)" ,lg:"repeat(3, 1fr)"}}
                templateRows={{base:"repeat(6,1fr)",lg: "repeat(2, 1fr)"}}
                gap={{base:2, lg: 6}}
                >   
                {movie?.map((movie, index) => (
                    <Ageitafilme movies={movie} key={index} name={""} description={""} maxage={0} price={0} room={0} imagepath={""}  />
                ))}
            </Grid>

        </Box>
    )
}