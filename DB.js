function main() {
    const user = new User('e', '123');
    localStorage.setItem('users', JSON.stringify([user]));
    debugger;
    localStorage.setItem('countPassword', "1");
}
// main();

function getCountPassword(){
    return JSON.parse(localStorage.getItem('countPassword'));   
}
function setCountPassword(){
    const counterValue= getCountPassword()+1;
    localStorage.setItem('countPassword',JSON.stringify(counterValue));
}


function getUsers() {
    return JSON.parse(localStorage.getItem("users"));
}

function getWebPasswords(id) {
    const usersArr = JSON.parse(localStorage.getItem("users"));
    for (let user of usersArr) {
        if (user.id == id) {
            return user.webPasswords;
        }
    }
    return false;
}

// function getSpecificWebPassword(idUser, idWebPassword) {
//     const currentWebPasswordLIST = getWebPasswords(idUser);
//     if (currentWebPasswordLIST) {
//         for (wp of currentWebPasswordLIST) {
//             if (wp.id === idWebPassword) {
//                 return wp;
//             }
//         }
//     }
// }

function pushNewWP(id, newWP) {
    const usersArr = getUsers();
    for (let u of usersArr) {
        if (u.id === id) {
            u.webPasswords.push(newWP);
            localStorage.setItem('users', JSON.stringify(usersArr));
            return true;
        }
    }
    return false;
}

function removeWP(idUser, idWP){
    const usersArr = getUsers();
    const arrWP= getWebPasswords(idUser);
    if(arrWP){
        for(let i in arrWP){
            if(arrWP[i].id===idWP){
                arrWP.splice(i,1);
                localStorage.setItem('users', JSON.stringify(usersArr));
                return true;
            }
        }
    }
    return false;

}




// function change(key, value) {
//     let currentuser = JSON.parse(localStorage.getItem(currentuser));
//     currentuser[key] = value;

// }

// function changePassword(value) {
//     change('password', '12345678');
// }

// function changeuser(value) {
//     change('password', '12345678');
// }

