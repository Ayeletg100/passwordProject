function main() {
    const user = new User('e', '123');
    localStorage.setItem('users', JSON.stringify([user]));
}
// main();

function getUsers() {
    return JSON.parse(localStorage.getItem("users"));
}

function getWebPasswords(id) {
    console.log("db");

    const usersArr = JSON.parse(localStorage.getItem("users"));
    for (user of usersArr) {
        
        if (user.id == id) {
            //need to change
            return user._webPasswords;
        }
    }
    return false;
}

function getSpecificWebPassword(idUser, idWebPassword) {
    const currentWebPasswordLIST = getWebPasswords(idUser);
    if (currentWebPasswordLIST) {
        for (wp of currentWebPasswordLIST) {
            if (wp.id === idWebPassword) {
                return wp;
            }
        }
    }
}
    function pushNewWP(user, newWP) {
      
        const Juser=JSON.parse(user);
        const usersArr = getUsers();
        for (u of usersArr) {
            if (u._id === Juser._id) {
                console.log(' u._webPasswords: ',  u.webPasswords);
                u._webPasswords.push(newWP);
                localStorage.setItem('users', JSON.stringify(usersArr));
                return true;
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

