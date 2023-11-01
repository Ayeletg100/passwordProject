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

const songs = []
songs.push(new Song('Happy', 'pharell wiliams'));
localStorage.setItem("songs", JSON.stringify(songs))


function change(key, value){
   let currentuser= JSON.parse(localStorage.getItem(currentuser));
    currentuser[key]=value;

}

function changePassword(value){
    change('password', '12345678');
}

function changeuser(value){
    change('password', '12345678');
}