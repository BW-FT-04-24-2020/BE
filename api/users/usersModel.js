const db = require('../../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function find() {
    return db('users')
            //.join('ailments', 'id', '=', 'user_id')
            .select('id', 'username', 'password')
};

function findBy(filter) {
    return db('users')
            .where(filter)
};

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
    return findById(id)
};

function findById(id) {
    return db('users')
            .where({ id })
            .first()
};

function update(id, user) {
    return db('users')
            .where('id', Number(id))
            .update(user)
};

function remove(id) {
    return db('users')
            .where('id', Number(id))
            .del()
};

function findUserAilment(userId) {
    return db
        .select('a.ailment_id', 'a.ailment', 'a.a_desc', 'u.id as userId', 'u.username as user')
        .from('ailments as a')
        .join('users as u', 'a.user_id', '=', 'u.id')
        .where('u.id', '=', userId)
};