
for (let i = 1; i < 10; i++) {
    
    if (i === 3) {
        console.log("--------------------")
        break;
    }

    console.log("O número atual é: " + i);
} 



for (let i = 1; i < 10; i++) {
    if (i === 3) {
        console.log("pulei o ",i)
        continue;
    }
    console.log("O número atual é: " + i);
} 