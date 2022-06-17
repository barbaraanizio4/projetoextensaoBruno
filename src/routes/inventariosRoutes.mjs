import express from "express";
import inventarios from "../controler/inventarios.mjs";

const inventariosRoutes = express.Router();

inventariosRoutes.get("/inventarios", inventarios.getInventarios).get("/inventarios/:id", inventarios.getInventarioById)

export default inventariosRoutes;