class User {
    static count = 1;

    constructor(username, password) {
        this.id = User.count;
        this.username = username;
        this.password = password;
        this.webPasswords = [];
        User.count++;
    }
}

class webPassword {
    static count = 1;

    constructor(webName, userNameW, passwordW) {
        this.id = webPassword.count;
        this.webName = webName;
        this.userNameW = userNameW;
        this.passwordW = passwordW;
        webPassword.count++;
    }
    // get id() {
    //     return this.id;
    // }

    // get username() {
    //     return this.userNameW;
    // }

    // get password() {
    //     return this.passwordW;
    // }
    // get webName() {
    //     return this.webName
    // }

    // set userNameW(userNameW) {
    //     this.userNameW = userNameW;
    // }

    // set passwordW(passwordW) {
    //     this.passwordW = passwordW;
    // }
}



function getPasswordList(user) {
    //ask db
    const passwordsList = getWebPasswords(user.id);
    return passwordsList;
}

function createNewWP(user, webName, Username, Password) {
    const newWP = new webPassword(webName, Username, Password);
    if (pushNewWP(user, newWP)) {
        return newWP;
    }
    return false;

}