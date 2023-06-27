export default class FindMovies {
    constructor(private repository:IMovieRepository){}

    async handle(name:string){
        return await this.repository.findByName(name)
    }
}