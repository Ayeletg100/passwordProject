const login = document.getElementById('login');
const app = document.getElementById('app');
const currPage = document.getElementById('currPage');
const DB1= new DB();
DB.createDB();

document.addEventListener('DOMContentLoaded', () => {
    // if (localStorage.getItem('currUser')) {
    //     switchPage('app');
    // } else {
    let temp = login;
    let content = temp.content;
    currPage.appendChild(content.cloneNode(true));
    // }
    document.getElementById("submit").addEventListener("click", checkUserExistence)
})

// const user={username: "e" , password:"123"}
// localStorage.setItem("users" , JSON.stringify([user]));


function checkUserExistence() {
    //server
    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usersStr = localStorage.getItem("users");
    const usersArr = JSON.parse(usersStr);
    for (element of usersArr) {
        if (element.username === name && element.password === password) {
            //change the current user to the one who logged in
            localStorage.setItem('currUser', JSON.stringify(element));

            //client
            switchPage(app);
            return;
        }
    }
    alert("one field or more is wrong")
}

function switchPage(temp) {
    let content = temp.content;
    let children = currPage.children;
    let length = children.length;
    for (let i = 0; i < length; i++) {
        currPage.removeChild(currPage.children[0]);
    }
    currPage.appendChild(content.cloneNode(true));
}


document.getElementById('addWebPassword').addEventListener('click', addNewPassword)

function addNewPassword(){
    const webName=document.getElementById('newWebName').value;
    const webUserName=document.getElementById('newUserName').value;
    const webPassword=document.getElementById('newPassword').value;
    //somwhow sends as FAJAX 
    const response= undefined;// an obj returned
    const newWPdiv = document.createElement('div');
    newWPdiv.textContent= response.webName + 'Username:' + response.username +'Password:'+response.password; 
    document.getElementById('listOfPasswords').appendChild(newWPdiv);


}