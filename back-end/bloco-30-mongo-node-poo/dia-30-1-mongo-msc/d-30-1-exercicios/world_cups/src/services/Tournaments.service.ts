import ITournamentsData from "../interfaces/ITournamentsData";
import TournamentModel from "../models/Tournaments.model";

class TournamentService {
  constructor(private tournamentService = new TournamentModel()) {}

  public async getTournaments(): Promise<ITournamentsData[]> {
    const tournaments = await this.tournamentService.getTournaments();
    return tournaments;
  }
}

export default TournamentService;
