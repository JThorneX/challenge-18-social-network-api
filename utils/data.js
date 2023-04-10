const users = [
  {
    user: "SHall",
    email: "sophie@aol.com",
    thoughts: [],
    friends: [],
  },
  {
    user: "JThorne",
    email: "jthorne@gmail.com",
    thoughts: [],
    friends: [],
  },
  {
    user: "PParker",
    email: "notspiderman@gmail.com",
    thoughts: [],
    friends: [],
  },
  {
    user: "MDC",
    email: "ihatemoths@hotmail.com",
    thoughts: [],
    friends: [],
  },
  {
    user: "AABlackCat",
    email: "meowmeow@yahoo.com",
    thoughts: [],
    friends: [],
  },
];

const thoughts = [
  {
    thought: "i like oreos",
    createdAt: Date.now(),
    user: "SHall",
    reactions: [],
  },
  {
    thought: "i also like oreos",
    createdAt: Date.now(),
    user: "JThorne",
    reactions: [],
  },
  {
    thought: "i've met spider-man a bunch",
    createdAt: Date.now(),
    user: "PParker",
    reactions: [],
  },
  {
    thought: "i am so tired",
    createdAt: Date.now(),
    user: "MDC",
    reactions: [],
  },
  {
    thought: "meow meow",
    createdAt: Date.now(),
    user: "AABlackCat",
    reactions: [],
  },
];

module.exports = { users, thoughts };
