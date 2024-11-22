t1pointsEL = document.getElementById("t1points-el")
t2pointsEL = document.getElementById("t2points-el")
t1faulsEL = document.getElementById("team-one-fauls-el")
t2faulsEL = document.getElementById("team-two-fauls-el")
let scoreOne = 0
let scoreTwo = 0
let faulsOne = 0
let faulsTwo = 0


function Oneplus(){
    scoreOne += 1
    t1pointsEL.innerText = scoreOne
}
function Twoplus(){
    scoreTwo += 1
    t2pointsEL.innerText = scoreTwo
}
function oneF(){
    faulsOne += 1
    t1faulsEL.innerText = faulsOne
}
function twoF(){
    faulsTwo += 1
    t2faulsEL.innerText = faulsTwo
}
function resetAll(){
    scoreOne = 0
    scoreTwo = 0
    faulsOne = 0
    faulsTwo = 0
    t1pointsEL.innerText = scoreOne
    t2pointsEL.innerText = scoreTwo
    t1faulsEL.innerText = faulsOne
    t2faulsEL.innerText = faulsTwo
}