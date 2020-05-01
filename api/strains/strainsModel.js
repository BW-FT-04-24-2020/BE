const db = require('../../data/dbConfig');

// module.exports = {
//     find,
//     findById,
//     add,
//     addAttribute
// };

// function find() {
//     // return db('strain_attributes')
//     // .join('strains', 'strain_id', '=', 'strain_id')
//     return db('strains')
// };

// function findById(strain_id) {
//     return db('strains')
//             .join('strain_attributes', 'strain_id', '=', 'strain_id')
//             .where({ strain_id })
//             .first()
// };

// function add(strain) {
//     return db('strains')
//             .insert(strain, 'strain_id')
// };

// function addAttribute(attribute) {
//     return db('strain_attributes')
//             .insert(attribute, 'strain_id')
// };
module.exports = {
    find, 
    findById,
    add,
    addAttr
}

function find() {
    return db
    .select('*')
    .from('strain_attributes as a')
    .join('strains as s', 'a.strain_id', '=', 's.strain_id')
}

function findById(s_id) {
    return db
        .select('*')
        .from('strain_attributes as a')
        .join('strains as s', 'a.strain_id', '=', 's.strain_id')
        .where('a.strain_id', '=', s_id)
        .first()
}

function add(strain) {
return     db('strains')
     .insert(strain, 'id')  
}

function addAttr(attribute) {
  return  db('strain_attributes')
    .insert(attribute, 'id')
}