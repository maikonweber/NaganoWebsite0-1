import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, ButtonGroup } from "@chakra-ui/react"
import Topbar from '../Components/Topbar'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Nagano Consultoria</title>
        <meta name="description" content="Web site for Nagano Consultoria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar/>

     

    
    </div>
  )
}
