let {people} = require('../data')

const getPeople = (req, res) => {
    return res.status(200).json({success: true, data: people});
}

const postPeople = (req, res) => {
    const {name} = req.body;
    if (!name){
        return res.status(401).json({success: false, msg: "Please provide your credentials"});
    } else {
        return res.status(200).json({success: true, data: [...people, name]})
    }
}

const putPeople = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person) => person.id == Number(id));
    if (!person){
        return res.status(401).json({success: false, msg: `no person with id ${id}`});
    } else {
        const newPeople = people.map((person) => {
            if (person.id == Number(id)){
                person.name = name
            }
            return person
        });
        return res.status(200).json({sucess: true, data: newPeople});
    }
}

const deletePeople = (req, res) => {
    const {id} = req.params;
    const person = people.find((person) => person.id == Number(id));
    if (!person){
        return res.status(401).json({success: false, msg: `no person with id ${id}`});
    } else {
        const newPeople = people.filter((person) => person.id != Number(id));
        return res.status(200).json({sucess: true, data: newPeople});
    }
}

module.exports = {getPeople, postPeople, putPeople, deletePeople};