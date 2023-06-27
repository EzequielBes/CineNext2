interface IMovieRepository {
    create(movie: IMovie): Promise<void>
    listAll():Promise<IMovie[]>
    findByName(name:string):Promise<IMovie[]>
    findById(id:number): Promise<IMovie | null>
}