import users from "./../data/user.js";

const userController = {
  getAllUsers: (req, res) => {
    if (!users) {
      res.status(404).send("No users found");
    }
    res.status(200).send(users);
  },
  getUser: (req, res) => {
    const id = req.params.id;
    try {
      if (isNaN(Number(id))) {
        res.status(400).send("Id must be a number");
      }
      const user = users.find((user) => user.id === parseInt(id));
      if (!user) {
        res.status(404).send("No user found");
      }
      res.send(user);
    } catch (error) {
      return res.status(500).send("Internal server error ", error.message);
    }
  },
};

export default userController;
