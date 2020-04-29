module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body

        db.create_product([name, description, price, image_url]).then(() => res.status(200)).catch(err => res.status(500).send({errorMessage: "NOT WORKING!"}))
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.read_product(id).then(product => res.status(200)).send(product).catch(err => res.status(500).send({errorMessage: "NOT WORKING!"}))
    },
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.read_products().then(product => res.status(200)).send(product).catch(err => res.status(500).send({errorMessage: "NOPE!"}))
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const {id, desc} = req

        db.update_products([params.id, query.desc]).then(() => res.status(200)).catch(err => res.status(500).send({errorMessage: "nope"}))
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id).then(() => res.status(200)).catch(err => res.status(500).send({errorMessage: "NOPE"}))
    }
};