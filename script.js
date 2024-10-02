function submiting(){

  
    let nome = document.getElementById('name').value;
    let sobrenome = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    let csenha = document.getElementById('confirm').value;
    if(senha !== csenha){
    alert("As senhas não condizem");
    }
    else{
      alert("login: "+email+"\nsenha: "+senha)
    }
window.location.href='done.html'
  }