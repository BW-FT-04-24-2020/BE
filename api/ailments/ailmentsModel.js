const db = require('../../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove
};

function find() {
    return db('ailments')
        .select('ailment_id', 'ailment', 'ailment_desc')
};

function findBy(filter) {
    return db('ailments')
        .where(filter)
};

async function add(ailment) {
    const [ailment_id] = await db('ailments').insert(ailment);
    return findById(ailment_id)
};

function findById(ailment_id) {
    return db('ailments')
        .where({ ailment_id })
        .first()
};

function remove(ailment_id) {
    return db('ailments')
        .where({ ailment_id })
        .del()
};