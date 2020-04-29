
exports.up = function(knex) {
    return knex.schema
    .createTable('ailments', tbl => {
        tbl.increments('ailment_id');

        tbl.string('ailment', 255)
            .notNullable()
        
        tbl.string('ailment_desc', 500)

        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ailments')
};
