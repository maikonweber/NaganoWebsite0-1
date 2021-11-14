import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Topbar from '../Components/Topbar'
import Header from '../Components/Header'
import { Box } from '@chakra-ui/layout'
export default function Home() {
  return (
    <div className={styles.main} >
      <Head>
        <title>Nagano Consultoria</title>
        <meta name="description" content="Web site for Nagano Consultoria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar/>
      <Header/>
      <Box > 

      </Box>

    
    </div>
  )
}
