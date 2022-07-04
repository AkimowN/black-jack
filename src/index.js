
import './styles/index.css'
import './styles/normalize.css'


const suits = ['буби','пика','черви','креси']
const faces = [2,3,4,5,6,7,8,9,10,'jack','lady','king','ace']
const deck = []
const cash = (face) => {
    if (typeof face === 'number' ){
        return face
    }
    if (face === 'ace'){
        return 11
    }  
    if (  typeof face === 'string'){
        return 10
    }
}
suits.forEach((suit)=>{
    faces.forEach((face)=>{
        deck.push({
            face: face,
            suit: suit,
            price : cash(face)            
        })
    })
})
console.log(deck)
function random(array) {
    array.sort(() => Math.random() - 0.5);
  }
random(deck)
const newGame = document.querySelector('.newGame')
newGame.addEventListener('click',()=>{
    
})
