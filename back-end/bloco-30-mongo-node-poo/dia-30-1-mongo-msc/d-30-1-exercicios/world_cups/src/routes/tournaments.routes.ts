import { Router } from 'express';

import TournamentController from '../controllers/Tournaments.controller';

const tournamentController = new TournamentController();
const tournamentRoutes = Router();

const prefix = '/tournaments';

tournamentRoutes.get(`${prefix}`, tournamentController.getTournaments);

export default tournamentRoutes;
