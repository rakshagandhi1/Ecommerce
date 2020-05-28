export async function getAllUsers() {
    try {
        let res = await fetch("http://localhost:4000/users");
        res = await res.json();
        console.log('res', res);
        const users = res.users;
        return users;
    } catch(error) {
        console.log('Get all users error', error);
        return [];
    }
    
      
}

export async function createUser(createUserData) {
    try { 
        let res = await fetch("http://localhost:4000/users", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(createUserData)
        });
        res = await res.json();
        //const userinfo = res.name;
        return res;
    } catch(error) {
        console.log('create user error', error);
        return null;
    }
        
}

export async function loginUser(loginData) {
   try {
     let resu = await fetch("http://localhost:4000/users/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(loginData)
     });
     resu = await resu.json();
    // const logininfo = resu.logininfo;
     return resu;
   }
   catch(error) {
    console.log('wrong data', error);
    return [];
   }
}