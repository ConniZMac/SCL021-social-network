import { login } from '../templates/login.js';

const routes = {
    login: {
      path: '/',
      template: login(),
    },

}
function navigate(route) { //, substr = ""
    console.log(route)
    const template = routes[route].template;
    const path = routes[route].path; 
    history.pushState({}, route); //, `${path}?${substr}`
    const root = document.getElementById('root');
    root.innerHTML = ' ';
    const element = document.createElement('div');
    element.innerHTML=template;
    root.appendChild(element);
  }
  
  export { navigate };
