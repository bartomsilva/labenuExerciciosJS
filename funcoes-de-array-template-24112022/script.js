const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

// a)
// função que altera o valor da vida para 100%
// função nomeada
function lifeFull(obj) {
  obj.vida=100  
  return obj
}

//b) MAP
// alterando os valores da vida para vida cheia
const pokemonsVidaCheia = pokemons.map(lifeFull)
printPokemons("Pokemons de Vida Cheia",pokemonsVidaCheia)

//c) FILTER
// função não nomeada
const pokeFire=function(obj){
  return obj.tipo==="fogo"
}

// selecionando pokemons de fogo
const pokemonsDeFogo = pokemons.filter(pokeFire)
printPokemons("Pokemons de Fogo",pokemonsDeFogo)

////////////////////////////
///// impressão dos Pokemons
////////////////////////////
function printPokemons(text,obj){
  console.log("\n")
  console.log(`${text}`)  
  obj.map(e=> {
    console.log(`Nome: ${e.nome} - Tipo: ${e.tipo} - Vida ${e.vida}%`)    
  })
}


