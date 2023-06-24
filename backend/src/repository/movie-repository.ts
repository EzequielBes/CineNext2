import { PrismaClient } from "@prisma/client";

export default class MovieRepository implements IMovieRepository {

    private prisma: PrismaClient ;
    constructor(){
        this.prisma = new PrismaClient()
    }

    async create(movie: IMovie): Promise<void> {
        await this.prisma.$connect()
        await this.prisma.movie.create({
            data: movie
        })
        await this.prisma.$disconnect()  
    }

    async listAll(): Promise<IMovie[]> {
        const movies:IMovie[] = await this.prisma.movie.findMany()
        await this.prisma.$disconnect()
        return movies
    }
}