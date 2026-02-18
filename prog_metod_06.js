let num = [2, 23, 3, 34, 15, 25, 45, 44, 59, 66, 74, 7, 83, 8, 9]
console.log(num)
console.log('----------------------------------')

// método de ordenação SORT -> baseado no código UNICODE do número
console.log(num.sort())
console.log(num)
console.log('----------------------------------')

// Usando função de callback por causa do código UNICODE do número
num = [2, 23, 3, 34, 15, 25, 45, 44, 59, 66, 74, 7, 83, 8, 9]
console.log(num)
console.log('----------------------------------')
console.log(num.sort(ordenar))

function ordenar(a, b){
    return a-b
}