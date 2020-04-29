
exports.up = function(knex) {
    return knex.schema
    .createTable('strains', tbl => {
        tbl.increments('strain_id')

        tbl.string('strain_name', 255)
            .notNullable()
            .unique()
        
        tbl.string('strain_type', 255)
            .notNullable()

        tbl.string('string_desc', 500)
    })
    
    .createTable('strain_attributes', tbl => {
        tbl.increments('attribute_id')

        tbl.integer('strain_id')
            .unsigned()
            .notNullable()
            .references('strain_id').inTable('strains')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        
        tbl.string('effects', 500)
            .notNullable()
        
        tbl.string('flavor', 500)
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('strains')
    .dropTableIfExists('strain_attributes')
};
