const db = require('../../database/db-config.js')

module.exports = {
    find, 
    findByStrain,
    findByAilment

}

function find() {
    return db
    .select('*')
    .from('recommends as r')
    .join('users as u', 'r.user_id', '=', 'u.id')
    .join('ailments as a', 'r.ailment_id,', '=', 'a.ailment_id')
    .join('strains as s', 'r.strain_id', '=', 's.strain_id')
    .join('strain_attributes as b', 'r.attribute_id', '=', 'b.attribute_id')
}

function findByStrain(id) {
    return db
    .select('r.strain_id')
    .from('recommends as r')
    .join('users as u', 'r.user_id', '=', 'u.id')
    .join('ailments as a', 'r.ailment_id,', '=', 'a.ailment_id')
    .join('strains as s', 'r.strain_id', '=', 's.strain_id')
    .join('strain_attributes as b', 'r.attribute_id', '=', 'b.attribute_id')
    .where('', '=', id)
    .orderBy(s.strain_name)
}

function findByAilment(id) {
    return db
    .select('r.ailment_id')
    .from('recommends as r')
    .join('users as u', 'r.user_id', '=', 'u.id')
    .join('ailments as a', 'r.ailment_id,', '=', 'a.ailment_id')
    .join('strains as s', 'r.strain_id', '=', 's.strain_id')
    .join('strain_attributes as b', 'r.attribute_id', '=', 'b.attribute_id')
    .where('', '=', id)
    
}