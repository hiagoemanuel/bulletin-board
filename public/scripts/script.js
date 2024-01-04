const title = document.getElementById('title')
const desc = document.getElementById('desc')

const handleApiPosts = async (action) => {
    const res = await fetch(`http://localhost:3000/api/${action}`)
    const json = await res.json()
    return JSON.parse(json)
}

const updatePosts = async () => {
    const posts = await handleApiPosts('all')

    let postElements = ''

    posts.forEach(post => {
        const postElement = `
            <div class="card mb-4" id=${post.id}>
                <div class="card-header">
                    <h5>${post.title}</h5>
                </div>
                <div class="card-body">
                    <div class="card-text">
                    <p>${post.discription}</p>
                    </div>
                </div>
            </div>
        `

        postElements += postElement
    })

    document.getElementById('posts').innerHTML = postElements
}

const newPost = () => {
    console.log('test')
}

document.addEventListener('DOMContentLoaded', updatePosts)