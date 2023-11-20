// Exercício 1
// Crie uma função que receba como parâmetro a lista de hotifrutis abaixo que tem três tipos:
// `frutas`, `legumes` e `verduras`, faça com que essa função retorne o número de itens de cada um desses tipos.
// Sendo que:
// fruta → banana, maçã, abacaxi, melancia, laranja, limão.
// legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.
// verdura → alface, espinafre, rúcula, couve, agrião, acelga.


const hortifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão', 'cenoura',
    'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula',
    'couve', 'acelga', 'maçã', 'batata'];

function separadorDeHortifrutis(hortifrutis) {
    const frutas = Array.from(new Set(hortifrutis.filter(fruta => ['banana', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão'].includes(fruta))));
    const legumes = Array.from(new Set(hortifrutis.filter(legume => ['cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró'].includes(legume))));
    const verduras = Array.from(new Set(hortifrutis.filter(verdura => ['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga'].includes(verdura))));

    return {
        frutas: frutas,
        legumes: legumes,
        verduras: verduras
    };
}

const resultado = separadorDeHortifrutis(hortifrutis);
console.log('Quantidade de Frutas:', resultado.frutas.length);
console.log('Quantidade de Legumes:', resultado.legumes.length);
console.log('Quantidade de Verduras:', resultado.verduras.length);

// Utilizei uma função separando o Array hortifrutis em três arrays diferentes (frutas, legumes, verduras).
// Array.from criou um novo array a partir do filter, que filtrou os elementos para cada Array
// E o new set que ajudou a não repetir os elementos.