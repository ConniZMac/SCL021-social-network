import { navigate } from "../router/routes.js";
import {createPost} from "../firebase/databaseservice.js"
import {login} from "../templates/login.js"
function wall() {
  //Feed
  const postsWall = document.createElement("div");
  postsWall.className = "wall";

  // Fondo de frutas y verduras
  const bgFruit = document.createElement("div");
  bgFruit.className = "bgTop";
  postsWall.appendChild(bgFruit);
  
  //Fondo logo celeste
  const bglogo=document.createElement("div");
  bglogo.className= "bgLeFestin";
  bgFruit.appendChild(bglogo);
  
  //Logo Le Festin
  const logo = document.createElement("img");
  logo.src = "./img/logo2.png";
  logo.className = "logoFeed";
  bglogo.appendChild(logo);

  //Div contenedeor de nombre usuario y boton salir.
  const userName = document.createElement("div");
  userName.className = ('user');
  const logOutLogo= document.createElement("img");
  logOutLogo.className = ('logOutLogo');
  logOutLogo.src = "./img/logout.png";

  //const dataUser = document.createElement('h4');
  //dataUser.className = ('dataUser');
  //dataUser.innerHTML = `<span class="h4bold">Hola!</span> ${wall.displayName}`;
  postsWall.appendChild(userName);
  userName.appendChild(logOutLogo);
  

  //Fondo para contener los post amarillo
  const bgPost = document.createElement("div");
  bgPost.className = "bgPost";
  postsWall.appendChild(bgPost);
  
  //Título para escribir posts
  const title = document.createElement("h2");
  title.innerHTML = "¿Qué estas preparando?";
  title.className = "title";
  bgPost.appendChild(title);

  //Input para escribir posts
  const post = document.createElement("textarea");
  post.className = "post";
  bgPost.appendChild(post);

  //Botón para publicar posts
  const postBtn = document.createElement("button");
  postBtn.innerHTML = "Publicar";
  postBtn.className = "postBtn";
  bgPost.appendChild(postBtn);
  
  //Contenedor de post
  const containerPost = document.createElement("div");
  containerPost.className="cPost";
  postsWall.appendChild(containerPost);

  //Funcion para publicar posts en el muro
//const printPost = postBtn.querySelector("#postBtn");
postBtn.addEventListener("click", (event) => {
const valuePost = post.value;
console.log ("Nuestro boton de publicar sí funciona!");
createPost(valuePost);
navigate("wall");
});

  // función boton logout
  const logOut= logOutLogo.querySelector(".logOutLogo")
  logOutLogo.addEventListener("click", () => {
  console.log ("Nuestro boton de salir sí funciona!");
   navigate("/");
  
  });

  return postsWall;
}



export { wall };
