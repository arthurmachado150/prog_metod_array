// geração de números aleatórios entre min e max
// equação: Math.random() * (max - min) + min

// programa para gerar 5 números aleatórios

function gerarNum(min, max){
    return Math.random() * (max - min) + min
}

function principal{
    let num = [], min = 1, max = 10

    for(let i = 0; i < 5; i++){
        num.push(i)
        console.log(num)
    }
}

principal