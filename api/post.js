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

    posts.forEach(post => {
        console.log(post.title);
        //create html element
        const li = document.createElement('li');
        li.innerText = post.title;
        console.log(li);
        //add to the container
        postContainer.appendChild(li);
    });
};

loadPost();