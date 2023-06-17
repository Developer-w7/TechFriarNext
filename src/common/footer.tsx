import Image from 'next/image'

import React, {FC} from 'react';
import { AiFillFileText } from 'react-icons/ai';


type NavBarProps = {
  number?: number
 
}
const Footer:FC<NavBarProps>=({number}) =>{
  return (
<footer className="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>
        {/* Grid container */}
        <div className="container pt-4">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><AiFillFileText size={40}/></a>
            {/* Twitter */}
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><AiFillFileText size={40}/></a>
            {/* Google */}
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><AiFillFileText size={40}/></a>
            {/* Instagram */}
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><AiFillFileText size={40}/></a>
            {/* Linkedin */}
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><AiFillFileText size={40}/></a>
            {/* Github */}
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><AiFillFileText size={40}/></a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center text-dark p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        </div></footer>
  )
}
export default Footer;