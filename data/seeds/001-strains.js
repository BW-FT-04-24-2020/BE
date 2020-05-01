
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('strains').del()
    .then(function () {
      // Inserts seed entries
      return knex('strains').insert([
        {
          "strain_id": 1,
          "name": "Afpak",
          "race": "hybrid",
          "flavors": "'Earthy', 'Chemical', 'Pine'",
          "positive": "'Relaxed', 'Hungry', 'Happy', 'Sleepy'",
          "negative": "'Dizzy'",
          "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Lack of Appetite'",
          "description": "'Afpak, named for its direct Afghani and Pakistani landrace heritage, is a beautiful indica-dominant hybrid with light green and deep bluish purple leaves. The taste and aroma are floral with a touch of lemon, making the inhale light and smooth. Its effects start in the stomach by activating the appetite. There is also a potent relaxation that starts in the head and face, and gradually sinks down into the body. Enjoy this strain if you’re suffering from stress, mild physical discomfort, or having difficulty eating.'"},
          {
            "strain_id": 2,
            "name": "African",
            "race": "sativa",
            "flavors": "'Spicy/Herbal', 'Pungent', 'Earthy'",
            "positive": "'Euphoric', 'Happy', 'Creative', 'Energetic', 'Talkative'",
            "negative": "'Dry Mouth'",
            "medical": "'Depression', 'Pain', 'Stress', 'Lack of Appetite', 'Nausea', 'Headache'",
            "description": "African refers to the indigenous varieties of cannabis (or landraces) that grow natively in this region of the world. Because of this region's latitude and climate, these native landrace strains tend to be sativa in structure and effect.'"},
            {
          "strain_id": 3,
          "name": "Afternoon Delight",
          "race": "hybrid",
          "flavors": "'Pepper', 'Flowery', 'Pine'",
          "positive": "'Relaxed', 'Hungry', 'Euphoric', 'Uplifted', 'Tingly'",
          "negative": "'Dizzy', 'Dry Mouth', 'Paranoid'",
          "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Cramps', 'Headache'",
          "description": "'Afternoon Delight, created by Colorado Seed Inc., is a difficult strain to track down. Noted for its small, dense nuggets and an aroma of pine and pungent terpenes, Afternoon Delight is described as an indica-dominant hybrid with a hazy aura that engulfs the mind and body. But indulge with caution, as this hybrid has also been known for its potency.'"
            },
            {
              "strain_id": 4,
              "name": "Afwreck",
              "race": "hybrid",
              "flavors": "'Pine', 'Earthy', 'Flowery'",
              "positive": "'Relaxed', 'Happy', 'Creative', 'Uplifted', 'Sleepy'",
              "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes'",
              "medical": "'Pain', 'Stress', 'Headache', 'Fatigue', 'Headaches', 'Muscle Spasms'",
              "description": "'Afwreck is a hybrid cross of Afghani and Trainwreck.Strong sativa effects with immediate head-concentrated high.'" 
            },
            {
              "strain_id": 5,
          "name": "Agent Orange",
          "race": "hybrid",
          "flavors": "'Citrus', 'Orange', 'Sweet'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Energetic', 'Uplifted'",
          "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes'",
          "medical": "'Depression', 'Pain', 'Stress', 'Nausea', 'Headache', 'Headaches'",
          "description": 
            "Don’t let the name scare you! The only herbicidal warfare Agent Orange will wage is between the excellence of this strain's flavors and uplifting effects. A well-balanced hybrid that combines the smooth Orange Velvet with the bold Jack the Ripper, Agent Orange will capture your senses. Wonderful smells of oranges and fresh-cut citrus fruit will entice you immediately, while the pigments of deep maroon and purple will make this bud stand out in a sea of green. The effects are uplifting and motivating, serving as a great mood enhancer if you are feeling lethargic or depressed."
            },
            {
          "strain_id": 6,
          "name": "Agent Tangie",
          "race": "hybrid",
          "flavors": "'Skunk', 'Pepper', 'Citrus'",
          "positive": "'Euphoric', 'Happy', 'Creative', 'Uplifted', 'Focused'",
          "negative": "'Dry Mouth', 'Dry Eyes'",
          "medical": "'Depression', 'Stress', 'Cramps', 'Fatigue', 'Eye Pressure'",
          "description": "'For those craving a cerebral buzz with a citrus kick, 3C Agent Tangie is perfect. The glittery colas are light green with a zesty, floral flavor. Its effects linger in the crown of the skull and disperse throughout the body in steady waves of invigoration. This strain may assist those suffering from perpetual procrastination, depression, and fatigue."
            },
            {
              "strain_id": 8,
          "name": "Alaska",
          "race": "sativa",
          "flavors": "'Earthy', 'Woody', 'Pungent'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Energetic', 'Focused'",
          "negative": "'Dizzy', 'Paranoid', 'Dry Eyes', 'Anxious'",
          "medical": "'Depression', 'Pain', 'Stress', 'Lack of Appetite', 'Headaches'",
          "description": "'Alaska, developed by Tikun Olam, is an Israeli strain comprised of 70% sativa genetics. With uplifting effects intended for daytime consumption, Alaska has been found to successfully treat an array of medical symptoms including inflammation, pain, nausea, insomnia, and gastrointestinal disorders.'"
            },
            {
              "strain_id": 9,
          "name": "Alaska Thunder Grape",
          "race": "hybrid",
          "flavors": "'Grape', 'Pepper', 'Skunk'",
          "positive": "'Relaxed', 'Euphoric', 'Creative', 'Tingly', 'Focused'",
          
          "medical": "'Pain', 'Stress', 'Eye Pressure'",
          "description": "'From Sonoma County comes Alaska Thunder Grape, a hybrid strain that balances genetics from Matanuska Thunder Fuck and Grape Ape. With floral flavors of lavender and hibiscus, Alaska Thunder Grape delivers heavy euphoric effects that promote rest and relaxation.'"
            },
            {
              "strain_id": 10,
          "name": "Alaskan Ice",
          "race": "sativa",
          "flavors": "'Earthy', 'Pine', 'Minty'",
          "positive": "'Euphoric', 'Happy', 'Creative', 'Energetic', 'Uplifted'",
          "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes'",
          "medical": "'Depression', 'Pain', 'Stress', 'Fatigue', 'Headaches'",
          "description": "'Alaskan Ice by Green House Seeds is a powerful sativa that crosses a euphoric White Widow hybrid with the energizing buzz of Haze. Frostlike resin blankets the buds in a promise of soaring psychoactivity, anchored only by its moderate CBD content. The intensity of this 70% sativa strain is recommended for evening consumption and unproductive weekends. Alaskan Ice is a slight variant of Moby Dick, but poses a greater challenge to growers; cultivators with the expertise to raise Alaskan Ice will be rewarded with a highly potent harvest of sour, spicy buds following a 9 week flowering period. The high resin content of Alaskan Ice has made this strain a favorite among hash producers and patients with severe symptoms.'"
            },
            {
              "strain_id": 11,
          "name": "Alaskan Thunder Fuck",
          "race": "sativa",
          "flavors": "'Earthy', 'Woody', 'Pine'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Energetic', 'Uplifted'",
          "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes'",
          "medical": "'Depression', 'Pain', 'Stress', 'Lack of Appetite', 'Headache', 'Fatigue'",
          "description": "'Alaskan Thunder Fuck (also referred to as ATF, Matanuska Thunder Fuck or Matanuska Tundra) is a legendary sativa-dominant strain originating in the Matanuska Valley area of Alaska. According to the legend, it was originally a Northern California sativa crossed with a Russian ruderalis, but sometime in the late 70s it was crossed with Afghani genetics to make it heartier. ATF usually presents large, beautifully frosted buds with incredibly strong odors of pine, lemon, menthol, and skunk. Known for possessing a relaxing yet intensely euphoric high, it is also described as having a “creeper” effect as well as pronounced appetite enhancement.'"
            },
            {
              "strain_id": 12,
              "name": "Albert Walker",
              "race": "hybrid",
              "flavors": "'Earthy', 'Pine', 'Skunk'",
              "positive": "'Relaxed', 'Hungry', 'Euphoric', 'Happy', 'Focused'",
              "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes'",
              "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Headache', 'Muscle Spasms'",
              "description": "'Albert Walker is an indica-dominant hybrid with unknown origins, but is thought to have descended from Afghan Skunk and bred in the Pacific Northwest. Evidence of its lineage is found in its sour lemon and skunky smell and heavy full-body effects that can last for several hours. Albert Walker’s euphoric and relaxing qualities make it a go-to strain for patients treating depression and anxiety, and may also have benefits for chronic pain and appetite loss. This clone-only strain may come as a challenge for some growers as the plants tend to require frequent attention and maintenance. However, the high yields following its 8-week flowering cycle could be considered a satisfactory reward.'"
            },
            {
              "strain_id": 13,
              "name": "Alchemy",
              "race": "hybrid",
              "flavors": "'Cheese', 'Chemical', 'Sweet'",
              "positive": "'Relaxed', 'Hungry', 'Uplifted', 'Tingly', 'Sleepy'",
              
              "medical": "'Insomnia', 'Stress', 'Fatigue', 'Headaches', 'Eye Pressure'",
              "description": "'Alchemy is a 50/50 hybrid cannabis strain that was conjured by combining Chemdawg and Querkle. This creation from TGA Genetics comes wreathed in purple fan leaves and lavender-tipped buds. With an aroma of sour grapes and earthy musk, Alchemy delivers a balance of relaxing body effects and engaged cerebral invigoration. Boasting high levels of THC, Alchemy is sure to restore both your mood and appetite.'"
            },
            {

              "strain_id": 14,
              "name": "Alf",
              "race": "hybrid",
              "flavors": "'Diesel', 'Pungent', 'Tropical'",
              "positive": "'Relaxed', 'Euphoric', 'Happy', 'Creative', 'Giggly'",
              "negative": "'Dry Mouth'",
              "medical": "'Depression', 'Insomnia', 'Stress', 'Muscle Spasms'",
              "description": "'The indica-dominant hybrid Alf was created by crossing Animal Pie (an Animal Cookies and Cherry Pie hybrid) and Black Raven (White Fire Alien OG x ’09 Cookies) from The Captain’s Connection. With dessert-like notes of cookies and sour cherry, Alf’s aroma is as enticing as its purple crystal-coated buds. Patients seeking relief from pain, spasms, nausea, and appetite may want to give this relaxing hybrid a try.'"
            },
            {
              "strain_id": 15,
          "name": "Alice in Wonderland",
          "race": "sativa",
          "flavors": "'Citrus', 'Grapefruit', 'Earthy'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Uplifted', 'Focused'",
          "negative": "'Dizzy', 'Dry Mouth', 'Dry Eyes', 'Anxious'",
          "medical": "'Depression', 'Stress', 'Lack of Appetite', 'Fatigue', 'Muscle Spasms'",
          "description": "'Alice in Wonderland is a mostly sativa strain with euphoric cerebral effects. It provides an elevated sensory experience, making it a favorite strain for creative pastimes, outdoor activities, a laid-back weekend, or daytime stress relief. Said to be a descendant of Willy’s Wonder, Alice in Wonderland has many therapeutic qualities, especially for those suffering from anxiety or depression.'"
            },
            {
              "strain_id": 16,
          "name": "Alien Abduction",
          "race": "hybrid",
          "flavors": "'Earthy', 'Nutty', 'Lemon'",
          "positive": "'Relaxed', 'Happy', 'Creative', 'Focused'",
          "negative": "'Dry Mouth', 'Dry Eyes'",
          "medical": "'Depression', 'Insomnia', 'Lack of Appetite', 'Fatigue', 'Headaches'",
          "description": "'Alien Abduction is an OG Kush hybrid bred by So-Cal medical collective Ocean Grown Genetics, who crossed an Alien OG male with the Ether cut of Alien Dawg. These seeds have been highly sought after by growers, as they are known to have great germination rates and multiple excellent phenotypes, all of which are robust and vigorous plants. Most phenotypes exhibit typical OG Kush smells and flavors, and pack a high-THC punch that combines a potent head buzz with a strongly sedating body high. For many patients, Alien Abduction is a great appetite stimulant and sleep aid.'"
            },
            {
              "strain_id": 17,
          "name": "Alien Apparition",
          "race": "hybrid",
          "flavors": "'Berry', 'Blueberry', 'Citrus'",
          "positive": "'Hungry', 'Euphoric', 'Creative', 'Aroused'",
          "negative": "'Dry Mouth']",
          "medical": "'Depression', 'Cramps', 'Fatigue', 'Headaches', 'Eye Pressure'",
          "description": "'Alien Apparition is a cleverly named cross from Franchise Genetics. This spectral anomaly is brought to the material sphere with the help of a Ghost/Natural Born Killer hybrid and Alien Technology. Known for its happy, relaxing qualities, Alien Apparition combines the OG Kush-like elements of Ghost OG and Alien Technology’s euphoric sedation to create a potent hybrid best suited to afternoon consumption. Enjoy this strain to enhance mood and subdue general aches and pains.'"
            },
            {
              "strain_id": 18,
          "name": "Alien Asshat",
          "race": "hybrid",
          "flavors": "'Citrus', 'Pungent', 'Lemon'",
          "positive": "'Euphoric', 'Happy', 'Creative', 'Energetic', 'Giggly'",
          "negative": "'Dizzy', 'Dry Mouth'",
          "medical": "'Depression', 'Pain', 'Stress', 'Nausea', 'Fatigue'",
          "description": "'Alien Asshat is a hybrid cannabis strain grown by Sky High Gardens in Washington. With a staggeringly high THC content, Alien Asshat launches you into the cosmos with a powerful euphoric blast. Its buds are a tangle of green calyxes and leaves wrapped in a constellation of shining crystal resin. If you’re new to cannabis, be sure to start small with this heavy-hitter.'"
            },
            {
              "strain_id": 19,
          "name": "Alien Bubba",
          "race": "indica",
          "flavors": "'Earthy', 'Ammonia', 'Diesel'",
          "positive": "'Relaxed', 'Euphoric', 'Sleepy', 'Focused', 'Giggly'",
          "negative": "'Dizzy', 'Dry Mouth'",
          "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Lack of Appetite'",
          "description": "'Alien Bubba is the intergalactic cross of the renowned Bubba Kush and the heady space invader, Alien Kush. This two-fold Kush blend offers mellow sedation with a mental aura most would describe as introspective or meditative. Its bouquet is earthy and floral, and when combusted, Alien Bubba shows off a pungent tea and herbaceous grassiness that is smooth on the exhale. Enjoy this heady heavy-hitter close to the end of the day to maximize its sedative effects.'"
            },
            {
              "strain_id": 20,
          "name": "Alien Dawg",
          "race": "indica",
          "flavors": "'Earthy', 'Pungent', 'Spicy/Herbal'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Uplifted', 'Sleepy'",
          "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes', 'Anxious'",
          "medical": "'Insomnia', 'Pain', 'Stress', 'Nausea', 'Fatigue'",
          "description": "'Descending from Northern California and Afghanistan genetics, Alien Dawg is a cross between Chemdawg and Alien Technology with a THC content of up to 20%. With a sour and pungent odor, Alien Dawg has a light, bitter taste and presents brilliant mind and body effects.'"
            },
            {
              "strain_id": 21,
          "name": "Alien Dutchess",
          "race": "sativa",
          "flavors": "'Berry', 'Lemon', 'Sweet'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Uplifted', 'Focused'",
          
          "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Lack of Appetite'",
          "description": "'Alien Dutchess by Cresco Labs brings together strong euphoria and deep relaxation to create a strain that is as potent as it is refined. Created by crossing Dutch Treat Haze and Alien OG, this strain exhibits a spicy, herbaceous aroma with hints of pine and lemon. The earthy and citrus notes shine through upon consumption. Alien Dutchess has been known to stimulate appetite and help abate nausea, headaches, and stress.'"
            },
            {
              "strain_id": 22,
          "name": "Alien Hallucination",
          "race": "hybrid",
          "flavors": "'Chemical', 'Diesel', 'Earthy'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Uplifted'",
          
          "medical": "'Depression', 'Pain', 'Stress', 'Headache', 'Fatigue', 'Muscle Spasms'",
          "description": "'Alien Hallucination is a hybrid cannabis strain that is believed to be a cross between the sedating Tahoe Alien and LSD, a classic Amsterdam hybrid known for its trippy head buzz. Bred by Alien Genetics, this strain will abduct the mind while your body remains anchored in deep physical relaxation.'"
            },
            {
              "strain_id": 23,
          "name": "Alien Inferno",
          "race": "hybrid",
          "flavors": "'Pine', 'Diesel', 'Earthy'",
          "positive": "'Euphoric', 'Happy', 'Creative', 'Energetic', 'Talkative'",
          
          "medical": "'Depression', 'Pain', 'Stress', 'Lack of Appetite', 'Fatigue'",
          "description": "'Using a White Fire #6 and Alien OG hybrid and crossing it again with Diablo, LivWell created Alien Inferno. Rock solid buds slathered in trichomes and red pistils, Alien Inferno is a heavy-handed OG hybrid that can help relieve pain, boost creativity, and help you unwind. With the taste of earth, pine, and lemon, this potent indica-dominant hybrid will take care of even the most experienced connoisseur.'"
            },
            {
              "strain_id": 24,
          "name": "Alien Kush",
          "race": "indica",
          "flavors": "'Woody', 'Flowery', 'Earthy'",
          "positive": "'Relaxed', 'Euphoric', 'Uplifted', 'Sleepy', 'Giggly'",
          "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes'",
          "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Headache', 'Headaches'",
          "description": "'Alien Kush is a potent cross of LVPK and Alien Dawg that originally hails from California, not deep space. It may have you feeling a little spacey, though, as this mostly indica hybrid touches down in the brain first, giving active, sometimes-psychedelic effects that are more traditionally sativa. The active buzz settles over time into a relaxing body buzz that will dissolve both stress and pain. Alien Kush plants have average yields, but they are hardy, easy-to-grow plants, indoors or out. The light green buds have a covering of red or orange hairs and should be airy. This strain has a piney smell, but the taste is a subtle spiciness that is reminiscent of tea.'"
            },
            {
              "strain_id": 25,
          "name": "Alien OG",
          "race": "hybrid",
          "flavors": "'Lemon', 'Flowery', 'Earthy'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Uplifted', 'Focused'",
          "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes', 'Anxious'",
          "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Muscle Spasms'",
          "description": "'First available as a clone in California’s Bay Area and now in seed form from Cali Connection, Alien OG is a cross of Tahoe OG and Alien Kush. One of the most potent strains available today, this indica-dominant hybrid has tested as high as 28% THC. Alien OG has the typical lemon-pine “OG” smell and flavor, and an intense high that combines heavy indica body effects and a psychedelic cerebral buzz. Beginners and novices, be sure to take it slow with this heavy-hitter.'"
            },
            {
              "strain_id": 26,
          "name": "Alien Reunion",
          "race": "hybrid",
          "flavors": "'Skunk', 'Diesel', 'Pungent'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Creative', 'Uplifted'",
          
          "medical": "'Pain', 'Lack of Appetite', 'Headaches', 'Inflammation', 'Muscle Spasms'",
          "description": "'Alien Reunion is an indica-dominant cross of Alien OG and Alien Dawg bred by Cannobi Genetics. Its dense colas emit a pungent mix of flavors that include sweet fruity tones of cherry and lemon combined with a skunky, diesel note. The relaxing effects of Alien Reunion calm the body while stimulating the mind with an energetic and creative rush that helps you stay productive without feeling sluggish.'"
            },
            {
              "strain_id": 27,
          "name": "Alien Rift",
          "race": "indica",
          "flavors": "'Earthy', 'Chemical', 'Citrus']",
          "positive": "'Relaxed', 'Hungry', 'Euphoric', 'Happy', 'Creative']",
          "negative": "'Dry Mouth']",
          "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Headaches']",
          "description": "'Alien Rift by Ocean Grown Seeds is the thoroughly enhanced phenotype of Alien Abduction specifically backcrossed for better hash production. With a tart scent of lemon and spice and buds dense with trichomes, Alien Rift is certain to please the senses. This strain is the product of crossing Alien Abduction, Alien Dawg (Ether cut), and Alien OG. With that much extraterrestrial activity, you know this indica is out of this world! Use Alien Rift’s laidback effects to curb stress and moderate physical pain.'"
            },
            {
              "strain_id": 28,
          "name": "Alien Rock Candy",
          "race": "hybrid",
          "flavors": "'Sweet', 'Earthy', 'Citrus'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Uplifted', 'Sleepy'",
          "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes', 'Anxious'",
          "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Lack of Appetite'",
          "description": "'Alien Rock Candy by Alien Genetic is an indica-dominant hybrid with an aroma as sweet as the name suggests. This Sour Dubble and Tahoe Alien cross captures a fruity, citrus aroma that carries through until the exhale. Full relaxation of the mind and body make this strain ideal for the end of an active or stressful day, with a heaviness that segueways nicely into sleep. The effects may take a few minutes to peak, but Alien Rock Candy packs a powerful euphoric punch once it sets in. A good choice for both novice and expert growers alike, Alien Rock Candy finishes around 8 weeks into its flowering cycle.'"
            },
            {
              "strain_id": 29,
          "name": "Alien Sour Apple",
          "race": "hybrid",
          "flavors": "'Apple', 'Orange', 'Ammonia'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Creative', 'Uplifted'",
          
          "medical": "'Depression', 'Stress', 'Lack of Appetite', 'Muscle Spasms'",
          "description": "'Alien Sour Apple is a sativa-dominant hybrid that mixes the genetics of Alien Dawg with Sour Apple. Bred by Franchise Genetics, Alien Sour Apple tastes sweet and sour, like a Granny Smith apple. Its heady sativa effects provide a lift of energy and incite an optimistic sense of euphoria.'"
            },
            {
              "strain_id": 30,
          "name": "Alien Stardawg",
          "race": "sativa",
          "flavors": "'Earthy', 'Pungent', 'Rose'",
          "positive": "'Euphoric', 'Happy', 'Creative', 'Uplifted'",
          "negative": "'Dry Mouth'",
          "medical": "'Depression', 'Stress', 'Lack of Appetite'",
          "description": "'Alien Stardawg is a sativa-dominant hybrid cross of Alien Kush and Stardawg bred by Green Beanz Seeds. Stretchy plants produce large yields of frosty green, red, blue, and purple colored buds with pleasing cherry hash and chem-fuel flavors and a potent well-rounded high.'"
            },
            {
              "strain_id": 31,
          "name": "Alien Technology",
          "race": "indica",
          "flavors": "'Spicy/Herbal', 'Chemical', 'Woody'",
          "positive": "'Relaxed', 'Happy', 'Uplifted', 'Giggly'",
          "negative": "'Dry Mouth'",
          "medical": "'Depression', 'Pain', 'Stress', 'Headaches'",
          "description": "'Very little is known about Alien Technology other than it is a landrace strain selected from a handful of seeds acquired by breeder OBSoul33t from a US soldier returning from Afghanistan. It is a pure indica that features light green buds, incredible trichome production, and a spicy, hashy flavor/aroma with fuel undertones. Reports indicate that the high is more stimulating than your typical indica, while lasting as long as 6 hours. Alien Technology has been used in breeding some of today’s most potent hybrids such as Alien Dawg and Alien Kush.'"
            },
            {
              "strain_id": 32,
          "name": "Aliens On Moonshine",
          "race": "indica",
          "flavors": "'Berry', 'Butter', 'Citrus']",
          "positive": "'Relaxed', 'Happy', 'Tingly', 'Focused'",
          
          "medical": "'Depression', 'Stress', 'Headaches', 'Inflammation'",
          "description": "'Aliens On Moonshine by Sin City Seeds is a potent CBD-rich phenotype of The Cali Connection’s Sour Alien crossed with White Moonshine. This indica-dominant strain emits a funky aroma that is a clashing of sour, sweet, and chemicals. The 5:1 CBD/THC ratio gives Aliens On Moonshine potent medicinal properties while remaining mostly functional. Its effects land firmly in the body and can assist with inflammation, irritability, and minor physical discomfort. The uplifting, clearheaded buzz and soothing physical effects make Aliens On Moonshine an excellent add-in or standalone strain for CBD lovers everywhere.'"
            },
            {
              "strain_id": 33,
              "name": "Allen Wrench",
              "race": "sativa",
              "flavors": "'Berry', 'Tropical', 'Mango']",
              "positive": "'Euphoric', 'Happy', 'Creative', 'Energetic', 'Uplifted']",
              "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes', 'Anxious']",
              "medical": "'Depression', 'Pain', 'Stress', 'Lack of Appetite', 'Nausea']",
              "description": "'A popular strain for sativa-lovers, Allen Wrench presents the best qualities of its parents, Trainwreck and NYC\\xa0Diesel with crisp flavors of sour fruit. Its aroma has been characterized as sour\\xa0and flowery, leaving a lingering scent of fruit. Allen Wrench is known to provide users with a long-lasting cerebral high and fill an entire room with its strong essence. The buds have a dark-green color and dark foliage with orange pistils growing out. Allen Wrench also has a 10-11 week flowering time and medium to medium-high THC content.'"
            },
            {
              "strain_id": 34,
          "name": "Allkush",
          "race": "indica",
          "flavors": "'Honey', 'Spicy/Herbal', 'Earthy'",
          "positive": "'Relaxed', 'Happy', 'Sleepy'",
          "negative": "'Dry Eyes'",
          "medical": "'Pain', 'Stress', 'Eye Pressure'",
          "description": "'Allkush, 2nd prize winner at the 2005 Highlife Cannabis Cup, is a hashy Kush blend bred by Paradise Seeds of Amsterdam. This resinous flower hails from the “Hippie Trail” that winds through Pakistan and Afghanistan, creating a 75/25 indica-dominant strain that soothes without binding the consumer to the couch. With traditional uplifting cerebral elements and a pleasant sedation on the body, Allkush shines on patients seeking relief from sleep disorders, anxiety, and depression.'"
            },
            {
              "strain_id": 35,
              "name": "Aloha",
              "race": "sativa",
              "flavors": "'Tropical', 'Sweet', 'Citrus'",
              "positive": "'Relaxed', 'Happy', 'Creative', 'Energetic', 'Uplifted'",
              "negative": "'Dizzy', 'Dry Mouth', 'Dry Eyes'",
              "medical": "'Depression', 'Pain', 'Stress', 'Fatigue', 'Headaches'",
              "description": "'Aloha is a sativa strain that leaves users with an upbeat, energetic buzz and may also be helpful in treating pain such as migraines. Aloha’s flowers will be large and fluffy, with plenty of room for white wispy hairs and sparkling crystals. The aroma of this strain is that of grass and citrus for a fresh experience that may have you thinking of your next island getaway. Its sativa effects can be a little much for some users, so those who are looking for less mental stimulation should be warned.'"
            },
            {
              "strain_id": 36,
          "name": "Aloha Limone",
          "race": "hybrid",
          "flavors": "'Citrus', 'Earthy', 'Pungent']",
          "positive": "'Relaxed', 'Happy', 'Creative', 'Energetic', 'Uplifted']",
          "negative": "'Dry Mouth', 'Dry Eyes']",
          "medical": "'Depression', 'Pain', 'Stress']",
          "description": "'The smell of Aloha Limone has been described as, “a fruit tree rotting in the Kona sun.” Citrus notes are native to this Hawaiian Sunrise and Nina Limone cross, but the plant also expresses latent floral and pungent elements from recessive Kush genetics. Plan on cheeky euphoria and a physical lightness that encourages outdoor activity. Aloha Limone is a proprietary genetic cross of Colorado Seed Inc.'"
            },
            {
              "strain_id": 37,
          "name": "Alohaberry",
          "race": "hybrid",
          "flavors": "'Berry', 'Sweet', 'Citrus'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Energetic', 'Giggly'",
          "negative": "'Dry Mouth', 'Paranoid', 'Dry Eyes'",
          "medical": "'Depression', 'Pain', 'Stress', 'Nausea', 'Fatigue'",
          "description": "'Originating from the tropical islands of Hawaii, Alohaberry releases a pleasant aroma and taste of tropical berries. It is known for its unique sweet taste and because it is an equal hybrid, the effects are both mind and body. Flowering time for this plant is approximately 8-9 weeks.'"
            },
            {
              "strain_id": 38,
          "name": "Alpha Blue",
          "race": "sativa",
          "flavors": "'Blueberry', 'Sweet', 'Berry'",
          "positive": "'Relaxed', 'Happy', 'Energetic', 'Uplifted', 'Focused'",
          "negative": "'Dizzy', 'Dry Mouth', 'Dry Eyes', 'Anxious'",
          "medical": "'Depression', 'Insomnia', 'Stress', 'Lack of Appetite', 'Fatigue'",
          "description": "'Alpha Blue, also known as Dream Diesel (or DD), is a high-flying sativa that combines Blue Dream and NYC Diesel. In 2011 this compelling blend claimed two 2nd place prizes for a sativa at the High Times’ Medical Cup in Denver and San Francisco. Its buds are glazed with sugary trichomes and take on hues of deep red and violet. The aroma is a combination of tart blueberry and sour candy that create a pungent mixture of earthy berry and Haze upon exhale. The sweet fragrance of Alpha Blue brings with it uplifting effects that produce a calming, relaxed mood without putting you to sleep. The cerebral and happy buzz is a great tool when coping with stress and anxiety.'"
            },
            {
              "strain_id": 40,
          "name": "Alpha Express",
          "race": "sativa",
          "flavors": "'Spicy/Herbal', 'Nutty', 'Tea'",
          "positive": "'Happy', 'Creative', 'Energetic', 'Uplifted', 'Focused'",
          "negative": "'Dry Mouth'",
          "medical": "'Depression', 'Cramps', 'Fatigue', 'Headaches', 'Inflammation'",
          "description": "'Alpha Express is an introspective sativa strain that descends from Alpha Blue and Ghost Train Haze. With a complex flavor that spans sour juniper and musky cedar notes, Alpha Express delivers spacey cerebral effects perfect for meditative or creative activities. Its buds bloom with trichome-covered calyxes that carry a red tint as the flowers mature.'"
            },
            {
              "strain_id": 41,
              "name": "Alpha OG",
              "race": "hybrid",
              "flavors": "'Berry', 'Earthy', 'Tea'",
              "positive": "'Relaxed', 'Hungry', 'Euphoric', 'Happy', 'Creative'",
              "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes'",
              "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Fatigue'",
              "description": "'Alpha OG from Alpha Medic is an OG Kush phenotype that took 2nd place in the 2014 Los Angeles Cannabis Cup. Its thick layer of crystal trichomes helps to explain why this pungent, pine-scented strain consistently tests over 20% THC when grown optimally. Conditions best treated with high-THC strains like Alpha OG include sleep apnea, appetite and weight loss, nausea, and chronic pain.'"
            },
            {
              "strain_id": 42,
          "name": "Alpine Blue",
          "race": "hybrid",
          "flavors": "'Berry', 'Blueberry', 'Pine'",
          "positive": "'Euphoric', 'Creative', 'Energetic', 'Uplifted', 'Aroused'",
          
          "medical": "'Depression', 'Pain', 'Stress', 'Inflammation', 'Muscle Spasms'",
          "description": "'Alpine Blue is a 60/40 sativa-dominant hybrid that combines Blue Mystic and Power Plant, who pass on uplifting euphoric effects alongside a complex aroma of blueberry and woody pine. While some phenotypes tend toward the indica side of the spectrum, even its common sativa expression induces calming full-body effects. Patients typically look to Alpine Blue for daytime relief of anxiety and mood disorders, gastrointestinal pain, and inflammation.'"
            },
            {
              "strain_id": 43,
              "name": "Alpine Star",
              "race": "indica",
              "flavors": "'Pine', 'Earthy', 'Lemon'",
              "positive": "'Relaxed', 'Euphoric', 'Happy', 'Creative', 'Uplifted'",
              "negative": "'Dry Mouth'",
              "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Fatigue'",
              "description": "'Alpine Star, often labeled as Alpine OG, is an earthy, citrus mix of Tahoe OG and Sensi Star genetics. Zesty lemon flavors lead Alpine Star’s wave of relaxing indica effects. The pain relieving properties of Alpine Star radiate from the head and neck, calming anxieties and muscle tension as the effects descend to the lower extremities.'"
            },
            {
              "strain_id": 44,
          "name": "Ambrosia",
          "race": "hybrid",
          "flavors": "'Earthy', 'Tropical', 'Butter'",
          "positive": "'Relaxed', 'Hungry', 'Euphoric', 'Happy', 'Tingly'",
          "negative": "'Dizzy', 'Dry Mouth', 'Dry Eyes', 'Anxious'",
          "medical": "'Depression', 'Pain', 'Stress', 'Lack of Appetite', 'Headache', 'Fatigue'",
          "description": "Stemming from her parents, God Bud and Burmese, the Ambrosia strain is a high that will hit you almost instantaneously and will be felt throughout your body. Her mother, Burmese is a sativa from the Mighty Mite Seed Company and was voted #1 People's Choice at the Cannabis Culture Toker's Bowl in 2002. For dad, God Bud from Jordan of the Islands, is a mostly indica plant, popular for it's tropical sweet flavor. Ambrosia produces a large amount of dense and sticky buds with yellow leaves and orange hairs."
            },
            {
              "strain_id": 45,
          "name": "American Dream",
          "race": "hybrid",
          "flavors": "'Earthy', 'Sweet', 'Pungent'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Creative', 'Focused'",
          "negative": "'Dry Mouth', 'Dry Eyes'",
          "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Inflammation'",
          "description": "'American Dream by Sensi Seeds is an indica-dominant strain that blends Afghan Skunk with Jamaican and Hawaiian genetics. Its name is charged with meaning, mainly in that this indica represents “honest toil, personal improvement, and enjoying the fruits of one’s labor,” as Sensi Seeds puts it. Earthy and skunky in flavor, American Dream helps you pursue happiness with balanced uplifting, social effects appropriate for day or evening use.'"
            },
            {
              "strain_id": 46,
          "name": "American Kush",
          "race": "indica",
          "flavors": "'Sweet', 'Lemon', 'Lime'",
          "positive": "'Relaxed', 'Happy', 'Tingly', 'Sleepy'",
          "negative": "'Dry Mouth', 'Dry Eyes'",
          "medical": "'Insomnia', 'Pain', 'Stress', 'Headaches', 'Muscle Spasms'",
          "description": "'American Kush, by Alphakronik Genes (AKG), is a 70/30 indica-dominant combination of Pre-98 Bubba Kush and Sin City Kush. It is a robust strain with large bulbous colas that deliver the profound, relaxing body effects that have made Kush strains so popular. With a smooth palate of flavors ranging from fresh lemon to spicy notes of lavender and coffee, American Kush is a delightful answer to muscle spasms, chronic pain, and nausea.'"
            },
            {
              "strain_id": 47,
          "name": "Americano",
          "race": "indica",
          "flavors": "'Earthy', 'Diesel', 'Spicy/Herbal'",
          "positive": "'Relaxed', 'Euphoric', 'Creative', 'Focused', 'Aroused'",
          
          "medical": "'Pain', 'Nausea', 'Headaches'",
          "description": "'Americano is a Canadian strain released by Enterprise Seeds. It is a Northern Lights/Skunk hybrid that is named for the American consumers it was designed to attract. When tourists, notably Americans, came to Vancouver looking to purchase bulk cannabis, they wanted their buds to have “bag appeal,” or stunning visual characteristics that made it easy to sell. Americano is known for its heavy coat of trichromes and its thick dense colas. The flavors and aromas of Americano stay true to its Skunk lineage and produce a sweet, piney musk. The effects are exactly what you would expect from an indica-driven hybrid: fast-acting, relaxing, and sleepy. Americano is a solid answer to symptoms of insomnia, headaches, and chronic pain.'"
            },
            {
              "strain_id": 50,
          "name": "Amnesia",
          "race": "sativa",
          "flavors": "'Earthy', 'Sweet', 'Citrus'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Energetic', 'Uplifted'",
          "negative": "'Dry Mouth', 'Paranoid', 'Dry Eyes', 'Anxious'",
          "medical": "'Depression', 'Pain', 'Stress', 'Lack of Appetite', 'Headache', 'Headaches'",
          "description": "'Amnesia is typically a sativa-dominant cannabis strain with some variation between breeders. Skunk, Cinderella 99, and Jack Herer are some of Amnesia’s genetic forerunners, passing on uplifting, creative, and euphoric effects ideal for treating mood disorders. Growers should expect a 9-10 week flowering period with moderate yields. This strain normally has a high THC and low CBD profile and produces intense psychotropic effects that new consumers should be wary of.'"
            },
            {
              "strain_id": 52,
              "name": "Amnesia Haze",
              "race": "sativa",
              "flavors": "'Citrus', 'Lemon', 'Earthy'",
              "positive": "'Euphoric', 'Happy', 'Creative', 'Energetic', 'Uplifted'",
              "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes'",
              "medical": "'Depression', 'Pain', 'Stress', 'Headache', 'Fatigue', 'Headaches'",
              "description": "'With earthy flavors of lemons and citrus, Amnesia Haze is a perfect strain to start your day with a smile. The uplifting, energetic buzz is one you won’t soon forget. Its genetics have been traced back to the South Asian and Jamaican landrace strains, and this Cannabis Cup winner (1st place 2004, 1st place Sativa Cup 2012) has since been popularized in the coffee shops of Amsterdam.'"
            },
            {
              "strain_id": 53,
          "name": "Ancient Kush",
          "race": "indica",
          "flavors": "'Cheese', 'Skunk', 'Citrus'",
          "positive": "'Relaxed', 'Creative', 'Energetic', 'Sleepy', 'Aroused'",
          
          "medical": "'Pain', 'Stress', 'Lack of Appetite', 'Headaches'",
          "description": "'Ancient Kush is an indica-dominant hybrid strain whose genetic background is lost to history, but most certainly contains the age-old characteristics of Afghani indicas. Its short bushy plants bloom with resinous buds that tend to darken purple near the end of maturation. Skunky lemon and smooth earthiness make up this indica’s aroma in a fragrant introduction of her relaxing, mood-warming effects.'"
            },
            {
              "strain_id": 54,
          "name": "Ancient OG",
          "race": "indica",
          "flavors": "'Earthy', 'Diesel', 'Nutty'",
          "positive": "'Relaxed', 'Hungry', 'Euphoric', 'Happy', 'Sleepy'",
          "negative": "'Dry Mouth', 'Dry Eyes'",
          "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Headaches'",
          "description": "'Ancient OG from Bodhi Seeds is a mostly indica strain descended from an Iranian landrace and Snow Lotus. Its thickly resinous buds exude aromatic notes of earthy pine and sweet citrus that are fully realized in Ancient OG’s taste. This high-yielding indica is best suited for sea of green gardens and has a 70 day flowering time. Outdoor cultivators should prepare for harvest in the month of October.'"
            },
            {
              "strain_id": 55,
          "name": "Anesthesia",
          "race": "indica",
          "flavors": "'Sweet', 'Earthy', 'Pungent'",
          "positive": "'Relaxed', 'Hungry', 'Euphoric', 'Happy', 'Sleepy'",
          "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes'",
          "medical": "'Insomnia', 'Pain', 'Stress', 'Headache', 'Headaches', 'Inflammation'",
          "description": "'Anesthesia is the result of breeding the popular old school Afghan Skunk indica with Herojuana. It was created in 2007 by breeder Whazzup in an effort to keep the Afghani Skunk strain going as it had long been only available as a cutting from another plant. Anesthesia was selected as a “Breeder’s Choice” Selection by Dutch seed company Sannie’s Seeds, which has helped to spread its popularity and availability. When grown, these plants branch quite a bit and may grow wider and closer to the ground rather than tall before flowering at 9-10 weeks. Anesthesia flowers are dense and covered in crystals. They have a musky, earthy smell and flavor that is common in its Afghan heritage. Known for its strong, sedative indica buzz, this is a strain that’s often recommended for pain—just as its name would suggest.'",
            },
            {
              "strain_id": 56,
          "name": "Angel OG",
          "race": "indica",
          "flavors": "'Pungent', 'Earthy', 'Berry'",
          "positive": "'Relaxed', 'Euphoric', 'Happy', 'Sleepy'",
          "negative": "'Dry Mouth'",
          "medical": "'Insomnia', 'Pain', 'Stress'",
          "description": 
            "Angel OG is a fruity Kush cross that drapes the body in mellow effects from head to toe. This strain's OG Kush x Blackberry lineage gives the buds an aroma of earth, pine, and sweetness while supplying the consumer with potent physical effects. The strong relaxing properties of Angel OG are ideal for patients suffering from chronic physical pain, insomnia, and stress."
           },
           {
            "strain_id": 57,
            "name": "Animal Cookies",
            "race": "hybrid",
            "flavors": "'Sweet', 'Earthy', 'Pungent'",
            "positive": "'Relaxed', 'Euphoric', 'Happy', 'Uplifted', 'Sleepy'",
            "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes', 'Anxious'",
            "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Fatigue'",
            "description": "'Animal Cookies is the child of the legendary hybrid marijuana strains Girl Scout Cookies and Fire OG. This clone-only strain flowers in 9-10 weeks, and grows into dense, frosty green buds tipped with purple. True to its name, Animal Cookies has a sweet, sour aroma with heavy full-body effects that will impress any veteran consumer. This potent medicine might be overkill for mild symptoms, but its ability to obliterate severe pain and insomnia is unprecedented.'"
           },
           {
            "strain_id": 58,
            "name": "Anonymous OG",
            "race": "indica",
            "flavors": "'Earthy', 'Pungent', 'Citrus'",
            "positive": "'Relaxed', 'Euphoric', 'Happy', 'Sleepy', 'Aroused'",
            "negative": "'Dry Mouth'",
            "medical": "'Insomnia', 'Fatigue', 'Headaches', 'Eye Pressure', 'Inflammation'",
            "description": "'The 3C Anonymous OG greets the nose with distinctive woodsy, citrus, diesel scent that indica connoisseurs all know and love. Anonymous OG is a 3C Farms select cut of 3C Kushishima. Its round dense buds are wrapped in deep green calyxes that drip with resin and glitter with trichomes. The flavor is deep, satisfying the most refined palate. This strain is incredibly relaxing and sedative, and should be consumed in the evening for best results.'"
           },
           {
            "strain_id": 59,
            "name": "Ape Shit",
            "race": "hybrid",
            "flavors": "'Grape', 'Sweet', 'Lavender'",
            "positive": "'Relaxed', 'Euphoric', 'Happy', 'Creative', 'Giggly'",
            "negative": "'Dry Mouth']",
            "medical": "'Depression', 'Insomnia', 'Stress', 'Lack of Appetite', 'Eye Pressure'",
            "description": "'Ape Shit is the genetic offspring of three quality cannabis strains. By crossing Purple Urkle, Acapulco Gold, and Cinderella 99, this hybrid strain blends deep body effects against bright, heady mental energy. Certain phenotypes exhibit a strong grape odor, but typically this strain smells of lavender with a touch of sweetness. Enjoy this strain as a means to quell depression and anxiety.'"
           },
           {
            "strain_id": 60,
            "name": "Apollo 11",
            "race": "hybrid",
            "flavors": "'Pungent', 'Cheese', 'Citrus'",
            "positive": "'Relaxed', 'Euphoric', 'Happy', 'Uplifted'",
            "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes'",
            "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Headache', 'Headaches']",
            "description": "'Apollo 11 is a potent hybrid cannabis strain with strong cerebral effects that might just have your head feeling like it’s making a moon landing. It’s another strain created by breeders Brothers Grimm and is the half-sister to another heady sativa, Apollo 13. Apollo 11 also has Genius (a Jack Herer phenotype) as a mother, but was crossed with Cinderella 99 to create this uplifting strain. This Apollo shares the family trait of an extremely fast flowering time, usually before 8 weeks. There is some variety among plants, but in general they will stay shorter and develop lots of branches and bud sites. The resinous flowers will have a strong, sharp citrus aroma and a slightly subtler lemon flavor. Effective for treating stress and moderate pain, for a few hours this strain will give you a first-class trip out of this world.'"
           },
           {
            "strain_id": 61,
            "name": "Apollo 13",
            "race": "hybrid",
            "flavors": "'Earthy', 'Sweet', 'Woody'",
            "positive": "'Relaxed', 'Euphoric', 'Happy', 'Energetic', 'Giggly'",
            "negative": "'Dizzy', 'Dry Mouth', 'Paranoid', 'Dry Eyes'",
            "medical": "'Depression', 'Pain', 'Stress', 'Headache', 'Fatigue', 'Headaches'",
            "description": "'Apollo 13 consistently receives quite a bit of praise that has come to be expected with strains created by breeders Brothers Grimm. A cross between two of their other successful strains, P75 and Genius (a Jack Herer phenotype), this strain has a decorated lineage. Apollo 13 has the distinction of being especially rare as it is said that only 500 seeds came from the original stock and the few cuttings are the stuff of legend. This plant is less finicky than most and is often recommended for new grower. It also flowers very quickly at 7-8 weeks, producing large sticky buds. Apollo 13’s aroma is unique and very pungent. Its scent has been described as peppery and earthy with a punch of both sour fruit and citrus, while the taste takes on the herbal notes of tea with a skunky aftertaste. As its name suggests, this strain will have your head in the clouds as its effects are cerebral and energizing. While the more popular version of this hybrid is the sativa-dominant plant, be aware that an indica-dominant version is also out there.'"
           },
           {
            "strain_id": 62,
            "name": "Appalachia",
            "race": "hybrid",
            "flavors": "'Pungent', 'Earthy', 'Woody'",
            "positive": "'Relaxed', 'Hungry', 'Euphoric', 'Happy', 'Creative'",
            "negative": "'Dry Eyes'",
            "medical": "'Pain', 'Cramps', 'Lack of Appetite', 'Inflammation', 'Muscle Spasms'",
            "description": "'Appalachia is a hybrid cross between Green Crack and Tres Dawg bred by High & Lonesome Seeds. A layer of white, cloudy trichomes gives the buds a sage green color with darker leaves and fiery hairs peeking out from underneath. With an aroma of earthy pine and subtle fruit, Appalachia delivers a dreamy and yet functional cerebral buzz paired with relaxing full-body effects. Sensory perception and appetite are sharpened while pain and other symptoms dull, making Appalachia a coveted strain among medical patients and recreational consumers alike.'"
           },
           {
            "strain_id": 63,
            "name": "Appalachian Power",
            "race": "sativa",
            "flavors": "'Tropical', 'Grape', 'Citrus'",
            "positive": "'Euphoric', 'Happy', 'Creative', 'Energetic', 'Focused'",
            
            "description": "'Appalachian Power by Soulshine Cannabis is a potent sativa-dominant strain with a rich genetic lineage. By crossing The Appalachian (Grape Punch x Life Saver) with The Power (Island Sweet Skunk x White Widow), Appalachian Power was born. With a deep roster of genetic varieties at its back, it’s no surprise that Appalachian Power’s aroma and flavor offer a unique and rewarding palate of grape, banana, and pineapple. The effects pack a stimulating kick that is not for the faint of heart. It can cause mild paranoia in the uninitiated, but if the dosage is respected, this strain can suit all manner of physical activity and combat lethargy.'"
           },
           {
            "strain_id": 64,
            "name": "Apple Jack",
            "race": "hybrid",
            "flavors": "'Apple', 'Pungent', 'Skunk'",
            "positive": "'Euphoric', 'Happy', 'Creative', 'Talkative', 'Uplifted'",
            "negative": "'Dizzy', 'Dry Eyes', 'Anxious'",
            "medical": "'Depression', 'Stress', 'Nausea', 'Fatigue', 'Muscle Spasms'",
            "description": "'Apple Jack is the beautiful and popular hybrid cross of Jack Herer and White Widow. This potent combination embodies the uplifted clarity of Jack Herer while applying a warm, soothing relaxation to the body. This strain works wonders for patients and consumers suffering from chronic physical pain and nausea. Apple Jack’s aroma, as you might guess, is one of sweet sliced apples with hints of skunk and earth.'"
           },
           {
            "strain_id": 65,
            "name": "Apple Kush",
            "race": "hybrid",
            "flavors": "'Apple', 'Diesel', 'Sweet'",
            "positive": "'Relaxed', 'Euphoric', 'Happy', 'Tingly'",
            "negative": "'Dry Mouth', 'Dry Eyes'",
            "medical": "'Depression', 'Insomnia', 'Pain', 'Stress', 'Eye Pressure'",
            "description": "'Apple Kush is the indica-dominant hybrid cross of Sour Diesel and Pure Kush. This strain leads with powerful cerebral effects that align well with people suffering from depression or anxiety, and follows with body effects that are ideal for curbing inflammation. Indulge in this Oregonian favorite later in the day, as the strain’s creeping sedative effects can be rather weighty.'",
           },
           {
            "strain_id": 66,
            "name": "Appleberry",
            "race": "indica",
            "flavors": "'Berry', 'Earthy', 'Flowery'",
            "positive": "'Relaxed', 'Sleepy', 'Focused'",
            
            "medical": "'Depression', 'Stress', 'Lack of Appetite', 'Headaches', 'Muscle Spasms'",
            "description": "'Appleberry by Sumo Seeds in an indica-dominant yield machine. Bred from (Dynamite x Bubblelicious) x White Widow, this strain has classic Central Asian and Central American roots while expressing a terpene profile all its own. The strain’s aroma exemplifies its title, smelling of a subtle apple and berry. Its effects are extremely relaxing, bordering on sedative, imbuing the limbs with a warm weighted aura. Utilize Appleberry as an anxiolytic and for all-around pain relief.Appleberry won 1st place in the 'Bio' category at the 2016 Highlife Cup in Amsterdam.'"
           }




      ]);
    });
};
