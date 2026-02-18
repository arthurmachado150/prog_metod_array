// geração de números aleatórios entre min e max
// equação: Math.random() * (max - min) + min
//arredondar para cima: Math.floor

// programa para gerar 5 números aleatórios e fazer a Média

function gerarNum(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function ordenar(a, b){
    return a - b
}

function principal(){
    let num = [], min = 1, max = 10, val = 0, soma = 0, media = 0

    for(let i = 0; i < 3; i++){
        val = gerarNum(min, max)
        num.push(val)
    }
    console.log(num)
    console.log('---------------------------------')
    console.log(num.sort(ordenar))
    console.log('---------------------------------')
    console.log(num.reverse())
    console.log('---------------------------------')
    console.log(num.length)
    console.log('---------------------------------')

    for(let i = 0; i < num.length; i++){
        soma += num[i]
    }
    media = soma / num.length
    console.log(`Se soma dos valores do array é: ${soma}`)
    console.log(`A média da soma é: ${media.toFixed(3)}`)
}

principal()