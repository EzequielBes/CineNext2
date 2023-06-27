// Router - routes.ts
import { Router } from "express";
import MovieController from "../controllers/movie-controller";


const router = Router();
const movieController = new MovieController();

router.post('/movie', movieController.create.bind(movieController));
router.get('/movies/listall', movieController.listAll.bind(movieController));
router.get('/movies/findbyname', movieController.findByName.bind(movieController));
router.get('/movies/findbyid', movieController.findById.bind(movieController));

export default router;