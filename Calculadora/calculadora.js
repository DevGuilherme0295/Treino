
function somar(){
    const N1 = Number(document.getElementById("n1").value)
    const N2 = Number(document.getElementById("n2").value)
    sinal.innerHTML = "+"
    let total = N1 + N2;
    resultado.innerHTML = `O resultado da operação é ${total}`

}
function diminuir(){
    const N1 = Number(document.getElementById("n1").value)
    const N2 = Number(document.getElementById("n2").value)
    sinal.innerHTML = "-"
    let total = N1 - N2;
    resultado.innerHTML = `O resultado da operação é ${total}`

}
function multiplicar(){
    const N1 = Number(document.getElementById("n1").value)
    const N2 = Number(document.getElementById("n2").value)
    sinal.innerHTML = "*"
    let total = N1 * N2;
    resultado.innerHTML = `O resultado da operação é ${total}`

}
function dividir(){
    const N1 = Number(document.getElementById("n1").value)
    const N2 = Number(document.getElementById("n2").value)
    sinal.innerHTML = "/"
    let total = N1 / N2;
    resultado.innerHTML = `O resultado da operação é ${total}`

}