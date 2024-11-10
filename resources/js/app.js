document.addEventListener('DOMContentLoaded', function() {
    const postList = document.getElementById('post-list');
    if (postList) {
        getRequest('http://localhost/ApiPosts').then(posts => {
            posts.forEach(post => {
                const li = document.createElement('li');
                li.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><small>${post.date}</small>`;
                postList.appendChild(li);
            });
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            postRequest('http://localhost/ApiUsuarios', { email, password })
                .then(response => {
                    localStorage.setItem('token', response.token);
                    alert("Login exitoso");
                });
        });
    }

    const createPostForm = document.getElementById('create-post-form');
    if (createPostForm) {
        createPostForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
            const data = { title, content, author_id: 1 };
            postRequest('http://localhost/apiPosts', data)
                .then(newPost => {
                    alert("Post creado.");
                });
        });
    }
});
