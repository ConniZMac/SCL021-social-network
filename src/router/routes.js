  import { login } from '../templates/login.js';
  import { register } from '../templates/register.js';

  const routes = {
      login: {
        path: '/',
        template: login(),
      },


        /*addEvents:()=>{
            // agregar el addvenet listener del boton
            document.getElementById("register").addEventListener("click",() => {
              console.log("'hola")
              //showRegisterPage();
            })*/
        
      }
  
  function navigate(route) { //, substr = ""
      console.log(route)
      const template = routes[route].template;
      const addEvents =  routes[route].addEvents
      const path = routes[route].path; 
      history.pushState({}, route); //, `${path}?${substr}`
      const root = document.getElementById('root');
      root.innerHTML = ' ';
      const element = document.createElement('div');
      element.innerHTML=template;
      root.appendChild(element);
      //addEvents()
    }
    
    export { navigate };
