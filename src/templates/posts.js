import { navigate } from "../router/routes.js";

function wall() {
  const postsWall = document.createElement("div");
  postsWall.className = "wall";
  const logo = document.createElement("img");
  logo.className = "logo";
  const post = document.createElement("input");
  post.className = "post";
  postsWall.appendChild(logo);
  postsWall.appendChild(post);
  document.getElementById("root").appendChild(postsWall);
}

export { wall };
