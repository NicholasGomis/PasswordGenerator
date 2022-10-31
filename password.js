
function passwordGenerator(e,  c, d, mix){
    const password = []
    const letters = ["A","a", "B", "C","c", "e","3","4", "1", "&", "D", "E", "3"];
    const re = /[A-Z]/g
    const reC = /[0-9]/g
    const mixed = /[aA-zZ 0-9]/g
    var newArr;
    if(c){
        newArr = letters.join("").match(reC)   
    }
    if(d){
        newArr = letters.join("").match(re)   
    }
    if(mix){
        newArr = letters.join("").match(mixed) 
    }
    if(!d|| !c || !mix){
        newArr = letters;
    }
    for(let i = 0; i < e; i++){
        if(e > newArr.length){
            password.push(newArr[Math.floor(Math.random()*newArr.length)])
        }else{
            password.push(newArr[Math.floor(Math.random()*e)])
        }
       
       }

console.log(password)
return password.join("");
}
const btn = document.querySelector(".password")

function generate(){
    const mixed = document.querySelector(".mixed")
    const upper = document.querySelector(".cap");
    const num = document.querySelector(".nums");
    const inputValue = document.querySelector(".inputNum");
    console.log(upper.checked, num.checked, inputValue.value, mixed.checked)

    const password = passwordGenerator(inputValue.value, upper.checked, mixed.checked, num.checked);
    console.log(password)
    document.querySelector(".result").innerHTML = `Password: ${password}`
}


btn.addEventListener("click",  generate)