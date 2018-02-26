"use strict";
var repository_1 = require('./repository');
var CategoriaController = (function () {
    function CategoriaController() {
    }
    CategoriaController.prototype.getAll = function () {
        return repository_1.default.find({});
    };
    CategoriaController.prototype.getById = function (id) {
        return repository_1.default.findById(id);
    };
    CategoriaController.prototype.create = function (categoria) {
        return repository_1.default.create(categoria);
    };
    CategoriaController.prototype.update = function (id, categoria) {
        var updatedCategoria = {
            name: categoria.name,
            description: categoria.description,
            numberOfActiveRooms: categoria.numberOfActiveRooms
        };
        return repository_1.default.findByIdAndUpdate(id, updatedCategoria);
    };
    CategoriaController.prototype.delete = function (id) {
        return repository_1.default.remove(id);
    };
    return CategoriaController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new CategoriaController();
