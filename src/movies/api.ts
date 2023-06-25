import axios from "axios";

const url = axios.create({
    baseURL: 'http://localhost:3001'
})

export const getAllMovies = url.get('/movies/listall').then(response => (response.data))