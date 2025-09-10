export interface Joke {
  id: number;
  setup: string;
  punchline: string;
  category: string;
}

export const jokes: Joke[] = [
  {
    id: 1,
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
    category: "science"
  },
  {
    id: 2,
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!",
    category: "general"
  },
  {
    id: 3,
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!",
    category: "food"
  },
  {
    id: 4,
    setup: "Why don't eggs tell jokes?",
    punchline: "They'd crack each other up!",
    category: "food"
  },
  {
    id: 5,
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear!",
    category: "animals"
  },
  {
    id: 6,
    setup: "Why did the math book look so sad?",
    punchline: "Because it was full of problems!",
    category: "education"
  },
  {
    id: 7,
    setup: "What do you call a sleeping bull?",
    punchline: "A bulldozer!",
    category: "animals"
  },
  {
    id: 8,
    setup: "Why don't programmers like nature?",
    punchline: "It has too many bugs!",
    category: "tech"
  },
  {
    id: 9,
    setup: "What did the ocean say to the beach?",
    punchline: "Nothing, it just waved!",
    category: "nature"
  },
  {
    id: 10,
    setup: "Why did the coffee file a police report?",
    punchline: "It got mugged!",
    category: "food"
  },
  {
    id: 11,
    setup: "What do you call a dinosaur that crashes his car?",
    punchline: "Tyrannosaurus Wrecks!",
    category: "animals"
  },
  {
    id: 12,
    setup: "Why don't skeletons fight each other?",
    punchline: "They don't have the guts!",
    category: "general"
  }
];

export const getRandomJoke = (): Joke => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
};