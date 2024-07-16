let allPosts = []
let postsArray = []
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")
const form = document.getElementById("new-post")
const blogList = document.getElementById("blog-list")

// Generator function to fetch posts
async function* postFetcher(limit = 5) {
    if (allPosts.length === 0) {
        const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts")
        allPosts = await response.json()
    }

    // TODO: 
    // Implement infinite scroll.
    let start 
    yield allPosts.slice(0, 5); // hack to show how things work now. 
}

const postGenerator = postFetcher()

function renderPosts(posts, append = false) {
    let html = ""
    for (let post of posts) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    if (append) {
        blogList.innerHTML += html
    } else {
        blogList.innerHTML = html
    }
}

async function loadInitialPosts() {
    const initialPosts = await postGenerator.next()
    if (initialPosts.done) return
    postsArray = initialPosts.value
    renderPosts(postsArray)
}

async function loadMorePosts() {
    const morePosts = await postGenerator.next()
    if (morePosts.done) return
    postsArray = [...postsArray, ...morePosts.value]
    renderPosts(morePosts.value, true)
}

loadInitialPosts()

// Infinite scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMorePosts()
    }
})

form.addEventListener("submit", async function(e) {
    e.preventDefault()
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: postTitle,
        body: postBody
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    const newPost = await response.json()
    allPosts.unshift(newPost)  // Add to the beginning of allPosts
    postsArray.unshift(newPost)
    renderPosts(postsArray)
    titleInput.value = ""
    bodyInput.value = ""
})