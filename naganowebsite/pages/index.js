import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Topbar from '../Components/Topbar'
import Header from '../Components/Header'
import Card from '../Components/Card'
import { HomeContainer,BoxCard } from '../styles/homeStyle'
export default function Home() {
  return (
    <HomeContainer >
      <Head>
        <title>Nagano Consultoria</title>
        <meta name="description" content="Web site for Nagano Consultoria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar/>
      <Header/>
      <BoxCard > 
          <Card img="/financa.png" title="Finanças" text="Estudamos e pesquisamos as melhores opções de investimentos e soluções financeiras, adequadas aos objetivos e momento de vida."/>
          <Card img="/chart.png" title="Crescimento Financeiro" text="Estudamos e pesquisamos as melhores opções de investimentos e soluções financeiras, adequadas aos objetivos e momento de vida." />
          <Card img="/money.png" title="Economia" text="Estudamos e pesquisamos as melhores opções de investimentos e soluções financeiras, adequadas aos objetivos e momento de vida." />
      </BoxCard>

    
    </HomeContainer>
  )
}
