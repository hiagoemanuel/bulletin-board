module.exports = {
    posts: [
        {
            id: 'SDawWOnmWR',
            title: 'board title',
            discription: 'this is the discription'
        }
    ],
    getAll() {
        return this.posts
    },
    newPost(title, discription) {
        return this.posts.push({ id: generateId(), title, discription })
    },
    deletePost(id) {
        const newPosts = this.posts.filter(p => p.id !== id)
        this.posts = newPosts
    }
}

const generateId = () => Math.random().toString(36).substring(2, 9)