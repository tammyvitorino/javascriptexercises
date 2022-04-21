var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

// Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

// ENTRADA >> O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

// SAÍDA >> Imprima a mensagem "MEDIA" e a média do aluno, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade.

var A = parseFloat(lines.shift()) * 2
var B = parseFloat(lines.shift()) * 3
var C = parseFloat(lines.shift()) * 5

var media = (A + B + C) / 10

console.log('MEDIA = ' + media.toFixed(1))
