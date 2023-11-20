// Exercício 4
// Temos a lista de alunos com suas notas.
// Utilize o método `map` para criar um novo objeto com o nome e a média de cada aluno.
// A média deve ser calculada utilizando o método `reduce` para somar as notas e dividi-las pelo número de notas.
// Obs: Utilize `for` ou algum método de array.

const alunos = [
    { nome: 'Ana', notas: [7, 8, 9] },
    { nome: 'Pedro', notas: [5, 6, 7] },
    { nome: 'Maria', notas: [9, 8, 10] },
    { nome: 'João', notas: [6, 7, 8] },
    { nome: 'Lucas', notas: [8, 9, 7] },
    { nome: 'Julia', notas: [10, 8, 9] }
]


const mediaDeNotas = alunos.map((aluno) => {
    return {
        nome: aluno.nome,
        media: aluno.notas.reduce((acc, element) => acc + element) / aluno.notas.length
    };
});

console.log(mediaDeNotas);


// Utilizando o map retornei para cada item do Array, um objeto que possuía nome e media
// A media foi calculada dividindo a soma de todos os números do array pela quantidade de elementos do array
// Por fim retornei um novo array com nome e media das notas