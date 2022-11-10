
function checkInfo(idade,ensinoMedio,ensinoSuperior){
   
    // teste da maior idade
    if ( idade >= 18) {
        console.log("tem 18 anos ou mais")
    } else {
        console.log("tem menos de 18 anos")
    }

    // testa se o Ensino Médio está Completo 
    if ( ensinoMedio ) {
        console.log("tem o ensino médio completo")
    } else {
        console.log("não tem o ensino médio completo")
    }

    // testa se está Cursando Faculdade
    if (ensinoSuperior) {
        console.log("está cursando faculdade")
    } else {
        console.log("não está cursando faculdade")
    }
}

checkInfo( 19, true, true )    // sim / sim / sim
console.log("------------------------")

checkInfo( 16, false, false )  // não / não / não 
console.log("------------------------")

checkInfo( 18, true, false )   // Sim / sim / não


