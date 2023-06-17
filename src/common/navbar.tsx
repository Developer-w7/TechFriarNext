import Image from 'next/image'

import React, {FC} from 'react';


type NavBarProps = {
  number?: number
 
}
const NavBar:FC<NavBarProps>=({number}) =>{
  return (
    <main className="flex flex-col">
     <div>NavBar</div>
    </main>
  )
}
export default NavBar;