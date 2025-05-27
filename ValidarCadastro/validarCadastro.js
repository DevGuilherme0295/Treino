
function validarCadastro(){
    const Nome = document.getElementById("nome").value
    const Idade = Number(document.getElementById("idade").value)
    const Email = document.getElementById("email").value
    if(Nome === ""){
        resultado.innerHTML = `Nome está vazio!`
        return;
    }
    if(Idade < 18){
        resultado.innerHTML = `Você é menor de idade!`
        return;
    }
    if(!Email.includes("@") || !Email.includes(".com")){
        resultado.innerHTML = `O email não possui ou o "@" ou o ".com"`
        return;
    }
    resultado.innerHTML = `Cadastro realizado com sucesso!`
}