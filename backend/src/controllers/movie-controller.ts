import{Request,Response} from 'express';
import CreateMovie from "../services/create-movies";
import ListAllMovie from "../services/list-movies";

export default class MovieController{
    constructor(readonly createMovie:CreateMovie, readonly listAllMovie:ListAllMovie){}

    async create(request:Request,response:Response){
        try{
            const data = request.body;
            await this.createMovie.handle(data as IMovie)
            return response.status(201).json()
        }catch(err:any){
            return response.status(400).json({message:err.message})
        }
        
    }

    async listAll(request:Request,response:Response){
        try{
            const result = await this.listAllMovie.handle()
            return response.status(201).json(result)
        }catch(err:any){
            return response.status(400).json({message:err.message})
        }
    }
}