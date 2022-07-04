
import './styles/index.css'
import './styles/normalize.css'


const suits = ['буби','пика','черви','креси']
const faces = [2,3,4,5,6,7,8,9,10,'Валет:','Дама:','Король:','Туз:']
const deck = []
const cash = (face) => {
    if (typeof face === 'number' ){
        return face
    }
    if (face === 'Туз'){
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
const card6 = document.querySelector('.card6')
const card7 = document.querySelector('.card7')
const card2 = document.querySelector('.card2')
const card1 = document.querySelector('.card1')
const newGame = document.querySelector('.newGame')
newGame.addEventListener('click',()=>{
    const p = document.createElement('p')
    card1.appendChild(p)
    const lastCard = deck.pop()
    p.innerText = lastCard.face + ' ' + lastCard.suit
    p.style.marginTop = '50px'
    p.style.marginLeft = '15px'
})
newGame.addEventListener('click',()=>{
    const p = document.createElement('p')
    card2.appendChild(p)
    const lastCard2 = deck.pop()
    p.innerText = lastCard2.face + ' ' + lastCard2.suit
    p.style.marginTop = '50px'
    p.style.marginLeft = '15px'
})
newGame.addEventListener('click',()=>{
    const p = document.createElement('p')
    card6.appendChild(p)
    const lastCard6 = deck.pop()
    p.innerText = lastCard6.face + ' ' + lastCard6.suit
    p.style.marginTop = '50px'
    p.style.marginLeft = '15px'
})
newGame.addEventListener('click',()=>{
    const p = document.createElement('p')
    card7.appendChild(p)
    const lastCard7 = deck.pop()
    p.innerText = lastCard7.face + ' ' + lastCard7.suit
    p.style.marginTop = '50px'
    p.style.marginLeft = '15px'
})



