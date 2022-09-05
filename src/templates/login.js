function login() {
  const html = /*html*/ `
  <div class='bg-login'>
    <div class='bg-green'>
    <img class='logo' width='270'  src='./img/logo2.png' />         
          <h2>Inicia sesión</h2>
          <input type='email' id='email'  placeholder='Correo electrónico' />          
          <input type='password' id='password' placeholder='Contraseña' />          
          <p id="alertLogin"></p>                  
          <button class='logInUser' id='logInUser'> Ingresar </button>
          <p class="message">¿Aún no tienes una cuenta? <a href="#" id="register" class='btn-register'>Registrarme </a></p>        
          <button id='googleButton'>
            <img width='25' src="./img/googleicon.png" /> Ingresa con Google
          </button>
      </div>
 </div>`;
  return html;
}

export { login };
