export default class CreateMovie {
    constructor(private repository:IMovieRepository){}

    async handle(movie:IMovie){
        if(!movie.name) throw new Error("param 'name' is required")
        if(!movie.description) throw new Error("param 'description' is required")
        if(!movie.maxage) throw new Error("param 'maxage' is required")
        if(!movie.price) throw new Error("param 'price' is required")
        if(!movie.room) throw new Error("param 'room' is required")
        if(!movie.imagepath) throw new Error("param 'imagepath' is required")
        await this.repository.create(movie)
    }
}