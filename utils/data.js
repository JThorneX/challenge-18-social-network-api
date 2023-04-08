const userNames = [
  "SHall",
  "JThorne",
  "PParker",
  "MDC",
  "AABlackCat",
  "KG",
  "some_more",
  "Stormfly",
  "Scooby_Doo",
  "AngieSage",
  "DPatterson",
  "Vorrill",
  "SaraB",
  "IamNotGoodatNames",
];

const emails = [
  "sophie@aol.com",
  "jthorne@gmail.com",
  "notspiderman@hotmail.com",
  "ihatemoths@hotmail.com",
  "meowmeow@aol.com",
  "kgaang@gmail.com",
  "smores@aol.com",
  "toothless@yahoo.com",
  "scoobydoobydoo@hotmail.com",
  "queste@aol.com",
  "highlands@hotmail.com",
  "sorcerersupreme@gmail.com",
  "manhattenvshercules@aol.com",
  "iamnotgoodatemails@yahoo.com",
];

const thoughts = [
  "i like oreos",
  "i also like oreos",
  "i've met spider-man a bunch",
  "i am so tired",
  "meow meow",
  "can my taunt go off please",
  "i like chocolate and marshmallows",
  "dragons are cool and very real",
  "scooby snax pls",
  "magicks are hard",
  "scotland is cool",
  "heavy attacking is ridiculous",
  "hercules is better than manhatten",
  "i don't know what to say",
];

const reactions = [
  "oreos are overrated",
  "i think spider-man is a hoax",
  "i am also tired",
  "i'm tired AND hungry",
  "meow?",
  "meowmeowmeowmeowmeow",
  "there's something hitting me",
  "scooby snax are delicious",
  "you are so brave for saying that",
  "scotland is the best",
  "no such thing/satellite call mashup is better than any other song",
  "i don't know what to react",
];

const users = [];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () => `${getRandomItem(names)} ${getRandomItem(names)}`;

const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomItem(thoughts),
      username: getRandomName(),
      reactions: [...getReactions(3)],
    });
  }
  return results;
};

const getReactions = (int) => {
  if (int === 1) {
    return getRandomItem(reactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomItem(reactions),
      username: getRandomName(),
    });
  }
  return results;
};

module.exports = { getRandomName, getRandomThoughts };
