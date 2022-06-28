import { connect } from 'mongoose';

const connection = (databaseURI = 'mongodb://localhost:/world_cups') => {
  return connect(databaseURI);
};

export default connection;
