class DB{
    constructor(){
        
    }

    static createDB(){
        const user= new User('ani1@gmail.com', '12345678');
        localStorage.setItem('users', JSON.stringify([user]));

    }

    get users(){
        return localStorage.getItem();
    }

     getWebPasswords(id) {
        for(user in users){
            if(user.id===id){
                return user.getWebPasswords;
            }

        }
        return false;
    }

    getSpecificWebPassword(idUser,idWebPassword){
        currentWebPasswordLIST= getWebPasswords(idUser);
        if(currentWebPasswordLIST){
            for(wp in currentWebPasswordLIST){
                if(wp.id===idWebPassword){
                    return wp;
                }
    
            }
        }
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