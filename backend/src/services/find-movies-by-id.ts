export default class FindMoviesById {
    constructor(private repository:IMovieRepository){}

    async handle(id:number){
        return await this.repository.findById(id)
    }
}