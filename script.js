 console.log("Escolha umamatéria: 1 - \n1 -Geografia; \n2 - portugues; \n3 - matematica.")

const materia = "geografia";

switch(materia){
case 1:
        console.log("Bigode");
        break
case 2:
        console.log("Ralinho");
        break
     default:
case 3:
        console.log("Maligno");
}

//atividade

const idade = 16

{if (idade<=12)
    console.log("Você é Criança");
else if (idade>=15 && idade < 18)
    console.log("Você é Adolescente");
else if (idade>=18 && idade <60)
    console.log("Você é Adulto");
else if (idade>=60)
    console.log("Você é Idoso");
}

//21/10

for (let i = 0; i <= 10; i++){
    console.log(i)
}
//atvd

    if (i % 2==0){
        console.log("o numero é par"+i)
}

let numeroQueEuQueroATabuada = 5;
for(let numeroMultiplicador = 1; numeroMultiplicador <= 10; numeroMultiplicador++){
    console.log(`${numeroQueEuQueroATabuada} * ${numeroMultiplicador} = ${numeroQueEuQueroATabuada} * {numeroMultiplicador} `)
}

for( let i = 1; i <= 10; i++){
    for( let j = 1; j <=10; j++){
   console.log(`${i} X ${j} = ${j* i}`)     
    }
}

//paradadetentativa

let tentativa = 3 
while ( tentativas > 0){
    console.log(`você tem ${tentativs} tentativas restantes`)
    tentativas--;
} while (tentativas > 0)
