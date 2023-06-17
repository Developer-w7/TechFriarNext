"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react"

import { AiFillFileText } from 'react-icons/ai';
import NavBar from "@/src/common/navbar";
import Footer from "@/src/common/footer";

export default function Login() {

  const [userName, setUserName] = useState<string>("");
  const [userPass, setPass] = useState<string>("");
  const [tokenStatus, setTokenStatus] = useState(false);
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


       localStorage.setItem('token_auth', v.token);
    })
    .catch((e)=>{
      setLoggedIn(false)
    console.log(e)
    })
    
    
    }

useEffect(() => {

  const token = localStorage.getItem('token_auth');
  if (token) {
    setLoggedIn(true)
  }

},[])


    return (

      
    <div>

    <NavBar/>
    <div style={{minHeight:"100vh"}}>
 
        
        
        <>

<div  style={{display:"flex", alignItems:'center', flexDirection:'column'}}>
  <div>
  <Link href="/password" style={{margin:10,cursor:'pointer',color:"blue"}}>Change Password</Link>
  <span onClick={()=>{setLoggedIn(false);}} style={{margin:20,cursor:'pointer',color:"blue"}}>Logout</span>
  </div>
   <p style={{marginTop:50}}>Welcome, To Home Page</p>

<div className="flex-area">
   <span><AiFillFileText  size={40}/><a target="_blank" href="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf">Download</a></span>
   <span><AiFillFileText  size={40}/><a target="_blank" href="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf">Download</a></span>
   <span><AiFillFileText  size={40}/><a target="_blank" href="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf">Download</a></span>
   <span><AiFillFileText  size={40}/><a target="_blank" href="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf">Download</a></span>
   <span><AiFillFileText  size={40}/><a target="_blank" href="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf">Download</a></span>
   <span><AiFillFileText  size={40}/><a target="_blank" href="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf">Download</a></span>
   <span><AiFillFileText  size={40}/><a target="_blank" href="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf">Download</a></span>
   <span><AiFillFileText  size={40}/><a target="_blank" href="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf">Download</a></span>
   <span><AiFillFileText  size={40}/><a target="_blank" href="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf">Download</a></span>
   <span><AiFillFileText  size={40}/><a target="_blank" href="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf">Download</a></span>
  

   </div>
</div>      
  
         
         </>
      
      {/* <Footer/> */}
    </div>
    </div>
    )
  }


