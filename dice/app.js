const Btn = document.querySelector('.btn')
const Btn2 = document.querySelector('.btn2')
const Btn3 = document.querySelector('.btn3')
const display = document.querySelector('.dis')
const showResults = document.querySelector('.results')
const rolValues = [1,2,3,4,5,6]
let numOfChoice = [ ]
let result = 0;
const play = () => {
    const randomChoice = Math.floor( Math.random() * rolValues.length)
    const choice = rolValues[randomChoice]
    numOfChoice.push(choice)
    display.innerHTML = numOfChoice
    console.log(numOfChoice)
   
    if(numOfChoice.length === 3){
        Btn.disabled = true;
        Btn2.disabled = false
    }
}

const sum = () => {
    for (let i = 0; i < numOfChoice.length; i++){
        if(numOfChoice[i] == 1){
            numOfChoice[i + 1] = 0
            result += numOfChoice[i]
            
        }else if (numOfChoice[2] == 1){
            result += numOfChoice[i]
        }else if (numOfChoice[i] == 6){
            numOfChoice[i + 1] *= 2
            result += numOfChoice[i]

        }else{
            result += numOfChoice[i]
        }
        showResults.innerHTML = result
    }
    console.log(result)
    Btn2.disabled = true;
    Btn3.disabled = false
}

Btn3.addEventListener( 'click', () => {
    numOfChoice = [ ];
    display.innerHTML = numOfChoice
    Btn.disabled = false;
    Btn2.disabled = true;
    Btn3.disabled = true;
    result = 0
})