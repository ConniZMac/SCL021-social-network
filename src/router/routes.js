import { login } from "../templates/login.js";
import { register } from "../templates/register.js";
import { wall } from "../templates/posts.js";

  const routes = {
      '/': {
        template: login(),
      },
      'register': {
        template: register(),
      },
      'wall': {
        template: wall(),
      },
 }
      
  
  function navigate(route) { //, substr = ""
      console.log(route)
      const template = routes[route].template;
      history.pushState({}, route); //, `${path}?${substr}`
      const root = document.getElementById('root');
      root.innerHTML = '';
      root.appendChild(template);//element
     
    }
    
    export { navigate, routes};
