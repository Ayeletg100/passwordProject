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

    get webPasswords() {

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
    get webName() {
        return this._webName
    }

    set userNameW(userNameW) {
        this._userNameW = userNameW;
    }

    set passwordW(passwordW) {
        this._passwordW = passwordW;
    }
}




function createNewWP(user, webName, Username, Password) {
    const newWP = new webPassword(webName, Username, Password);
    if (pushNewWP(user, newWP)) {
        return newWP;
    }
    return false;
}

// URL OF LOAD OF ALL THE PASSWORDS - //API/passwords/1//

function figure(method, url, obj) {
    if (method === 'GET') {
        //  load MODE 

        if (/^\/\/API\//.test(url) === false) {

            alert('ERROR: the URL isnt legit, cannot complete the request.');
        }
        else {
            if (/\/passwords\//.test(url) && /\d/) {
                let arr = url.split('/');
                for (let i = 0; i < arr.length; i++) {
                    if (!isNaN(arr[i])) {
                        const id = parseInt(arr[i]);
                        const passwordsList = getWebPasswords(id);
                        return passwordsList;
                    }

                }

            }
        }

    }

    // URL OF ADD OF A NEW PASSWORD - //API/passwords/1//
    // URL OF LOG-IN A USER'S ACCOUNT - //API/users//

    if (method === 'POST') {
        if (/^\/\/API\//.test(url) === false) {

            alert('ERROR: the URL isnt legit, cannot complete the request.');
        }

        else {
            // ADD MODE
            if (/\/passwords\//.test(url) && /\d/) {
                let arr = url.split('/');
                for (let i = 0; i < arr.length; i++) {
                    if (!isNaN(arr[i])) {
                        const id = parseInt(arr[i]);
                        const passwordsList = getWebPasswords(id);
                        return passwordsList;
                    }

                }

            }
        }
    }

}