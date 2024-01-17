import posts from "../data/post.js";

const postController = {
  getAllPosts: (req, res) => {
    if (!posts) {
      res.status(404).send("No posts found");
    }
    res.status(200).json(posts);
  },
};

export default postController;
