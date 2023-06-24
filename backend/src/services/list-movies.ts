export default class ListAllMovies {
    constructor(private repository:IMovieRepository){}

    async handle(){
        return await this.repository.listAll()
    }
}