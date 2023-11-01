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
}

function createNewWP(user, webName, Username, Password) {
    const newWP = new webPassword(webName, Username, Password);
    if (pushNewWP(JSON.parse(user).id, newWP)) {
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
                    if (!isNaN(arr[i]) && arr[i] !== "") {
                        const id = parseInt(arr[i]);
                        const passwordsList = getWebPasswords(id);
                        return JSON.stringify(passwordsList);
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
            if (/\/passwords\//.test(url) && /\d/.test(url)) {

                let arr = url.split('/');
                for (let i = 0; i < arr.length; i++) {
                    if (!isNaN(arr[i]) && arr[i] !== "") {
                        const id = parseInt(arr[i]);

                        const wpParsed = JSON.parse(obj);
                        const wp = new webPassword(wpParsed.webName, wpParsed.userNameW, wpParsed.passwordW)
                        const userExists = pushNewWP(id, wp)
                        if (!userExists) {
                            return false;
                        }
                        return JSON.stringify(wp);
                    }
                }

            }
            // LOG-IN MODE
            else if (/\/users\//.test(url) && /\d/.test(url)) {
                let arr = url.split('/');
                for (let i = 0; i < arr.length; i++) {
                    if (!isNaN(arr[i]) && arr[i] !== "") {
                        const id = parseInt(arr[i]);
                        const userParsed = JSON.parse(obj);
                        const userExists = checkIfUserExist(userParsed);
                        return JSON.stringify(userExists);
                    }
                }
            }
        }
    }
}
function checkIfUserExist(user) {
    const usersArr = getUsers();
    for (element of usersArr) {
        if (element.username === user.username && element.password === user.password) {
            return element;
        }
    }
    return false;
}