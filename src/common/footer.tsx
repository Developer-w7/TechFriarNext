import Image from 'next/image'

import React, {FC} from 'react';


type NavBarProps = {
  number?: number
 
}
const Footer:FC<NavBarProps>=({number}) =>{
  return (
    <main className="flex flex-col">
     <div>Footer</div>
    </main>
  )
}
export default Footer;