let dolar = 5.79 //valor dolar -- fazer requisição para pegar valor atual

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener ("keyup", () => {
    convert ("usd-to-brl")
})

brlInput.addEventListener ("keyup", () => {
    convert ("brl-to-usd")
})

usdInput.addEventListener("blur", ()=>{
    usdInput.value=formatCurrency(usdInput.value)//inserir a formatação ao clicar fora do campo
})

brlInput.addEventListener("blur", ()=>{
    brlInput.value=formatCurrency(brlInput.value)
})

usdInput.value = "1,00"
convert ("usd-to-brl")

//funções
function formatCurrency(value){
    // Ajustar o valor
    let fixedValue = fixValue(value)

    //Utilizar função de formatar
    let options = {
        useGrouping: false, // impede a colocação de pontos 1.000 = 1000 (não agrupa)
        minimumFractionDigits: 2 // dois digitos apos virgula/ponto
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)

    // Retornar o valor formatado
    return formatter.format(fixedValue)
}

function fixValue (value) {
    let fixedValue = value.replace(",",".")
    let floatValue = parseFloat(fixedValue)
    if(floatValue == NaN){
        floatValue == 0
    }
    return floatValue
}

function convert(type){
    if(type == "usd-to-brl"){
        //Ajustar o valor
        let fixedValue = fixValue(usdInput.value)
        //converter o valor
        let result = fixedValue * dolar
        result = result.toFixed(2) //garantir somente duas casas decimais
        //mostrar no campo de real
        brlInput.value = formatCurrency(result)

    }
    if(type == "brl-to-usd"){
        //Ajustar o valor
        let fixedValue = fixValue(brlInput.value)
        //converter o valor
        let result = fixedValue / dolar
        result = result.toFixed(2)
        //mostrar no campo de dolar
        usdInput.value = formatCurrency(result)
    }

}