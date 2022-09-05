function register() {
    const html = /*html*/ `
    <div class='bg-login'>
      <div class='bg-green'>
      <img class='logo' width='200'  src='./img/logo.png' />
            <p>¡Red social para amante de la cocina! </p>
            <h2>Inicia sesión</h2>
            <input type='email' id="email" placeholder='Correo electrónico' />
            <input type='password' id='password' placeholder='Contraseña' />
            <p id="alertLogin"></p>
            
            <button class='logInUser' id='loginUser'> Entrar </button>
            <p class="message">¿Aún no tienes una cuenta? <a href="#" id="register" class='btn-register'>Regístrate aquí </a></p>
            <p>O ingresa con</p>
            <button id='logInButton'>
              <img width='25' src="./img/googleicon.png" /> Ingresa con Google
            </button>
        </div>
    </div>`;
    return html;
  }
  
  export { register };