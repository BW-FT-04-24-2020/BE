exports.seed = function(knex) {
      return knex('strains').insert([
        {strain_name: '	Cracker-Jack', strain_type: 'sativa', strain_desc: 'This cannabis sativa strain combines Jack Herer with Green Crack to produce a potent buzz. '},
        {strain_name: 'Amnesia', strain_type: 'sativa', strain_desc: 'passing on uplifting, creative, and euphoric effects ideal for treating mood disorders'},
        {strain_name: 'Berry White', strain_type: 'hybrid', strain_desc: 'Berry is famous in its own right for its even, balanced effects that offer relaxation from stress and anxiety along with a sense of euphoria. This strain is perfect for inspiring an upbeat mood and may lead to conversation and creative pursuits.'},
        {strain_name: 'Gelato', strain_type: 'hybrid', strain_desc: 'Physical relaxation comes on strong, but many find themselves still mentally agile enough to stay productive and creative when enjoying Gelato during the day.'},
        {strain_name: 'Afghan Kush', strain_type: 'indica', strain_desc: 'Revered for its heavy resin content and powerfully sedating effects, Afghan Kush is a top choice for anyone looking to relax after a long day.'},
        {strain_name: 'Chocolate-Chunk', strain_type: 'indica', strain_desc: 'Chocolate Chunk by T.H. Seeds is a pure indica that will meld you with the couch.  Very fast flowering of 55 days, great for sea-of-green growing method.'},
      ]);
};
