import * as mongoose from 'mongoose';

const CategoriaSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, lowercase: true, unique: true, required: true},
  numberOfActiveRooms: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});

export default CategoriaSchema;
