import express from "express";
import categoriasRoutes from "./categoriasRoutes.mjs";
import fornecedorRoutes from "./fornecedorRoutes.mjs";
import inventariosRoutes from "./inventariosRoutes.mjs";
import produtosRoutes from "./produtosRoutes.mjs";



export default function router(app) {
    app.use(
        express.json(),
        produtosRoutes,
        categoriasRoutes,
        inventariosRoutes,
        fornecedorRoutes
    );
}