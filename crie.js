const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const password2Input = document.getElementById('password2');
const termsInput = document.querySelector('input[name="terms"]');
const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (nomeInput.value && sobrenomeInput.value && emailInput.value && passwordInput.value && password2Input.value && termsInput.checked) {
    const userData = {
      nome: nomeInput.value,
      sobrenome: sobrenomeInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      password2: password2Input.value,
      terms: termsInput.checked
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    window.location.href = 'index.html';
  } else {
    alert('Por favor, preencha todos os campos!');
  }
});