import Image from 'next/image'
import NavBar from '@/src/common/navbar'

import variables from './variables.module.scss';
import Layout from '@/src/home';
import Home from '@/src/home';

import RootLayout from './layout';

export default function App() {
  return (
   <RootLayout>
   <Home/>
   </RootLayout>
  )
}
