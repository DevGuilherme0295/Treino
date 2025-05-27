
function classificarTarefa(){
    const Atividade = document.getElementById("atividade").value
    const Prioridade = Number(document.getElementById("prioridade").value)
    if(Prioridade > 1 && Prioridade > 3){
        resultado.innerHTML = `Prioridade inválida para a atividade ${Atividade}.`
    }else{
        switch (Prioridade){
            case 1:
                resultado.innerHTML = `A atividade ${Atividade} é urgente`
                break;
            case 2:
                resultado.innerHTML = `A atividade ${Atividade} é importante`
                break;
            case 3:
                resultado.innerHTML = `A atividade ${Atividade} é opcional`
                break;
        }
    }
}