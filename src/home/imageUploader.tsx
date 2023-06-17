"use client"

import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";


export default function Upload() {

  const [imgCollection, setImgCollection] = useState<any>("");
  const [userPass, setPass] = useState<string>("");


  const userNameRef=useRef("");
  const userPassRef=useRef("");
  // const ref = React.useRef<HTMLInputElement>(null)

function onFileChange(e:any) {

    console.log(e.target.files)
    setImgCollection(e.target.files)
}
 function onSubmit(e:any) {
    e.preventDefault()
    var formData = new FormData();

    
    for (const key of Object.keys(imgCollection)) {
        console.log(imgCollection[key])
        formData.append("files", imgCollection[key])
    }
    
    fetch("http://localhost:5004/uploadImages", {
        method: 'POST',
        body: formData,
        headers: {
        //   "Content-Type": "multipart/form-data" 
        }
    }).then((v)=>v.json())
    .then(res => {
        console.log(res)
        if(res.status && res.status === "ok"){

           console.log('ok')
            toast.success("Successfully Uploaded !", {
                position: toast.POSITION.TOP_LEFT
              });
        }
    }).catch(err => {console.log(err)});

    // fetch('http://127.0.0.1:5004/uploadimages', {
    //     method: 'POST',
    //     body: formData
    //   }).then(res => {
    //     console.log(res)
    // }).catch(err => {console.log(err)});

}

    return (
    <>
     <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:'30%'}}>
                        <div className="form-group">
                            <input type="file" name="imgCollection" onChange={onFileChange} multiple />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
    </>
    )
  }


