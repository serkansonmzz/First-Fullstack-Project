import postModel from "./../models/postModel.js";

const postController = {
  getAllPosts: (req, res) => {
    postModel
      .getAllPosts()
      .then((posts) => res.status(200).json(posts))
      .catch((error) => res.status(500).json(error));
  },
  getPostById: (req, res) => {
    const id = req.params.id;
    if (isNaN(Number(id))) {
      res.status(400).send("Id must be a number");
    }
    postModel
      .getPost(id)
      .then((post) => res.status(200).json(post))
      .catch((error) => res.status(500).json(error));
  },
  createPost: (req, res) => {
    postModel
      .addPost(req.body)
      .then(() => res.status(201).json({ message: "Post created" }))
      .catch((error) => res.status(500).json(error));
  },
  updatePost: (req, res) => {
    const {
      params: { id },
      body,
    } = req;

    if (isNaN(Number(id))) {
      res.status(400).send("Id must be a number");
    }
    if (!body.title || !body.content) {
      res.status(400).send("Title and Content are required");
    }

    postModel
      .updatePost(body, id)
      .then(() => res.status(200).json({ message: "Post updated" }))
      .catch((error) => res.status(500).json(error));
  },
  deletePost: (req, res) => {
    const id = req.params.id;
    if (isNaN(Number(id))) {
      res.status(400).send("Id must be a number");
    }
    postModel
      .deletePost(id)
      .then(() => res.status(200).json({ message: "Post deleted" }))
      .catch((error) => res.status(500).json(error));
  },
};

export default postController;
