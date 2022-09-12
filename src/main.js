import { logInWithGoogle} from './firebase/authservice.js';

import {navigate} from './router/routes.js';

const path = window.location.pathname;
switch (path) {
  case "/":
    console.log("Hola")
    navigate("login");
    document.getElementById("googleButton").addEventListener("click",() => {
      logInWithGoogle();
    })
    break;

   case "/register":
    navigate("register");
    document.getElementById("register").addEventListener("click",() => {
      showRegisterPage();
    })
    break;

  case "/profile":
    navigate("profile");
    break;
  case "/addPost":
    navigate("addPost");
    break; 
  case "/updatePost":
    // let substr =  window.location.search.substring(1)
    navigate("updatePost"); //, substr
    break; 
  default:
    navigate("login");
    break;
}


//export {path};