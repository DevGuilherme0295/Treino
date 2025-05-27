
function login(){
    const Email = document.getElementById("email").value
    const Senha = document.getElementById("senha").value
    const emailValido = "admin@teste.com"
    const senhaValida = "1234"
    if(Email == emailValido && Senha == senhaValida){
        resultado.innerHTML = `Login realizado com sucesso`
    } else{
        resultado.innerHTML = `E-mail ou senha inválidos`
    }
}