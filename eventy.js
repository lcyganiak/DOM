// sposób pierwszy podpięcia eventu 
//

function wHtml() {
    console.log('podpięta jawnie w html')
}


// drugi sposób 
function sposobDrugi() {
    console.log('Jestem wpięty 2 sposobem')
}
const btn1 = document.getElementById('btn-1')
// jak chcesz odpalić dwie lub więcej funkcji na raz, przykład poniżej 
// function wraper() {
//     sposobDrugi()
//     wHtml()
// }
// btn1.onclick = wraper

btn1.onclick = sposobDrugi

console.log(btn1)

// trzeci sposób 
function trzeciSposob() {
    console.log('addEventListener tak mnie dodano')
}
const btn3 = document.getElementById('btn-3')

btn3.addEventListener('click',  trzeciSposob)

function getInput() {
    const input1 = document.getElementById('input1')
    console.log(input1)
    console.log(input1.value)
    
}

// Eventy z parametrem

// sposób pierwszy jawnie w HTML

function showInput(value) {
    console.log(value)
}

// drugi sposób
const input2 = document.getElementById('input2')
//showInput2 jest poprawna dla sposobu 2 i 3 
function showInput2(globalEvent) {
    console.log(globalEvent)
    console.log(globalEvent.target.value)
}

input2.onchange = showInput2

// trzeci sposób 

const input3 = document.getElementById('input3')

input3.addEventListener('change', showInput2)


const btn4 = document.getElementById('btn-4')

function getForm(globalEvent) {
    console.log(globalEvent)
    globalEvent.preventDefault()
   const input = globalEvent.path
   console.log(input)
}

btn4.addEventListener('click', getForm)
