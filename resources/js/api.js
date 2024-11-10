const BASE_URL_USERS = 'http://localhost/ApiUsuarios';
const BASE_URL_POSTS = 'http://localhost/ApiPosts';

// Hacer `getRequest` y `postRequest`  
window.getRequest = async function(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });
        if (!response.ok) throw new Error('Error en la solicitud.');
        return await response.json();
    } catch (error) {
        console.error("Error en getRequest:", error);
    }
};

window.postRequest = async function(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Error en la solicitud.');
        return await response.json();
    } catch (error) {
        console.error("Error en postRequest:", error);
    }
};
