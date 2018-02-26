"use strict";
var mongoose = require('mongoose');
var CategoriaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, lowercase: true, unique: true, required: true },
    numberOfActiveRooms: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CategoriaSchema;
