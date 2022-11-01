
// recursividade.......
const tabuada=(num,mult)=>{
    if (mult==1) console.log(`Tabuada do: ${num}`)
    console.log(`  ${num} x ${mult} = ${num*mult}`)
    if (mult==10) return
    tabuada(num,mult+1)
}
tabuada(4,1)
tabuada(6,1)
tabuada(8,1)


