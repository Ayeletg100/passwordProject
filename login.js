const login = document.getElementById('login');
const app = document.getElementById('app');
const currPage = document.getElementById('currPage');
// const DB1= new DB();

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
    // const name = document.getElementById("username").value;
    // const password = document.getElementById("password").value;
    // const usersStr = localStorage.getItem("users");
    // const usersArr = JSON.parse(usersStr);
    // for (element of usersArr) {
    //     console.log('element.username: ', element.username);
    //     console.log('element: ', element);
    //     if (element.GetUsername === name && element.GetPassword === password) {
    //change the current user to the one who logged in
    const usersStr = localStorage.getItem("users");
    const usersArr = JSON.parse(usersStr);
    sessionStorage.setItem('currUser', JSON.stringify(usersArr[0]));
    //client
    switchPage(app);
    openPasswordList()
    return;
    // }
    // }
    // alert("one field or more is wrong")
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

//shows the list of the passwords
function openPasswordList() {
    //fajax
    const passwordsList = getPasswordList(JSON.parse(sessionStorage.getItem("currUser")))
    if (passwordsList) {
        if (passwordsList.length === 0) {
            const listDiv = document.getElementById("listOfPasswords")
            const passDiv = document.createElement("div")
            passDiv.textContent = "your password list is empty"
            listDiv.appendChild(passDiv)
        }
        for (pW of passwordsList){
            const listDiv = document.getElementById("listOfPasswords")
            const passDiv = document.createElement("div")
            passDiv.textContent = "website: "+ pW._webName+ ", username: "+ pW._userNameW + ", password: "+pW._passwordW;
            listDiv.appendChild(passDiv)
        }
    }
    else {
        console.log("error");
    }
}


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