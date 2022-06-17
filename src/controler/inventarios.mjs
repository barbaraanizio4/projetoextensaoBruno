import axios from "axios";

async function getInventarios(req, res) {

    try {
        const inventarios = await axios({
            method: 'get',
            url: 'https://ficr-store.herokuapp.com/api/v1/inventories'
        })

        console.log(inventarios.data)

        res.status(201).send(inventarios.data)
    } catch (e) {
        console.log(e.message)

        res.status(404).send(e.message)
    }
}

async function getInventarioById(req, res) {
    const id = req.params.id;

    try {
        const inventario = await axios({
            method: 'get',
            url: `https://ficr-store.herokuapp.com/api/v1/inventories/${id}`
        })

        console.log(inventario.data)

        res.status(201).send(inventario.data)
    } catch (e) {
        console.log(e.message)

        res.status(404).send(e.message)
    }
}

export default { getInventarios, getInventarioById }