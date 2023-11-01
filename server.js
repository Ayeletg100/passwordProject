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





function createNewWP(user, webName, Username, Password) {
    const newWP = new webPassword(webName, Username, Password);
    if (pushNewWP(user, newWP)) {
        return newWP;
    }
    return false;
}

// URL OF LOAD OF ALL THE PASSWORDS - //API/passwords/1//
// URL OF ADD OF A NEW PASSWORD - //API/passwords/1//
// URL OF LOG-IN A USER'S ACCOUNT - //API/users//
function figure(method, url, obj){
    if(method==='GET'){
        //  load MODE 
        
        if(/^\/\/API\//.test(url)===false){

            alert('ERROR: the URL isnt legit, cannot complete the request.');
        }
        else{
            if(/\/passwords\//.test(url) && /\d/){
                let arr = url.split('/');
                for (let i = 0; i < arr.length; i++) {
                    if(!isNaN(arr[i]))
                    {
                        const id=parseInt(arr[i]);
                        const passwordsList= getWebPasswords(id);
                        return passwordsList;
                    }     
                    
                }
                
            }
        }

    }

    if( method==='POST'){
        if(/^\/\/API\//.test(url)===false){

            alert('ERROR: the URL isnt legit, cannot complete the request.');
        }

    else{
        if()
    }
    }

}