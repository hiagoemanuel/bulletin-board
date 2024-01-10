const handleApiPosts = async (action, options) => {
    const res = await fetch(`http://172.30.69.208:3000/api/${action}`, options)
    const contentType = res.headers.get('Content-Type')

    if (contentType === 'application/json; charset=utf-8') {
        const json = await res.json()
        return JSON.parse(json)
    }
}

const updatePosts = async () => {
    const posts = await handleApiPosts('all')
    let postElements = ''

    posts.forEach(post => {
        const postElement = `
            <div class="post card mb-4" id=${post.id}>
                <div class="card-header d-flex justify-content-between">
                    <h5>${post.title}</h5>
                    <h5 class="text-danger user-select-none" role="button" onclick="deletePost(this)">X</h5>
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

    await handleApiPosts('new', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, discription })
    })

    await updatePosts()
    document.getElementById('title').value = ''
    document.getElementById('desc').value = ''
}

const deletePost = async (e) => {
    const id = e.offsetParent.id

    await handleApiPosts('delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    })

    await updatePosts()
}

document.addEventListener('DOMContentLoaded', updatePosts)