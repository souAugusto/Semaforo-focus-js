const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );

let colorIndex = 0
let intervalId = null

const trafficLight = (event) =>{
    stopAutomatic()
    turnOn[event.target.id]()
}

const nextIndex = () => {

    //colorIndex = colorIndex < 2 ? ++colorIndex : 0
    
    if(colorIndex < 2){
        colorIndex++
    }
    else{
        colorIndex = 0
    }
   
}

const changeColor = () =>{
    const colores = ['red', 'yellow', 'green']
    const color = colores[ colorIndex]
    turnOn[color]()

    nextIndex()
}

const stopAutomatic = () =>{

    clearInterval(intervalId)
}

const turnOn = {

    'red' : () => img.src = "vermelho.png",
    'yellow' : () => img.src = "amarelo.png",
    'green' : () => img.src = "verde.png",
    'automatic' : () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight );