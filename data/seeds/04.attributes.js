exports.seed = function(knex) {
      return knex('strain_attributes').insert([
        {strain_id: 1, effects: 'Energetic,Creative,Focused,Happy,Euphoric', flavor: 'Sweet,Woody,Citrus'},
        {strain_id: 2, effects: 'Happy,Euphoric,Energetic,Creative,Uplifted	', flavor: 'Earthy,Sweet,Skunk'},
        {strain_id: 3, effects: 'Relaxed,Euphoric,Happy,Uplifted,Sleepy', flavor: 'Berry,Sweet,Blueberry'},
        {strain_id: 4, effects: 'depression relief', flavor: 'energetic'},
        {strain_id: 5, effects: 'Relaxed,Sleepy,Happy,Hungry,Euphoric', flavor: 'Earthy,Flowery,Woody'},
        {strain_id: 6, effects: 'Relaxed,Sleepy,Happy,Euphoric,Hungry', flavor: 'Sweet,Woody,Earthy'},
      ]);
};
