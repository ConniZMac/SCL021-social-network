import { navigate } from "../router/routes.js";

function wall() {
  const postsWall = document.createElement("div");
  postsWall.className = "wall";
  const logo = document.createElement("img");
  logo.src = "./img/logo2.png"
  logo.className = "logo";
  const post = document.createElement("input");
  post.className = "post";
  postsWall.appendChild(logo);
  postsWall.appendChild(post);
 
  /*const linkWall = postsWall.querySelector("#logInUser");
  linkWall.addEventListener("click", (event) => {
  event.preventDefault();
  navigate("login");
  });*/

  return postsWall;
}



export { wall }
