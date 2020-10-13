const getPosts = async () => {
    const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postResponse.json();

    return posts;
};

const getUsers = async () => {
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await userResponse.json();

    return users;
};

// const getComments = async () => {
//     const commentResponse = await fetch("https://jsonplaceholder.typicode.com/comments");
//     const comments = await commentResponse.json();

//     return comments;
// };


const getData = async () => {
    const posts = await getPosts();
    const users = await getUsers();
    // const comments = await getComments();

    const result = document.querySelector("#result");

    posts.forEach((post) => {
        const user = users.find((user) => {
            return user.id === post.userId;
        });

        result.innerHTML += 
            `<div id="post">
            <div id="title">${post.title}</div>
            <div id="author">${user.name}</div>
            <div id="body">${post.body}</div>
            </div>`;
    });
};
getData();

    // const commentSection = document.querySelector("#comment-section");