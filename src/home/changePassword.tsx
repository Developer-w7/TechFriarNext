"use client"

import { useEffect, useRef, useState } from "react"



export default function Password() {

  const [userName, setUserName] = useState<string>("");
  const [userPass, setPass] = useState<string>("");
  const [tokenStatus, setTokenStatus] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const userNameRef=useRef("");
  const userPassRef=useRef("");
  // const ref = React.useRef<HTMLInputElement>(null)

  const userLogin=()=>{
   
    
    
    const myHeaders = new Headers();
    
    myHeaders.append('Content-Type', 'application/json');
    let data={ email: userName,password:userPass }

    console.log(data)
    const res= fetch('http://127.0.0.1:5004/auth', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
    })
    
    
    res.then((v)=>v.json())
    .then((v)=>{
       if(v.status==="ok" && v.token !== "" ){setLoggedIn(true)}else{setLoggedIn(false)}
    })
    .catch((e)=>{
      setLoggedIn(false)
    console.log(e)
    })
    
    
    }

useEffect(() => {},[])


    return (
    <>
    {!isLoggedIn ? <>
    <div style={{display:"flex",flexDirection:"column",padding:30}}>
     <input type="text" onChange={(v:any)=>{setUserName(v.target.value)}} className="input-field"/>
     <input type="password"  onChange={(v:any)=>{setPass(v.target.value)}} className="input-field"/>
    
    </div>
    <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}> <button  onClick={()=>{userLogin()}} className="btn-lgn">Login</button></div>
     
        </>:<><p>Welcome, To Home Page</p><span onClick={()=>{setLoggedIn(false);}}>Logout</span></>
      }
    </>
    )
  }


