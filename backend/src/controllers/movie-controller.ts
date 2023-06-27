import{Request,Response} from 'express';
import CreateMovie from "../services/create-movies";
import FindMovies from '../services/find-movies';
import MovieRepository from '../repository/movie-repository';
import ListAllMovies from '../services/list-movies';
import FindMoviesById from '../services/find-movies-by-id';

export default class MovieController{
    private findMovies:FindMovies
    private movieRepository:MovieRepository
    private creatMovie:CreateMovie
    private listAllMovies:ListAllMovies
    private findMoviesById:FindMoviesById

    constructor(){
        this.movieRepository = new MovieRepository();
        this.creatMovie = new CreateMovie(this.movieRepository);
        this.listAllMovies = new ListAllMovies(this.movieRepository);
        this.findMovies = new FindMovies(this.movieRepository);
        this.findMovies = new FindMovies(this.movieRepository);
        this.findMoviesById = new FindMoviesById(this.movieRepository);
    }

    async create(request:Request,response:Response){
        try{
            const data = request.body;
            await this.creatMovie.handle(data as IMovie)
            return response.status(201).json()
        }catch(err:any){
            return response.status(400).json({message:err.message})
        }
        
    }

    async listAll(request:Request,response:Response){
        try{
            const result = await this.listAllMovies.handle()
            return response.status(201).json(result)
        }catch(err:any){
            return response.status(400).json({message:err.message})
        }
    }

    async findByName(request:Request,response:Response){
        try{
            const {name} = request.query;
            if(!name) throw new Error("name is required")
            const namestring:string = name ? name.toString():""
            const result = await this.findMovies.handle(namestring)
            return response.status(201).json(result)
        }catch(err:any){
            return response.status(400).json({message:err.message})
        }
    }

    async findById(request:Request,response:Response){
        try{
            const {id} = request.query;
            if(!id) throw new Error("id is required")
            const parsedId = parseInt(id.toString())
            const result = await this.findMoviesById.handle(parsedId)
            return response.status(201).json(result)
        }catch(err:any){
            return response.status(400).json({message:err.message})
        }
    }
}