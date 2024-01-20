document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    fetch("http://localhost:8080/users"),
    fetch("http://localhost:8080/posts"),
  ])
    .then(async ([usersResponse, postsResponse]) => {
      if (!usersResponse.ok) throw new Error("Users fetch failed");
      if (!postsResponse.ok) throw new Error("Posts fetch failed");

      const users = await usersResponse.json();
      const posts = await postsResponse.json();

      let usersList = users
        .map(
          (user) =>
            `<li>${user.name} | <button data-id="${user.id}" class="selectBtn btn btn-success btn-sm">Select</button></li>`
        )
        .join("");

      let postsList = posts
        .map(
          (post) =>
            `<div class="card mb-3">
            <div class="card-header">${post.createdAt}</div>
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.content}</p>
            </div>
          </div>`
        )
        .join("");

      document.querySelector("#users").innerHTML = usersList;
      document.querySelector("#posts").innerHTML = postsList;

      document.querySelectorAll(".selectBtn").forEach((button) => {
        button.addEventListener("click", (event) => {
          const userId = event.target.getAttribute("data-id");
          const user = users.find((user) => user.id.toString() === userId);
          if (user) {
            document.querySelector("#emailDisplay").innerHTML = `
            <p>
            <b>${user.email}</b>
            </p>
          `;
          }
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
