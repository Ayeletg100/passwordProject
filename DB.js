class DB{
    constructor(){
        this.users=[];
    }
    
}


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