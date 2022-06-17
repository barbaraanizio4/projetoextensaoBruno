import axios from "axios";

async function getFornecedor(req, res) {

    try {
        const fornecedor = await axios({
            method: 'get',
            url: 'https://ficr-store.herokuapp.com/api/v1/suppliers'
        })

        console.log(fornecedor.data)

        res.status(201).send(fornecedor.data)

    } catch (e) {
        console.log(e.message)

        res.status(404).send(e.message)
    }
}

async function getFornecedorById(req, res) {
    const id = req.params.id;

    try {
        const fornecedor = await axios({
            method: 'get',
            url: `https://ficr-store.herokuapp.com/api/v1/suppliers/${id}`
        })

        console.log(fornecedor.data)

        res.status(201).send(fornecedor.data)
    } catch (e) {
        console.log(e.message)

        res.status(404).send(e.message)

    }
}

export default { getFornecedor, getFornecedorById };