import { onAuthStateChanged, signOut} from 'firebase/auth';
import React, {useState, useEffect} from 'react'
import { auth } from '../firebase';

const AuthDetails = () => {
    const [authUser, setAuthUser]= useState(null);
    useEffect(()=>
    {
//runs as component reloads
const listen = onAuthStateChanged(auth, (user)=>
{
    if(user)
    {
        setAuthUser(user);
    } //this all if else is used to check whether the user exists or not 
    else{
        setAuthUser(null);
    }
} )//this user is used to check weather it exist or not
return ()=>
{
    listen();   
}   
}, []) //dependency array
const userSignOut = ()=>
{
signOut(auth).then(()=>
{
    console.log('signout is successfull.')
}).catch((error)=>
{
    console.log(error);
})
}
return (
    <div>
      {authUser ? 
      <>  
      <p>{`Signed In as ${authUser.email}`} </p> <button onClick={userSignOut}>Sign Out</button></>: <p>Signed Out</p> 
      
      } 
      {/* conditional operators  */}
    </div>
  )
}

export default AuthDetails
