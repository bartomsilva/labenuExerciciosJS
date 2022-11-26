
// FILTER = FILTRO

const fruits2 = [{nome: "maçã"},{nome: "banana"},{nome: "pêra"},{nome: "laranja"},{nome: "morango"}]

const filterItems = (query) => {
  return fruits2.filter(el => el.nome.indexOf(query) > -1)
}

const filterItems2 = (query) => {
    return fruits2.filter(el => el.nome === query) 
}

r1 = filterItems("an")
r2 = filterItems2("an")

console.log(r1)
console.log(r2)


// FIND = PROCURAR

