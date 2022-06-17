import express from "express";
import categorias from "../controler/categorias.mjs";


const categoriasRoutes = express.Router();

categoriasRoutes
    .get("/categorias", categorias.getCategorias)
    .get('/categorias/:id', categorias.getCategoriaById)

export default categoriasRoutes;