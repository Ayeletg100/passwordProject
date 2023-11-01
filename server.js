class User{
    static count= 1;

    constructor(username, password ){
        this.id=User.count;
        this._username=username;
        this._password=password;
        this._webPasswords=[];
        User.count++;
    }

    get username(){

    }
}



class webPassword{
    static count= 1;

    constructor(webName, userNameW,passwordW ){
        this.id= webPassword.count;
        this._webName=webName;
        this._userNameW=userNameW;
        this._passwordW=passwordW;
        webPassword.count++;
    }
    get id(){
        return this.id;
    }

    get userNameW(){
        return this._userNameW;
    }

    get password(){
        return this._passwordW;
    }

    set userNameW(userNameW){
        this._userNameW=userNameW;
    }

    set passwordW(passwordW){
        this.passwordW=passwordW;
    }
}

