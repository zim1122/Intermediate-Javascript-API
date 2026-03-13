const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayPost(data);
        });
};

const displayPost = (posts) => {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ''; // Clear previous posts

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.innerHTML =`<div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`;
        postContainer.appendChild(postCard);
           
    });
};
loadPost();