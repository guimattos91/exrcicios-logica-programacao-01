// Exercício 3
// Temos uma lista de pessoas com seus respectivos nomes, alturas e pesos.
// Crie um função que receba a função a seguir e mostre no console o valor do calculo do IMC da pessoa.
// exemplo: `O IMC é Carlos é 40`
// Sendo que o IMC é calculado pela fórmula `peso / altura²`.
// Obs: Utilize `for` ou algum método de array.

const pessoas = [
    { nome: 'João', altura: 1.75, peso: 80 },
    { nome: 'Maria', altura: 1.68, peso: 60 },
    { nome: 'Pedro', altura: 1.80, peso: 70 },
    { nome: 'Ana', altura: 1.65, peso: 55 },
    { nome: 'Carlos', altura: 1.90, peso: 100 }
]

const calculoIMC = (pessoa) => Math.round(pessoa.peso / Math.pow(pessoa.altura, 2))

const Frase = pessoas.map((pessoa) => `O IMC de ${pessoa.nome} é ${calculoIMC(pessoa)}`)

console.log(Frase[2]);
console.log(Frase);


// Primeiro criei uma função que calculasse o IMC. Pegando o peso e dividindo pela altura elevado ao quadrado com Math.pow
// Ainda na função de cálculo, envolvi a conta para deixar os números arredondados
// Passei um map para criar as frases e chamei console.log duas vezes.
// A primeira escolhendo a pessoa ('Pedro') a partir do index. A segunda trazendo todas as pessoas do Array, um por um