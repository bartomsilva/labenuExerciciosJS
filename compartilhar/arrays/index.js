const atendentes = 
[
    {
        codigo: 1,
        nome: "Flanklin Aguiar",
        contato: "9-8765-3222"       
    },
    {
        codigo: 2,
        nome: "Marcelo Petrikovit",
        contato: "9-8877-6655"       
    },
    {
        codigo: 3,
        nome: "Mariana Silva",
        contato: "9-2233-4466"       
    },
    {
        codigo: 4,
        nome: "Marcely Gomes",
        contato: "9-2131-4343"       
    },
    {
        codigo: 5,
        nome: "Eliel Furtado",
        contato: "9-7654-2222"       
    }    
]

const clientes =
[
    {
        nome: "Arcelino Popo",
        valorFatura: 2000,
        pago: false,
        contato: "9-9988.5544",
    },
    {
        nome: "Rubens Barriquelo",
        valorFatura: 12000,
        pago: false,
        contato: "9-6688.3322",
    },
    {
        nome: "Maria Quirino",
        valorFatura: 1500,
        pago: true,
        contato: "9-5577.3232",
    },
    {
        nome: "Monique Evans",
        valorFatura: 23000,
        pago: true,
        contato: "9-6655.1122",
    },
    {
        nome: "Bill Gates",
        valorFatura: 500,
        pago: false,
        contato: "9-7765.9889",
    },
    {
        nome: "Zertuliano Gambiarito",
        valorFatura: 800,
        pago: false,
        contato: "9-9988.5544",
    }    
]



// criando um atalho para o console.log
const print = console.log.bind() 


// find - buscar / procurar 
// filter - filtrar / selecionar
// map - mapeamento / percorrer 
//print(atendentes.find( ojb => ojb.codigo=="1"))

const inadimplentes = clientes.filter( obj => !obj.pago)

//print(inadimplentes)

inadimplentes.map( obj => {
    const codAtendente = numeroAleatorio()
    const atendente = atendentes.find( obj => obj.codigo==codAtendente)
    obj.atendente=atendente.nome
    return obj
})
print(inadimplentes)










function numeroAleatorio() {
     return Math.floor(Math.random() * 5)+1
}
