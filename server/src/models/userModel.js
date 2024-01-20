import openDb from "../database/database.js";

const getUsers = async () => {
  try {
    const query = "SELECT * FROM users";
    const db = await openDb();
    const users = await db.all(query);
    return users;
  } catch (error) {
    console.error(error);
  }
};

const getUser = async (id) => {
  try {
    const query = "SELECT * FROM users WHERE id = ?";
    const db = await openDb();
    const user = await db.get(query, id);
    return user;
  } catch (error) {
    console.error(error);
  }
};

const addUser = async (user) => {
  try {
    const query = "INSERT INTO users (name, email) VALUES (?, ?)";
    const db = await openDb();
    const result = await db.run(query, user.name, user.email);
    return result;
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (user, id) => {
  try {
    const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";
    const db = await openDb();
    await db.run(query, user.name, user.email, id);
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (id) => {
  try {
    const query = "DELETE FROM users WHERE id = ?";
    const db = await openDb();
    await db.run(query, id);
  } catch (error) {
    console.error(error);
  }
};

export default { getUsers, getUser, addUser, updateUser, deleteUser };
