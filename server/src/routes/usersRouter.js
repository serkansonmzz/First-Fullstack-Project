import { Router } from "express";
import users from "./../data/user.js";

const router = Router();

router.get("/users", (req, res) => {
  if (!users) {
    res.status(404).send("No users found");
  }
  res.send(users);
});

router.get("/users/:id", (req, res) => {
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
});

export default router;
