const okno = window

console.log(okno)


const dokument = document

console.log(dokument)

// getery document mają nam ułatwić pobieranie el. HTML i manipulację nimi


// po class name 
const paragrafy = dokument.getElementsByClassName('paragraf')
console.log(paragrafy)

console.log('długośc nazego HTMLCollection' , paragrafy.length)
// nie zadziała HTMLCollectio nie jest tablicą 
// paragrafy.forEach(element => {
//     console.log(element)
// });

for(let i =0; i < paragrafy.length ; i++) {
    console.log(paragrafy[i])
}
// zmina HTMLCollection w tablicę 
const HTMLCollectiosToArray = Array.from(paragrafy)


// poprawne pobieranie el. HTMl za pomocą getElementsByClassName

const poprawnePobranieParagrafow = Array.from(dokument.getElementsByClassName('paragraf'))
console.log(poprawnePobranieParagrafow)

const btn = Array.from(document.getElementsByClassName('btn'))
console.log(btn)

// po id 


const spanId = document.getElementById('span1')

console.log(spanId)

// po tagNames
const paragrafPoTag = document.getElementsByTagName('p')
console.log('paragrafPoTag', paragrafPoTag)

// querySelector pobiera jeden elemet HTML. Jak jest więcej to pierwszy

const input = document.querySelector('input[type="text"]')
console.log(input)
const jedenParagraf = document.querySelector('.paragraf')
console.log(jedenParagraf)

// querySelectorAll 

const wieleParagrafow = document.querySelectorAll('.paragraf')
console.log(wieleParagrafow)
// wieleParagrafow.forEach(item => {
//     console.log(item)
// })

// manipulowanie HTML za pomocą JS.
poprawnePobranieParagrafow.forEach(item => {
    console.log(item)
    // item.style.color = 'red'
    // item.style.backgroundColor = 'green'
    item.classList.add('addJs')
    item.classList.remove('paragraf')
    const text = item.innerHTML
    console.log(text)
    const text2 = item.innerText
    console.log(text2)
    // item.innerText = 'Zostałem zmieniony przez JS' mienia tekst w pobranym el.

    item.innerText = '<button class="btn">Zostałem zmieniony przez JS a dokładnie przez innerHTML</button>'


})

// tworzenie el. HTML za pomocą JS

const newParagraf = document.createElement('p') // stworzono <p></p>
// dodawnie tekstu
newParagraf.innerText = 'Jestem pragrafem stworzonym przez JS' // <p>Jestem pragrafem stworzonym przez JS</p>
// dodawnie class i innych atrybutów 
newParagraf.classList.add('addJs')// <p class='addJs'>Jestem pragrafem stworzonym przez JS</p>

newParagraf.setAttribute('id', 'aleMagia')// <p class='addJs' id="aleMagia">Jestem pragrafem stworzonym przez JS</p>
newParagraf.classList.add('drugaKlasa') // <p class='addJs drugaKlasa'>Jestem pragrafem stworzonym przez JS</p>

// newParagraf.setAttribute('class', 'klasaSetAttribute')// <p class='klasaSetAttribute'>Jestem pragrafem stworzonym przez JS</p>


// setAttribute zastepuję cały atrybut 
console.log(newParagraf)
const newDiv = document.createElement('div')


// dodawanie elentu stworzonego przez JS od HTML
const newElement = document.getElementById('newElement')

newElement.appendChild(newParagraf) // dodaje na koniec popranego el. nasz nowy paragraf 
// newElement.innerHTML = "<p class='addJs drugaKlasa'>Jestem pragrafem stworzonym przez JS</p>"
// innerHTML zastępuję el w całości 


// poprawne rozwiązanie 
// for(let i = 0; i < 5; i++) {
//     const par = document.createElement('p')
//     par.innerText = "Jestem pargrafem z pętli o numerze" + i + " za pomocą appendChild"
//     newElement.appendChild(par)
// }
// to jest błędnę rozwiązanie 
// for(let i = 0; i < 5; i++) {
//     newElement.innerHTML = `<div> <h1>Tytuł></h1><p> Jestem pargrafem z pętli o numerze" + ${i} + " 
//     za pomocą InnerHTML</p> </div>`
// }

const posts = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
]

posts.forEach(item => {
    const paragrafPost = document.createElement('p')
    const h1Post = document.createElement('h1')
    const divPost = document.createElement('div')
    paragrafPost.innerHTML = item.body
    h1Post.innerHTML = item.title
    // uzupełniam divPost el. paragraf i h1
    
    divPost.appendChild(h1Post)
    divPost.appendChild(paragrafPost)
    //do el. z HTML przez appendChild dodję divPost
    newElement.appendChild(divPost)


})