import { NextFunction, Request, Response } from "express";
import TournamentService from "../services/Tournaments.service";

class TournamentController {
  constructor(private tournamentController = new TournamentService()) {}

  public getTournaments = async(req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    try {
      const tournaments = await this.tournamentController.getTournaments();

      return res.status(200).json(tournaments);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default TournamentController;