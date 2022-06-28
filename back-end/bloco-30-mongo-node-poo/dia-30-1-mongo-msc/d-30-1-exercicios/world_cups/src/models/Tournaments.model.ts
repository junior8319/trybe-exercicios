import { model as createModel } from 'mongoose';
import ITournamentsData from '../interfaces/ITournamentsData';
import TournamentsSchema from '../schemas/Tournaments.schema';

class TournamentModel {
  constructor (private tournamentModel = createModel<ITournamentsData>('tournaments', TournamentsSchema)) {}

  public async getTournaments(): Promise<ITournamentsData[]> {
    const tournaments = await this.tournamentModel.find();
    return tournaments;
  }
}

export default TournamentModel;
