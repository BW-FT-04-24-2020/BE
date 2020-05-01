
exports.seed = function(knex) {
      return knex('ailments').insert([
        {ailment: 'pain', ailment_desc: 'back pain', user_id: '1'},
        {ailment: 'stress', ailment_desc: 'high pressure job cant turn off', user_id: '2'},
        {ailment: 'insomnia', ailment_desc: 'cant sleep brain turns', user_id: '3'},
        {ailment: 'anxiety', ailment_desc: 'social situations make me anxious', user_id: '4'},
        {ailment: 'depression', ailment_desc: 'bouts of depression haard to function', user_id: '5'},
        {ailment: 'nerves', ailment_desc: 'new situations make me nervous', user_id: '1'},
      ]);
};
