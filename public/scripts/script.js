const handleApiPosts = async (action, options) => {
    const res = await fetch(`http://localhost:3000/api/${action}`, options)
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

const newPost = async () => {
    const title = document.getElementById('title').value
    const discription = document.getElementById('desc').value

    handleApiPosts('new', {
        method: 'POST',
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({ title, discription })
    })

    updatePosts()
    document.getElementById('title').value = ''
    document.getElementById('desc').value = ''
}

document.addEventListener('DOMContentLoaded', updatePosts)