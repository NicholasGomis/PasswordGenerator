let characters = [];
let removedSpace

let display = (myfun) => {

    console.log(myfun)

}
const generateRamdomCharacter = (input) => {
for (let i=32; i<127; i++){
characters.push( String.fromCharCode(i) );
}

let shuffled = characters.sort(() => Math.random() - Math.random()).slice(0, input)
removedSpace = shuffled.filter(psw => psw !== ' ')
// console.log(removedSpace.join(''))
return removedSpace;
}






display(generateRamdomCharacter(5))