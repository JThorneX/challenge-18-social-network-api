const { User, Thought } = require("../models");

module.exports = {
  // all users
  getAllUsers(req, res) {
    User.find()
      .then((Users) => res.json(Users))
      .catch((err) => res.status(500).json(err));
  },
  // single user by its id and populate data
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((User) =>
        !User
          ? res.status(404).json({ message: "No User with that ID Found." })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
  // new user
  createUser(req, res) {
    User.create(req.body)
      .then((User) => res.json(User))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // update a user by its id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $set: body },
      { runValidators: true, new: true }
    )
      .then((User) =>
        !User
          ? res.status(400).json({ message: "No User with this ID Found." })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
  // remove user by its id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.userId })
      .then((User) =>
        !User
          ? res.status(404).json({ message: "No User with this ID Found." })
          : res.json({ message: "User has been deleted." })
      )
      .catch((err) => res.status(500).json(err));
  },

  // add a new friend to friends list
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { runValidators: true, new: true }
    )
      .then((User) =>
        !User
          ? res.status(404).json({ message: "No User with this ID Found." })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },

  // remove a friend from friends list
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { friendId: req.params._id } } },
      { runValidators: true, new: true }
    )
      .then((User) =>
        !User
          ? res.status(404).json({ message: "No User with this ID Found." })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
};
