/*Comentario de varias linhas*/
//comentario de uma linha
/*variáveis-espaço reservado na memoria que eu dou um nome. Esse nome:
-significativo
-não ter espaço
-não ter acento
-não ter caracteres especiais/simbolos
-começar con uma letra ou _
*/

//declaração de variável
var nome = "William"
let idade = 37 // vamos usar assim
//[???]qual a diferença entre var e let?
//[???]quando foi criado o javascript e por quem?
altura = 1.74

// Tipos de dados
console.log(typeof nome)
console.log(typeof idade)
console.log(typeof altura)
console.log(typeof fumante)
// o JS e fracamente tipado, isso significa que não precisamos informar o tipo de variavel en sua declaração.
// o tipo da variavel e definido pelo seu conteúdo

// Entrada de dados
nome = prompt("Informe seu nome")
console.log(nome)
let satisfacao = confirm("Está gostando do javascript")
console.log(satisfacao)

//Saída de dados
alert("Seja bem vindo " + nome)
console.log("Você tem" + idade + " anos")
document.write("<h2>Bora!!!<h2>")
document.write("<img src='imagem.png'>")

//Operadores
// Operadores Aritmeticos
console.log(40+5) // adição
console.log(40-5)
console.log(40*5)
console.log(40/5)
console.log(10%3) // modulo, resto de divisão
Math.sqrt(81)
console.log("Giovanni y " + "Kata") // concatenar
let n1 = parseFloat(prompt("Informe um número"))


n1 = parseFloat(n1)

console.log(n1 + 15)

// operador de atribuição (=)
n1 = 100

// Operadores relacionais
console.log(100 > 20) // maior
console.log(100 < 20) // menor
console.log(100 == 100) // igualdade
console.log(100 != 100) // diferente
console.log(100 >= 12) // maior ou igual

// Operadores Lógicos
// && - E : todas as expressões precisam ser verdadeiras pra o resutlado ser verdadeiro
console.log(10 > 3 && 10 > 5) // true
console.log(10 > 3 && 10 > 5 && 10 >2) // false
//Ojo: Basta q uma das expressoes fuera falsa tuda a linha e Falsa tambien


// || - OU
console.log(10 > 3 || 10 > 15) // true
console.log(10 > 30 || 10 > 50) // false
console.log(10 > 100 || 10 > 100) // true

//Ojo: Con este operador basta q 1 sea verdadeira e ele vai virar verdadeira. Ele só sera falso se todas as expressões forem falso.

// ! - NÃO - inverte o resultado, o que for verdadeiro ele transforma em falso e o que for falso transforma em verdadeiro
console.log(!(10>3)) // false
console.log(!(10>30)) // verdadeiro
console.log("Fim")

