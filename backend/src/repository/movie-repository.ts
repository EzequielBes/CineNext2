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

    async findByName(name:string): Promise<IMovie[]> {
        const movies:IMovie[] = await this.prisma.$queryRawUnsafe<IMovie[]>(`SELECT * FROM Movie WHERE name LIKE '%${name}%'`)
        await this.prisma.$disconnect()
        return movies
    }

    async findById(id:number): Promise<IMovie | null> {
        const movies:IMovie | null = await this.prisma.movie.findUnique({
            where:{
                id:id
            }
        })
        await this.prisma.$disconnect()
        return movies
    }
}