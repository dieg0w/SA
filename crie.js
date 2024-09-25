
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const password2Input = document.getElementById('password2');
const termsInput = document.querySelector('input[name="terms"]');

 function submit(){

  const nome = nomeInput.value;
  const sobrenome = sobrenomeInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const password2 = password2Input.value;
  const terms = termsInput.checked;

  const userData = {
    nome,
    sobrenome,
    email,
    password,
    password2,
    terms
  };


  const userDataJSON = JSON.stringify(userData);
  localStorage.setItem('userData', userDataJSON);
  document.querySelector('.submit').form.reset();
};
