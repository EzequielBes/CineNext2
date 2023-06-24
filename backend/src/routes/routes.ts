// Router - routes.ts
import { Router } from "express";
import { makeMovieController } from "../factories/movies-controller-factory";

const router = Router();
const movieController = makeMovieController();

router.post('/movie', movieController.create.bind(movieController));
router.get('/movies/listall', movieController.listAll.bind(movieController));

export default router;