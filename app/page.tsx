


import Image from 'next/image'
import NavBar from '@/src/common/navbar'

import variables from './variables.module.scss';
import Layout from '@/src/home';
import Home from '@/src/home';

import RootLayout from './layout';
import Context from '@/context/context';

export default function App() {
  return (
   <RootLayout>
    <Context>
        <Home/>
   </Context>
   </RootLayout>
  )
}
