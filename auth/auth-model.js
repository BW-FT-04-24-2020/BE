const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
  remove,
  getStrains,
  getSavedStrains,
  saveStrain,
}

function find() {
    return db('users').select('id', 'name', 'password', 'email');
  }
  
  function findBy(filter) {
    return db('users').where(filter);
  }
  
 async function add(user) {
    const [id] = await db('users').insert(user, 'user_id');
  
    return findById(id);
  }
  
  function findById(user_id) {
    return db('users').where({ user_id }).first();
  }
  function update(user_id, changes) {
    return db('users')
      .where('user_id', user_id)
      .update(changes)
      .then((count) => (count > 0 ? findById(user_id) : null));
  }

  function remove(user_id) {
    return db('users').where('user_id', user_id).del();
  }

  function getStrains() {
    return db('strains');
}

function saveStrain(strain ) {
  return db('saved_strains')
      .insert(strain,  'user_id')
      .then(ids=>{
        return findById(ids[0])
      })
      
}
function getSavedStrains(userId) {
  return db('users as u')
      .join('saved_strains as s','s.user' ,'=', 'u.user_id' )
      .select('s.strain')
      .where('s.user',  userId);
}
