import axios from "axios";
import {Catalogo} from '../types/Icatalog'

const url = axios.create({
    baseURL: 'http://localhost:3001'
})

export const getAllMovies = url.get('/movies/listall').then(response => (response.data))
export const getMovieByName =(name:string) => url.get('/movies/findbyname?name='+name).then(response => (response.data))
