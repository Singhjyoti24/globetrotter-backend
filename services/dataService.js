const axios = require('axios');
const Destination = require('../models/Destination');

// AI-Generated Data
const aiGeneratedData = [
  {
    "city": "London",
    "country": "United Kingdom",
    "clues": [
      "This city has a famous clock tower often mistaken for its bell.",
      "It is home to the world's oldest underground railway system."
    ],
    "fun_fact": [
      "Big Ben actually refers to the bell, not the tower itself!",
      "There are more Indian restaurants in this city than in Mumbai or Delhi."
    ],
    "trivia": [
      "London has over 170 museums, more than any other city.",
      "The River Thames was once so polluted it was declared biologically dead."
    ]
  },
  {
    "city": "Sydney",
    "country": "Australia",
    "clues": [
      "This city is home to an iconic opera house with sail-like structures.",
      "A large harbor bridge is often called 'The Coathanger'."
    ],
    "fun_fact": [
      "The Sydney Opera House took 14 years to build instead of the planned 4 years.",
      "Sydney has the world's largest natural harbor."
    ],
    "trivia": [
      "Kangaroos outnumber humans in Australia.",
      "Sydney's Bondi Beach was the first beach in the world to have a dedicated lifeguard service."
    ]
  },
  {
    "city": "Moscow",
    "country": "Russia",
    "clues": [
      "This city is home to a famous square with colorful onion-domed buildings.",
      "It has an underground metro system known for its beautiful architecture."
    ],
    "fun_fact": [
      "The Kremlin is the world's largest medieval fortress still in use.",
      "Moscow’s Metro stations look like underground palaces."
    ],
    "trivia": [
      "The city experiences some of the coldest winters of any major capital.",
      "The Tsar Bell in Moscow is the largest bell ever cast, but it has never rung."
    ]
  },
  {
    "city": "Mexico City",
    "country": "Mexico",
    "clues": [
      "This city was built on top of an ancient Aztec capital.",
      "It is one of the largest cities in the world by population."
    ],
    "fun_fact": [
      "Mexico City sinks by about 12 inches every year due to its soft lakebed foundation.",
      "The city has more museums than any other in the world."
    ],
    "trivia": [
      "It is home to the world's largest pyramid, larger than Egypt’s Great Pyramid.",
      "The Angel of Independence monument was built to commemorate Mexico’s independence from Spain."
    ]
  },
  {
    "city": "Buenos Aires",
    "country": "Argentina",
    "clues": [
      "This city is the birthplace of tango dancing.",
      "It is known for its colorful neighborhood called La Boca."
    ],
    "fun_fact": [
      "Buenos Aires has the widest avenue in the world, spanning 16 lanes.",
      "It has more bookstores per person than any other city in the world."
    ],
    "trivia": [
      "The city was named after the ‘good winds’ that helped sailors arrive safely.",
      "It has a large European influence, with architecture similar to Paris and Madrid."
    ]
  },
  {
    "city": "Seoul",
    "country": "South Korea",
    "clues": [
      "This city is known for its high-tech lifestyle and K-pop culture.",
      "It is home to one of the busiest airports in the world."
    ],
    "fun_fact": [
      "Seoul has free high-speed WiFi almost everywhere, even in public parks!",
      "The city has over 100 museums dedicated to history, art, and culture."
    ],
    "trivia": [
      "The famous dish ‘kimchi’ has over 200 varieties.",
      "Seoul's Lotte World Tower is the 5th tallest building in the world."
    ]
  },
  {
    "city": "Istanbul",
    "country": "Turkey",
    "clues": [
      "This city is the only one in the world that spans two continents.",
      "It was formerly known as Constantinople."
    ],
    "fun_fact": [
      "The Grand Bazaar in this city is one of the world’s oldest and largest covered markets.",
      "The Hagia Sophia was originally a church, then a mosque, then a museum, and is now a mosque again."
    ],
    "trivia": [
      "Istanbul has over 3,000 mosques, more than any other city.",
      "The city’s metro system includes a funicular railway that has been operating since 1875."
    ]
  },
  {
    "city": "Athens",
    "country": "Greece",
    "clues": [
      "This city is known as the birthplace of democracy.",
      "It has an ancient temple dedicated to the goddess of wisdom."
    ],
    "fun_fact": [
      "The Acropolis is one of the most visited monuments in the world.",
      "The first modern Olympic Games were held in this city in 1896."
    ],
    "trivia": [
      "Athens is one of the world’s oldest cities, with a history spanning over 3,400 years.",
      "There are more than 200 ancient theaters in Greece, many still in use today."
    ]
  },
  {
    "city": "Singapore",
    "country": "Singapore",
    "clues": [
      "This city-state is known for its futuristic gardens and skyscrapers.",
      "It has a famous infinity pool on top of three towers."
    ],
    "fun_fact": [
      "Chewing gum is banned in this city-state to keep public spaces clean.",
      "Singapore is one of the only countries in the world without a natural water source."
    ],
    "trivia": [
      "Singapore’s Changi Airport has a butterfly garden and a rooftop pool.",
      "The entire city is smaller than New York City but has over 5 million residents."
    ]
  },
  {
    "city": "Marrakech",
    "country": "Morocco",
    "clues": [
      "This city has a famous marketplace full of snake charmers and storytellers.",
      "It is known as the ‘Red City’ due to its distinct-colored buildings."
    ],
    "fun_fact": [
      "The city’s medina (old town) is a UNESCO World Heritage site.",
      "Marrakech’s souks (markets) sell everything from spices to handcrafted rugs."
    ],
    "trivia": [
      "The Koutoubia Mosque's minaret was used as inspiration for many towers in Spain.",
      "Marrakech has over 300 days of sunshine per year."
    ]
  },
  {
    "city": "Prague",
    "country": "Czech Republic",
    "clues": [
      "This city has a medieval astronomical clock that still works today.",
      "It is known as the ‘City of a Hundred Spires’ due to its many historic churches."
    ],
    "fun_fact": [
      "Prague’s Charles Bridge has 30 statues along its walkway.",
      "Beer is cheaper than water in this city."
    ],
    "trivia": [
      "The Prague Castle is the largest ancient castle complex in the world.",
      "The narrowest street in Prague is only 50 cm wide and has traffic lights for pedestrians."
    ]
  },
  {
    "city": "Hanoi",
    "country": "Vietnam",
    "clues": [
      "This city has a lake with a legendary giant turtle.",
      "It has a famous train street where trains pass just inches from homes."
    ],
    "fun_fact": [
      "The city’s Old Quarter has 36 streets named after the goods historically sold there.",
      "Vietnamese coffee is among the strongest in the world."
    ],
    "trivia": [
      "Hanoi is over 1,000 years old and has been the capital for most of Vietnam’s history.",
      "Egg coffee, a Hanoi specialty, was invented as a milk alternative during shortages."
    ]
  },
  {
    "city": "Dubai",
    "country": "United Arab Emirates",
    "clues": [
      "Home to the tallest building in the world.",
      "Has an artificial archipelago shaped like a palm tree."
    ],
    "fun_fact": [
      "The Burj Khalifa is 828 meters tall, making it the world's tallest building.",
      "Dubai has no personal income tax."
    ],
    "trivia": [
      "Dubai's police force uses luxury cars like Lamborghinis.",
      "ATMs in Dubai dispense gold bars instead of cash."
    ]
  },
  {
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "clues": [
      "Famous for a massive statue that overlooks the city.",
      "Hosts one of the biggest carnival festivals in the world."
    ],
    "fun_fact": [
      "The Christ the Redeemer statue is 30 meters tall.",
      "Rio’s beaches, like Copacabana and Ipanema, attract millions of visitors annually."
    ],
    "trivia": [
      "The Maracanã stadium once held nearly 200,000 spectators for a single game.",
      "The city’s carnival dates back to the 18th century."
    ]
  },
  {
    "city": "Cairo",
    "country": "Egypt",
    "clues": [
      "Home to one of the Seven Wonders of the Ancient World.",
      "A massive river flows through this city."
    ],
    "fun_fact": [
      "The Great Pyramid of Giza was the tallest structure in the world for 3,800 years.",
      "Cairo is often referred to as 'The City of a Thousand Minarets' due to its numerous mosques."
    ],
    "trivia": [
      "Ancient Egyptians used honey as a form of currency.",
      "Cairo’s population is larger than that of most entire countries."
    ]
  }
]

const fetchAndStoreData = async () => {
  try {
    const response = await axios.get('https://headout-globetrotter.pages.dev/assets/data.json');
    const apiData = response.data.map(dest => ({
      city: dest.city,
      country: dest.country,
      clues: dest.clues,
      fun_fact: dest.fun_fact,
      trivia: dest.trivia
    }));

    // Merge API data with AI-generated data, avoiding duplicates
    const allData = [...apiData];

    aiGeneratedData.forEach(aiDest => {
      const exists = allData.some(dest => dest.city === aiDest.city);
      if (!exists) {
        allData.push(aiDest);
      }
    });

    // Store in MongoDB
    await Destination.deleteMany({}); // Clear existing data
    await Destination.insertMany(allData);
    console.log(`Stored ${allData.length} destinations in MongoDB.`);
  } catch (error) {
    console.error('Error fetching/storing data:', error);
  }
};

module.exports = { fetchAndStoreData };
