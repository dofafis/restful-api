import CategoriaController from './controller';
import * as httpStatus from 'http-status';

const sendResponse = function(res, statusCode, data) {
  res.status(statusCode).json({'result': data});
}

class CategoriaRoutes{
  constructor(){

  }

  getAll(req, res){
    CategoriaController
      .getAll()
      .then(categorias => sendResponse(res, httpStatus.OK, categorias))
      .catch(err => console.error.bind(console, `Erro: ${ err }`));
  }
  getById(req, res){
    const id = {_id: req.params.id }
    if(!id){
      sendResponse(res, httpStatus.OK, 'Categoria não foi encontrada!');
    }
    CategoriaController
      .getById(id)
      .then(categoria => sendResponse(res, httpStatus.OK, categoria))
      .catch(err => console.error.bind(console, `Erro: ${ err }`));
  }
  create(req, res){
    const categoria = req.body;
    CategoriaController
      .create(categoria)
      .then(categoria => sendResponse(res, httpStatus.CREATED, 'Categoria criada com sucesso!'))
      .catch(err => console.error.bind(console, `Erro: ${ err }`));
  }
  update(req, res){
    const id = {_id: req.params.id};
    const categoria = req.body;
    CategoriaController
      .update(id, categoria)
      .then(categoria => sendResponse(res, httpStatus.OK, 'Categoria atualizada!'))
      .catch(err => console.error.bind(console, `Erro: ${ err }`));
  }
  delete(req, res){
    const id = {_id: req.params.id};
    CategoriaController
      .delete(id)
      .then(result => sendResponse(res, httpStatus.OK, result))
      .catch(err => console.error.bind(console, `Erro: ${ err }`));
  }
}

export default new CategoriaRoutes();
