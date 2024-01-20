import userModel from "./../models/userModel.js";

const userController = {
  getAllUsers: (req, res) => {
    userModel
      .getUsers()
      .then((users) => res.status(200).send(users))
      .catch((error) =>
        res.status(500).send("Internal server error ", error.message)
      );
  },
  getUserById: (req, res) => {
    const id = req.params.id;
    if (isNaN(Number(id))) {
      res.status(400).send("Id must be a number");
    }
    userModel
      .getUser(id)
      .then((user) => {
        if (user) {
          res.send(user);
        } else {
          res.status(404).send("User not found");
        }
      })
      .catch((error) =>
        res.status(500).send("Internal server error ", error.message)
      );
  },
  createUser: (req, res) => {
    const user = req.body;
    if (!user.name || !user.email) {
      res.status(400).send("Name and email are required");
    }
    userModel
      .addUser(user)
      .then(() => res.status(201).send("User created"))
      .catch((error) =>
        res.status(500).send("Internal server error ", error.message)
      );
  },
  updateUser: (req, res) => {
    const id = req.params.id;
    const user = req.body;

    if (isNaN(Number(id))) {
      res.status(400).send("Id must be a number");
    }
    if (!user.name || !user.email) {
      res.status(400).send("Name and email are required");
    }
    userModel
      .updateUser(user, id)
      .then(() => res.status(200).send("User updated"))
      .catch((error) =>
        res.status(500).send("Internal server error ", error.message)
      );
  },
  deleteUser: (req, res) => {
    const id = req.params.id;
    if (isNaN(Number(id))) {
      res.status(400).send("Id must be a number");
    }
    userModel
      .deleteUser(id)
      .then(() => res.status(200).send("User deleted"))
      .catch((error) =>
        res.status(500).send("Internal server error ", error.message)
      );
  },
};

export default userController;
