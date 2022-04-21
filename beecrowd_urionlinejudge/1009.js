var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

// ENTRADA >> O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

// SAÍDA >> Imprima o total que o funcionário deverá receber.

var vendor = String(lines.shift())
var salary = parseFloat(lines.shift())
var sales = parseFloat(lines.shift())

var comission = sales * 0.15
var totalSalary = salary + comission

console.log('TOTAL = R$ ' + totalSalary.toFixed(2))
