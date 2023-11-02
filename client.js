const login = document.getElementById('login');
const app = document.getElementById('app');
const currPage = document.getElementById('currPage');

document.addEventListener('DOMContentLoaded', () => {
    let temp = login;
    let content = temp.content;
    currPage.appendChild(content.cloneNode(true));
    document.getElementById("submit").addEventListener("click", checkUserExistence)
})

function checkUserExistence() {
    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const current = JSON.parse(sessionStorage.getItem("currUser"));
    const fajax = new FXMLHttpRequest();
    debugger;
    fajax.open("POST", `//API/users//`);
    fajax.onload = function () {
        const response = JSON.parse(this.response);
        if (response) {
            sessionStorage.setItem('currUser', JSON.stringify(response));
            switchPage(app);
            openPasswordList()

        } else {
            alert("one field or more is wrong")
        }
    }
    fajax.send(JSON.stringify({
        password,
        username: name
    }))
}

function switchPage(temp) {
    let content = temp.content;
    let children = currPage.children;
    let length = children.length;
    for (let i = 0; i < length; i++) {
        currPage.removeChild(currPage.children[0]);
    }
    currPage.appendChild(content.cloneNode(true));
    document.getElementById('addWebPassword').addEventListener('click', (e) => {
        e.preventDefault()
        addNewPassword()
    });
}

//shows the list of the passwords
function openPasswordList() {
    const xhttp = new FXMLHttpRequest();
    const current = JSON.parse(sessionStorage.getItem("currUser"));
    xhttp.open('GET', "//API/passwords/" + current.id + "//")
    xhttp.onload = function () {
        const passwordsList = JSON.parse(xhttp.response);
        if (passwordsList) {
                for (pW of passwordsList) {
                    const listDiv = document.getElementById("listOfPasswords")
                    const passDiv = document.createElement("div")
                    passDiv.textContent = "Website: " + pW.webName + " | Username: " + pW.userNameW + " | Password: " + pW.passwordW;
                    listDiv.appendChild(passDiv)
                }
        }
        else {
            alert("error");
        }
    }
    xhttp.send();
}


function addNewPassword() {
    const webName = document.getElementById('newWebName').value;
    const webUserName = document.getElementById('newUserName').value;
    const webPassword = document.getElementById('newPassword').value;
    const current = JSON.parse(sessionStorage.getItem('currUser'));
    const fajax = new FXMLHttpRequest();
    fajax.open("POST", `//API/passwords/${current.id}`);
    fajax.onload = function () {
        const response = JSON.parse(this.response);
        if (response) {
            const newWPdiv = document.createElement('div');
            newWPdiv.textContent = 'Website: ' + response.webName + ' | Username: ' + response.userNameW + ' | Password: ' + response.passwordW;
            document.getElementById('listOfPasswords').appendChild(newWPdiv);
        } else {
            alert("error")
        }
    }
    fajax.send(JSON.stringify({
        webName,
        passwordW: webPassword,
        userNameW: webUserName
    }))
}
