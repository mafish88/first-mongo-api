import { db } from './connectDb.js'
export function getAllPlants(req, res){
    db.collection('plants').find({}).toArray() 
        .then(plants => {
            res.send(plants)
        })
        .catch(err => {
            res.status(500).send({success: false, mesaage: err })
        })

}

export function addPlant(req, res){
    const newPlant = req.body
    db.collection('plants').insertOne(newPlant)
        .then(() => {
            res.status(201).send({ message: "Plant added", success: true })
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err })
        })

}
