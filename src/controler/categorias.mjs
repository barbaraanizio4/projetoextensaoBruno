import axios from 'axios'

async function getCategorias(req, res) {


    try {
        const categorias = await axios({
            method: 'get',
            url: 'https://ficr-store.herokuapp.com/api/v1/categories'
        })

        console.log(categorias.data)

        res.status(201).send(categorias.data)
    } catch (e) {
        console.log(e.message)

        res.status(404).send(e.message)
    }

}

async function getCategoriaById(req, res) {
    const id = req.params.id;

    try {
        const categoria = await axios({
            method: 'get',
            url: `https://ficr-store.herokuapp.com/api/v1/categories/${id}`
        })

        console.log(categoria.data)

        res.status(201).send(categoria.data)

    } catch (e) {
        console.log(e.message)

        res.status(404).send(e.message)
    }
}

export default { getCategorias, getCategoriaById };