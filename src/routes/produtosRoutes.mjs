import express from "express";
import produto from "../controler/produto.mjs";

const produtosRoutes = express.Router();

produtosRoutes
    .get("/produtos", produto.getProdutos)
    .get("/produtos/:id", produto.getProdutoById)

export default produtosRoutes;