
function password(e){
    const letters = ["A", "B", "C", "1", "&", "D", "E", "3"];

    const password = []
    for(let i = 0; i < e; i++){
        password.push(letters[Math.floor(Math.random()*e)])
    }

    return password.join("")
}

console.log(password(6))