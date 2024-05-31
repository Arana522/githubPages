const btnShowUsers = document.querySelector("#show-users-button");
const formCreate = document.querySelector("#form-create");
const users = document.querySelector("#users-container");



const getUsers = async () => {
    const response = await fetch("https://crudcrud.com/api/e43e3c36c7944350a6eb134bffb77c08/users");
    const data = await response.json();
    console.log(data);
    let users = data;
    users.map((item) => {
        usersContainer.insertAdjacentHTML("beforeend", `<div class="border-2 border-blue-500 m-5 p-5 w-64">
        <p>id:${item._id}</p>
        <h1>nombres:${item.username}</h1>
        // <p>Password:${itemr.password}</p>
        
        </div>`) 
    })
}

/*const renderUsers = (users) => {
    usersContainer.innerHTML = "";
    users.forEach (user => {
        const userDiv = document.createElement("dib");
        userDiv.innerHTML = "user-card p-2 border rounded m-2";
        userDiv.innerHTML = `
        <p><strong>ID:</strong> ${user._id}</p>
        <p><strong>Username:</strong> ${user.username}</p>
    `;
    usersContainer.appendChild(userDiv);
    });
}*/




const postUser = async (e) => {
    e.preventDefault();
    const username = document.querySelector("#username-input").value;
    const password = document.querySelector("#password-input").value;
    try {
        const response = await fetch("https://crudcrud.com/api/e43e3c36c7944350a6eb134bffb77c08/users", {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data", data);
    } catch (error) {
        console.error("Error:", error);
    }
};



formCreate.addEventListener("submit", (e) => postUser(e));
    