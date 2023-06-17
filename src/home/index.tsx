"use client"

import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react"

import { AiFillFileText } from 'react-icons/ai';
import NavBar from "../common/navbar";
import Footer from "../common/footer";
import { ThemeContextProvider } from "@/context/context";
import { ColorRing } from  'react-loader-spinner'
import Upload from "./imageUploader";
import { setFips } from "crypto";

export default function Login() {

  const [userName, setUserName] = useState<string>("");
  const [showUploader, setShowUploader] = useState<boolean>(false);
  const [displayName, setDisplayName] = useState<string|null>("");
  const [userPass, setPass] = useState<string>("");
  const [files, setFiles] = useState<[]>([]);



  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoding] = useState(true);

  const userNameRef=useRef("");
  const userPassRef=useRef("");

  const { message, setMessage }:any = useContext(ThemeContextProvider);

  
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
console.log(v)
       setIsLoding(false)
       localStorage.setItem('token_auth', v.token);
       localStorage.setItem('user_name', v.name);
       localStorage.setItem('user_id_r', v.id);
       setDisplayName(v.name);

    })
    .catch((e)=>{
      setLoggedIn(false)
      setIsLoding(false)
    console.log(e)
    })
    
    
    }

const getFiles=()=>{
  const myHeaders = new Headers();
  const token = localStorage.getItem('token_auth');
  const user_id_r= localStorage.getItem('user_id_r');

  myHeaders.append('Content-Type', 'application/json');
  let data={  id: '648d4e5cf73ce300389a2154',token,user_id_r}
  const res= fetch(`http://127.0.0.1:5004/getFiles?id=${user_id_r}`, {
    method: 'GET',
    headers: myHeaders,
  })   
  res.then((v)=>v.json())
  .then((v)=>{
     if(v.status==="ok"  ){
      setFiles(v.records)
      }

  

  })
  .catch((e)=>{
    setLoggedIn(false)
    setIsLoding(false)
  console.log(e)
  })
  
  
}


useEffect(() => {
  getFiles();
  const token = localStorage.getItem('token_auth');
  if (token) {
    setIsLoding(false)
    setLoggedIn(true)
  }else{
    setIsLoding(false)
  }

},[])
const getListOfFiles =(files:[]) => {
console.log(files)
  let fileList:any=[]
  files.map((v:any)=>{
    if(v.imgCollection && v.imgCollection.length > 0){
      fileList=[...fileList,...v.imgCollection]
    }
    

  })

console.log(fileList)
return fileList;
}
if(showUploader){
  return (
    <>
   <Upload/>
   <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:50}}>
   <span  style={{textAlign:"center",cursor:"pointer",color:'blue',fontSize:18}} onClick={()=>{setShowUploader(false);getFiles();}}>{"<< Close >>"}</span>
   </div>
   </>
  )
}
if(isLoading){
  return (
    <div>
    {/* <NavBar/> */}
    <div className="loader">
    <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
  </div>
  </div>
  )
}
    return (

      
    <div>

    {/* <NavBar/> */}
    <div style={{minHeight:"100vh"}}>


 
    {!isLoggedIn ? <>

    
    <div style={{display:"flex",flexDirection:"column",padding:30}}>
     <input type="text" placeholder="User Name" onChange={(v:any)=>{setUserName(v.target.value)}} className="input-field"/>
     <input type="password"  placeholder="Password" onChange={(v:any)=>{setPass(v.target.value)}} className="input-field"/>
    
    </div>
    <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}> <button  onClick={()=>{userLogin()}} className="btn-lgn">Login</button></div>
     
        </>:
        
        
        <>

<div  style={{display:"flex", alignItems:'center', flexDirection:'column'}}>
  <div>
  <Link href="/password" style={{margin:10,cursor:'pointer',color:"blue"}}>Change Password</Link>
  <span onClick={()=>{setLoggedIn(false);localStorage.removeItem("token_auth");localStorage.removeItem("user_id_r");}} style={{margin:20,cursor:'pointer',color:"blue"}}>Logout</span>
  </div>
 
   <p style={{marginTop:50,fontSize:30}}>Welcome, {displayName||"user"}</p>
  
   <div className="container">
   <div style={{display:"flex",justifyContent:"flex-end",margin:"20px 0",width:"100%"}}>
   
   <a onClick={()=>{setShowUploader(true)}} className="upload-btn">Upload Files</a>

   </div>
  </div>
<div className="flex-area">

  {files && files.length > 0?
     getListOfFiles(files).map((v:any)=> <span><AiFillFileText  size={40}/><a target="_blank" href={v}>{v.substring(v.lastIndexOf('/')+1).substring(0, 8)}</a></span>)
   :<p>No Files Found</p>}


   </div>
</div>      
  
         
         </>
      }
      {/* <Footer/> */}
    </div>
    </div>
    )
  }


