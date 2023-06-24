interface IMovieRepository {
    create(movie: IMovie): Promise<void>
    listAll():Promise<IMovie[]>
}