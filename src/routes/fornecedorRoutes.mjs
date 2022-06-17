import express from "express";
import fornecedor from "../controler/fornecedor.mjs"


const fornecedorRoutes = express.Router();

fornecedorRoutes
    .get("/fornecedor", fornecedor.getFornecedor)
    .get('/fornecedor/:id', fornecedor.getFornecedorById)


export default fornecedorRoutes;