import axios from 'axios'

async function getProdutos(req, res) {

    try {
        const produtos = await axios({
            method: 'get',
            url: 'https://ficr-store.herokuapp.com/api/v1/products'
        })

        console.log(produtos)

        res.status(201).send(produtos.data)
    } catch (e) {
        console.log(e.message)

        res.status(404).send(e.message)
    }

}

async function getProdutoById(req, res) {
    const id = req.params.id;

    try {
        const produto = await axios({
            method: 'get',
            url: `https://ficr-store.herokuapp.com/api/v1/products/${id}`
        })

        console.log(produto.data)

        res.status(201).send(produto.data)
    } catch (e) {
        console.log(e.message)

        res.status(404).send(e.message)
    }
}


export default { getProdutos, getProdutoById };