import openDb from "../database/database.js";

const getAllPosts = async () => {
  try {
    const db = await openDb();
    const posts = await db.all("SELECT * FROM posts");
    return posts;
  } catch (error) {
    console.error(error);
  }
};

const getPost = async (id) => {
  try {
    const query = "SELECT * FROM posts WHERE id = ?";
    const db = await openDb();
    const post = await db.get(query, id);
    return post;
  } catch (error) {
    console.error(error);
  }
};
const addPost = async (post) => {
  try {
    const query = "INSERT INTO posts (title, content) VALUES (?, ?)";
    const db = await openDb();
    await db.run(query, post.title, post.content);
  } catch (error) {
    console.error(error);
  }
};

const updatePost = async (post, id) => {
  try {
    const query = "UPDATE posts SET title = ?, content = ? WHERE id = ?";
    const db = await openDb();
    await db.run(query, post.title, post.content, id);
  } catch (error) {
    console.error(error);
  }
};

const deletePost = async (id) => {
  try {
    const query = "DELETE FROM posts WHERE id = ?";
    const db = await openDb();
    await db.run(query, id);
  } catch (error) {
    console.error(error);
  }
};

export default { getAllPosts, addPost, getPost, updatePost, deletePost };
