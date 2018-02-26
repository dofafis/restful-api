import * as mongoose from 'mongoose';
import CategoriaSchema from './schema';

export default mongoose.model('Categoria', CategoriaSchema);
