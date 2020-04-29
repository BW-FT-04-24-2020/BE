const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    addAttribute
};

function find() {
    return db('strain_attributes')
            .join('strains', 'strain_id', '=', 'strain_id')
};

function findById(strain_id) {
    return db('strain_attributes')
            .join('strains', 'strain_id', '=', 'strain_id')
            .where({ strain_id })
            .first()
};

function add(strain) {
    return db('strains')
            .insert(strain, 'strain_id')
};

function addAttribute(attribute) {
    return db('strain_attributes')
            .insert(attribute, 'strain_id')
};