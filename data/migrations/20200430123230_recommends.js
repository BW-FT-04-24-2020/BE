
exports.up = function(knex) {
    return knex.schema
        .createTable('recommends', tbl  => {
                tbl.increments('approved_id')
                
                tbl.integer('user_id')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('users')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE')
                
                tbl.integer('ailment_id')
                    .unsigned()
                    .notNullable()
                    .references('ailment_id')
                    .inTable('ailments')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE')
                
                tbl.integer('strain_id')
                    .unsigned()
                    .notNullable()
                    .references('strain_id')
                    .inTable('strains')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE')
                
                tbl.integer('attribute_id')
                    .unsigned()
                    .notNullable()
                    .references('attribute_id')
                    .inTable('strain_attributes')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE')
            })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExist('recommends')
};
