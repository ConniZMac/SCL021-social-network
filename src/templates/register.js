//Aca creamos nuestra funcion para registrarnos
//Aca empieza la segunda pagina

function register() {
    const html = /*html*/ `
    <div class='bg-login' id="register-page">
      <div class='bg-green'>
      <img class='logo' width='200'  src='./img/logo.png' />
            <p>¡Regístrate! </p>        
            <input type='email' id="registerEmail" placeholder='Correo electrónico' />
            <input type='email' id="createUser" placeholder='Crea tu usuario' />
            <input type='password' id='createPassword' placeholder='Contraseña' />
            <input type='password' id='confirmPassword' placeholder='Confirma tu Contraseña' />
            <p id="alertLogin"></p>
            
            <button class='createAccount' id='createAccount'> Crear cuenta <a href="register" id="register" class='btn-register'>Registrarme </a></button>
           
        </div>
    </div>`;
    return html;
  }

  //función para mostrar pagina de registro con correo, nombre de usuario y contraseña
  function showRegisterPage() {
      let logInPage = document.getElementById("logInPage");
      logInPage.style.display = "none";
      let registerPage = document.getElementById("register-page");
      registerPage.style.display = "block";
  }
  

  export { register, showRegisterPage};