import Categoria from './repository';

class CategoriaController{
  constructor(){

  }
  getAll(){
    return Categoria.find({});
  }
  getById(id){
    return Categoria.findById(id);
  }
  create(categoria){
    return Categoria.create(categoria);
  }
  update(id, categoria){
    const updatedCategoria = {
      name: categoria.name,
      description: categoria.description,
      numberOfActiveRooms: categoria.numberOfActiveRooms
    }
    return Categoria.findByIdAndUpdate(id, updatedCategoria);
  }
  delete(id){
    return Categoria.remove(id);
  }
}

export default new CategoriaController();
