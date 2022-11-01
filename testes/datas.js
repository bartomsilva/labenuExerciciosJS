
// DATAS E SEUS MISTÉRIOS,  by Bart

/* um detalhe interessante os meses tem contagam de 0 a 11
    0 = janeiro
    1 = fevereiro
    2 = março
    3 = abril
    4 = maio
    5 = junho
    6 = julho
    7 = agosto
    8 = setembro
    9 = outubro
    10= novembro
    11= dezembro    

   assim como os dia da semana de 0 a 6
    0 = domingo
    1 = segunda
    2 = terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sábado
*/

// viu os númereos que falei acima? 
// então vou utilizar eles em um array que é tipo 
// uma variável com subdivisões....

//exemplo
let nomes = ["Brain","Flavia","José"]
// uma variável comum tem apenas um coteúdo o array tem partes
// cada parte equivale a um índice começando do 0
// logo nomes[0] = "Brain" , nomes[1]="Flavia" nomes[2]="José"
// seguindo essa lógica vamos utilizar arrays para escrever os nomes
// dos dias da semana e meses por extensso.


// função para converter data para padrão BR 
// a função espera um object data válido
const databr=(date)=>{
    const dia =  date.getDate()
    const mes = date.getMonth()+1
    const ano = date.getFullYear()
    return dia+'/'+mes+'/'+ano    // retorna uma string dd/mm/aaaa
}

// função que retorna o dia da semana por extensso 
// a função recebe como parametrô o número do dia da semana de
// forma normal: ex: domingo = 1, segunda = 2 e ........
const diaExtensso=(day)=>{    
    const days=["","Domingo","Segunda",
                "Terça","Quarta","Quinta",
                "Sexta","Sábado"]
    return (days[day])
}

// função que retorna o mês por extensso - by Bart
// a função recebe como parametrô o número do mês de
// forma normal: ex: janeiro  = 1, dezembro = 12
const mesExtensso=(mes)=>{    
    const meses=["",'Janeiro','Fevereiro','Março',"Abril",
                   'Maio','Junho',"Julho","Agosto",
                   "Setembro","Outubro","Novembro","Dezembro"]
    return (meses[mes])
}
// data é formada por ano / mes / dia

const niver = new Date();
console.log("date criada.",niver)
console.log('-------------------------')
console.log("dia......................",niver.getDate())
console.log("dia da Semana............",niver.getDay()+1)
console.log("ano......................",niver.getFullYear())
console.log("Retorna o mês............",niver.getMonth()+1)
console.log('-------------------------')
console.log("date Br..................",databr(niver))
console.log("dia da Semana p/extenso..",diaExtensso(niver.getDay()+1))
console.log("mês p/extensso...........",mesExtensso(niver.getMonth()+1))




