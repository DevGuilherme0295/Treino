
const hora = Number(document.getElementById(Horas))
const valor = Number(document.getElementById(valorHora))
function valorPagamento() {
   
    if(Horas <= 0 ){
        resultado.innerHTML = Horas.value * valorHora.value;
        resultado.innerHTML = `Não pode colocar um valor menor ou igaul a zero para horas trabalhadas`
    }
    if(resultado > 2000){
        resultado.innerHTML = Horas.value * valorHora.value;
        resultado.innerHTML = `Parabéns pelo sálario`
    }
}
