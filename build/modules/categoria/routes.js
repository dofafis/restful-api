"use strict";
var controller_1 = require('./controller');
var httpStatus = require('http-status');
var sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};
var CategoriaRoutes = (function () {
    function CategoriaRoutes() {
    }
    CategoriaRoutes.prototype.getAll = function (req, res) {
        controller_1.default
            .getAll()
            .then(function (categorias) { return sendResponse(res, httpStatus.OK, categorias); })
            .catch(function (err) { return console.error.bind(console, "Erro: " + err); });
    };
    CategoriaRoutes.prototype.getById = function (req, res) {
        var id = { _id: req.params.id };
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Categoria não foi encontrada!');
        }
        controller_1.default
            .getById(id)
            .then(function (categoria) { return sendResponse(res, httpStatus.OK, categoria); })
            .catch(function (err) { return console.error.bind(console, "Erro: " + err); });
    };
    CategoriaRoutes.prototype.create = function (req, res) {
        var categoria = req.body;
        controller_1.default
            .create(categoria)
            .then(function (categoria) { return sendResponse(res, httpStatus.CREATED, 'Categoria criada com sucesso!'); })
            .catch(function (err) { return console.error.bind(console, "Erro: " + err); });
    };
    CategoriaRoutes.prototype.update = function (req, res) {
        var id = { _id: req.params.id };
        var categoria = req.body;
        controller_1.default
            .update(id, categoria)
            .then(function (categoria) { return sendResponse(res, httpStatus.OK, 'Categoria atualizada!'); })
            .catch(function (err) { return console.error.bind(console, "Erro: " + err); });
    };
    CategoriaRoutes.prototype.delete = function (req, res) {
        var id = { _id: req.params.id };
        controller_1.default
            .delete(id)
            .then(function (result) { return sendResponse(res, httpStatus.OK, result); })
            .catch(function (err) { return console.error.bind(console, "Erro: " + err); });
    };
    return CategoriaRoutes;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new CategoriaRoutes();
