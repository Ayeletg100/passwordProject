function main() {
    const user = new User('e', '123');
    localStorage.setItem('users', JSON.stringify([user]));
}

function getUsers() {
    return localStorage.getItem("users");
}

function getWebPasswords(id) {
    console.log("db");

    const usersArr = JSON.parse(localStorage.getItem("users"));
    for (user of usersArr) {;
        if (user.id ==id) {
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

main();


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

