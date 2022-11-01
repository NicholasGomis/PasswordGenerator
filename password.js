let containsSymbols = true;

function password(e, input){
    const letters = ["A", "B", "C", "1", "%","&", "D", "E", "3", "!", "$"];
    let newArr;
    const regx = /[Aa-Zz]/gi
    const password = []
    
    if (input){
    newArr =  letters.join('').match(regx)
    
    } else {
        

        newArr = letters
    }

    for(let i = 0; i < e; i++){
        password.push(letters[Math.floor(Math.random()*e)])
    }

    return password.join("")
}

console.log(password(6,containsSymbols))