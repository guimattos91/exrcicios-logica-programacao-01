// Exercício 2
// Temos a lista de empregados com seus respectivos nomes e salários.
// Utilize o método `some` para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.
// Utilize o método `some` novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.
// Obs: Pode utilizar o `for` .


const empregados = [
    { nome: 'João', salario: 1200 },
    { nome: 'Maria', salario: 1500 },
    { nome: 'Pedro', salario: 1800 },
    { nome: 'Ana', salario: 1400 },
    { nome: 'Carlos', salario: 2000 }
]

const checarSalarioAcimaDe1500 = empregados.some(empregado => empregado.salario >= 1500);
const checarSalarioAbaixoDe1000 = empregados.some(empregado => empregado.salario <= 1000);

const temSalarioAcimaDe1500 = checarSalarioAcimaDe1500 ? 'Pelo menos um empregado tem salário maior ou igual a R$ 1.500,00.'
    : 'Nenhum empregado tem salário maior ou igual a R$ 1.500,00.';
const temSalarioAbaixoDe1000 = checarSalarioAbaixoDe1000 ? 'Pelo menos um empregado tem salário menor ou igual a R$ 1.000,00.'
    : 'Nenhum empregado tem salário menor ou igual a R$ 1.000,00.';


console.log(temSalarioAcimaDe1500);
console.log(temSalarioAbaixoDe1000);

// A partir do some, defini se as condições propostas (salário acima de R$1500 e salário abaixo de R$1000,00) eram verdadeiras
// Com a informação checada, fiz um if ternário para a saída do console.log dependendo do resuultado true ou false