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
        title: " <span class='red'>qui</span> est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
]

const showPostsBtn = document.getElementById('showPosts')
const app = document.getElementById('app')
function createPost() {
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
        console.log(app)
        app.appendChild(divPost)
    
    })
}


showPostsBtn.addEventListener('click', createPost)

const inputEl = document.querySelector('input[type="text"]')

console.log(inputEl)
function changeParagraf(eventGlobal) {
    console.log(eventGlobal)
    const text = eventGlobal.target.value
    const span = document.getElementById('showInput')
    span.innerText = text
}
inputEl.addEventListener('change', changeParagraf)