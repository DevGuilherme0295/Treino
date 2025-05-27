

function valorPagamento() {

    const hora = Number(document.getElementById("Horas").value)
    const valor = Number(document.getElementById("valorHora").value)

    const total = hora * valor
    if(hora <= 0 ){
        resultado.innerHTML = `Não pode colocar um valor menor ou igaul a zero para horas trabalhadas`;
         
    }else{
       
        if(total > 2000){
            resultado.innerHTML =  `Parabéns pelo sálario ${total}`   
        }else{
             resultado.innerHTML = `O total é ${total}`
        }
    }
    
}
