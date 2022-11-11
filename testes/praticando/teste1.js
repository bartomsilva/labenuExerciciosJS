
// criando um objeto é o que vai dentro dele.....

let myObject = {
    nome: "Bart",      // string 
    notas: [10,9,8,7], // array
    turma: "Ozemela",  // string
    idade: 55,         // number 
    ativo: true,       // boolean
    media: function() { // função
        let media=0
        for (let count = 1; count < this.notas.length; count ++){
            media += this.notas[count]
        }
        return media / this.notas.length
    }
}


// imprimir todo  objeto

console.log(myObject)

console.log("Nome.........:",myObject.nome)
console.log("Média........:",myObject.media() )


// arrays

const meuArraydeObjetos=[
    {
        nome: "Bart",      // string 
        notas: [10,9,8,7], // array
        turma: "Ozemela",  // string
        idade: 55,         // number 
        ativo: true,       // boolean
        media: function() { // função
            let media=0
            for (let count = 1; count < this.notas.length; count ++){
                media += this.notas[count]
            }
            return media / this.notas.length
        }
    },
    {
        nome: "Flavia Top",      // string 
        notas: [10,10,10,10], // array
        turma: "Ozemela",  // string
        idade: 22,         // number 
        ativo: true,       // boolean      
        media: function() { // função
            let media=0
            for (let count = 0; count < this.notas.length; count ++){
                media += this.notas[count]
            }
            return media / this.notas.length
        }  
    },

]

console.log("nome.....:",meuArraydeObjetos[1].nome)
console.log("nota.....:",meuArraydeObjetos[1].media())



