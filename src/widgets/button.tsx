import Image from 'next/image'

import React, {FC} from 'react';


type ButtonProps = {
label?:string
 
}
const Button:FC<ButtonProps>=({label}) =>{
  return (
   <button>{ label || "Click Me"}</button>
  )
}
export default Button;