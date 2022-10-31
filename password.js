
function passwordGenerator(input, characters,  capitalLetters, nums, mix){
    const password = []
    const letters = ["A","a", "B", "!","%", "e","3","4", "1", "&", "D", "E", "3"];
    const re = /[A-Z]/g
    const reNum = /[0-9]/g
    const mixed = /[aA-zZ 0-9]/g
    const capNum = /[A-Z 0-9]/g
    var newArr;
    if(capitalLetters){
        newArr = letters.join("").match(re)   
    }
    if(nums){
        newArr = letters.join("").match(reNum)   
    }
    if(mix){
        newArr = letters.join("").match(mixed) 
    }

    if(capitalLetters && nums){
        newArr = letters.join("").match(capNum) 
    }
    if(capitalLetters && nums && mix){
        newArr = letters.join("").match(mixed) 
    }
    if(characters && !capitalLetters && !nums && !mix){
        newArr = letters;
    }
    for(let i = 0; i < input; i++){
        if(input > newArr.length){
            password.push(newArr[Math.floor(Math.random()*newArr.length)])
        }else{
            password.push(newArr[Math.floor(Math.random()*input)])
        }
       
       }

console.log(password)
return password.join("");
}
// const upper = false;
// const num = false;
// const mix = false;
// console.log(passwordGenerator(12, upper, num, mix))
const btn = document.querySelector(".password")

function generate(){
    const mixed = document.querySelector(".mixed").checked;
    const characters = document.querySelector(".letters").checked
    const upper = document.querySelector(".cap").checked;
    const num = document.querySelector(".nums").checked;
    const inputValue = document.querySelector(".inputNum").value;
    console.log(inputValue, characters, upper, num, mixed)

    const password = passwordGenerator(inputValue, characters, upper, num, mixed);
    console.log(password)
    document.querySelector(".result").innerHTML = `Password: ${password}`
}


btn.addEventListener("click",  generate)