import { Schema } from 'mongoose';
import ITournamentsData from '../interfaces/ITournamentsData';

const tournamentsSchema = new Schema<ITournamentsData>({
  year: { type: Number, required: true },
  hostCountry: { type: String, required: true },
  champions: { type: String, required: true },
  runnerUp: { type: String, required: true },
  editionGoals: { type: Number, required: true },
  editionStrikers: { type: [String], required: true },
  bestPlayer: { type: String, required: true },
  bestGoalkeeper: { type: String, required: true },
  bestYoungPlayer: { type: String, required: true },
});

export default tournamentsSchema;