"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react"



export default function Login() {

  const [userName, setUserName] = useState<string>("");
  const [userPass, setPass] = useState<string>("");
  const [tokenStatus, setTokenStatus] = useState("");
  const [isUpdated, setUpdated] = useState(false);

  const userNameRef=useRef("");
  const userPassRef=useRef("");
  // const ref = React.useRef<HTMLInputElement>(null)

  const userUpdatePassword=()=>{
   
    const token = localStorage.getItem('token_auth');
    if (token) {
       console.log(token)
    }
    
    const myHeaders = new Headers();
    
    myHeaders.append('Content-Type', 'application/json');
    let data={ token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGQ1NmNiOWM2MDRiYzRmYjY3NzFjYSIsInVzZXJuYW1lIjoidGVzdDIzQGdtYWlsLmNvbSIsImlhdCI6MTY4Njk4NDM5NiwiZXhwIjoxNjg2OTkxNTk2fQ.Ahs65telWfoEJMBkGnddXuk3383Htz1F6cnHdaySy9k",
    reqPassword: userPass }

    if(userPass === ""){
        alert("Please enter your password");
        return;
    }
    const res= fetch('http://127.0.0.1:5004/user/updatePass', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
    })
 
    
    res.then((v)=>v.json())
    .then((v)=>{
       if(v.updated){setUpdated(true)}else{setUpdated(false)}
    })
    .catch((e)=>{
      setUpdated(false)
    console.log(e)
    })
    
    
    }

useEffect(() => {},[])


    return (
    <>
    {!isUpdated ? <>
    <div style={{display:"flex",flexDirection:"column",padding:30}}>
    <div style={{textAlign:'center',paddingBottom:30}}>
  <Link href="/" style={{margin:10,cursor:'pointer',color:"blue"}}>Home</Link>
  </div>
     <input type="password" placeholder="Old Password" onChange={(v:any)=>{setUserName(v.target.value)}} className="input-field"/>
     <input type="password"  placeholder="New Password" onChange={(v:any)=>{setPass(v.target.value)}} className="input-field"/>
    
    </div>
    <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}> <button  onClick={()=>{userUpdatePassword()}} className="btn-lgn">Login</button></div>
     
        </>:<>


        <div  style={{display:"flex", alignItems:'center', flexDirection:'column'}}>
  <div>
  <Link href="/" style={{margin:10,cursor:'pointer',color:"blue"}}>Home</Link>
  </div>
   <p style={{marginTop:50}}>Password Successfully Updated</p>
</div>  
      
        </>
      }
    </>
    )
  }


