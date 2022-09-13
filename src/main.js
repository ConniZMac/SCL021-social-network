import {navigate, 
        routes} from './router/routes.js';

const path = window.location.pathname;
navigate(path)
/*switch (path) {
  case "/":
    console.log("Hola")
    navigate("/");
    break;

  case "/register":
    navigate("/register");
    break;

  case "/wall":
    navigate("/wall");
    break;

  /*case "/addPost":
    navigate("addPost");
    break; 
  case '/updatePost':
    // let substr =  window.location.search.substring(1)
    navigate('updatePost'); //, substr
    break; 

  default:
    navigate('login');
    break;
}
*/

