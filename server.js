class User {
    static count = 1;

    constructor(username, password) {
        this._id = User.count;
        this._username = username;
        this._password = password;
        this._webPasswords = [];
        User.count++;
    }

//doesn't work
    get GetUsername() {
        return (this._username);
    }

    get GetPassword() {
        return (this._password);
    }

    get webPasswords(){

        return this._webPasswords;
    }
}

class webPassword {
    static count = 1;

    constructor(webName, userNameW, passwordW) {
        this._id = webPassword.count;
        this._webName = webName;
        this._userNameW = userNameW;
        this._passwordW = passwordW;
        webPassword.count++;
    }
    get id() {
        return this.id;
    }

    get username() {
        return this._userNameW;
    }

    get password() {
        return this._passwordW;
    }
    get webName(){
        return this._webName
    }

    set userNameW(userNameW) {
        this._userNameW = userNameW;
    }

    set passwordW(passwordW) {
        this._passwordW = passwordW;
    }
}


function getPasswordList(user) {
    console.log("server");
    //ask db
    const passwordsList = getWebPasswords(user.id);
    console.log('passwordsList: ', passwordsList);
    return passwordsList;
}

function createNewWP(user, webName, Username, Password){
    const newWP=new webPassword(webName, Username, Password);
    if(pushNewWP(user, newWP)){
        return newWP;
    }
    return false;

}