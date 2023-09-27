let idade = 11
document.write("Sua idade: " + idade)
// se a idade for maior ou igual a 18 mostrar uma imagem de carro, se não, escrever que volte mais tarde

/*
se [teste] então
    [resposta verdadeira]
senão
    [resposta falsa]
fim se

if ([teste]){
    [resposta verdadeira]
}else{
    [resposta falsa]
}

resol:*/
if(idade >= 18){
    document.write("<h1>🚕</h1>")
}else{
    document.write("<br>Volte mais tarde, " + (18 - idade) + " anos")
}

// se média for maior ou igual a 5, mostrar aprovado, senão mostrar reprovado
document.write("<hr>")
let media = 25
if(media >=5){
    document.write("Aprovado")
}else{
    document.write("Reprovado")
}

// Se seu turno fose M-matutino, V-vespertino e N-noite, colocar a letra inicial, o sistema imprima Bom dia, Boa tarde e boa noite, sem colocar outra letra, da pau  
document.write("<hr>")
let turno = "c"
if(turno == "M"){
    document.write("<h1>Bom 🌻🌞</h1>")
}else if(turno == "V"){
    document.write("<h1>Bom 🛣</h1>")
}else if(turno == "N"){
    document.write("<h1>Bom 🌜</h1>")    
}else{
    document.write("Opção inválida")
}

// Se seu usuario e igual a Keno e sua senha e 123 vai poder ingresar no sistema, se nao sera bloqueado  
document.write("<hr>")
let usuario = "KENO"
let senha = 123
if(usuario == "admin" && senha == 123){
    document.write("ACCESS GRANTED 👍")
}else{
    document.write("ACCESS FAILURE ✋")
}

// Se o estudante, depois de colocar o nome, sua media e o numero de faltas, o sistema brindara se ele passo o não  

document.write("<hr>")
let estudante = "Gio"
let media_nova = 12
let faltas = 30

if(media_nova >= 5 && faltas <= 15){
document.write("PARABENS!!, " + estudante + " PASSOU!!!")
}else{
    document.write("A vida é isso né " + estudante + ", dias de luta pq a glória chega nunca.😣")
}

//   

document.write("<hr>")
let personagem = "Tobias O Destruidor"
let raca = "ORC"
let classe = "Necromante"
let vida = 10

let inimigo = "Vlad Drácula Tepes"
let vida_inimigo = 10

document.write("<h3>" + personagem + "<br>" + raca + "<br>" + classe + "<br>" + vida + "</h3>")
document.write(inimigo + vida_inimigo)

let max = 6
let min = 1

let d6_personagem = Math.floor(Math.random() * (max - min))
let d6_inimigo = Math.floor(Math.random() * (max - min))

if(d6_personagem > d6_inimigo){
    document.write("<br>A chama da vitoria é sua, ce honra a horda!!")
}else{
    document.write("<br>A hora de todo mundo chega 💀")
}
