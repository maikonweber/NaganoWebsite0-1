import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Topbar from '../Components/Topbar'
import Header from '../Components/Header'
import Card from '../Components/Card'
import { HomeContainer,BoxCard } from '../styles/homeStyle'
import SectionText from '../Components/SectionText'
import Footer from '../Components/Footer'
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

      <SectionText 
          title="Qual o nosso diferencal?"
          text="Preencha o formulário abaixo e receba um orçamento para a criação de um site profissional! Nós da Consultoria Digital, somos uma empresa especializada em WordPress!"
          image="/01-image.png"
          order="normal"
      />
      <SectionText 
        title="Qual o nosso diferencal?"
        text="Preencha o formulário abaixo e receba um orçamento para a criação de um site profissional! Nós da Consultoria Digital, somos uma empresa especializada em WordPress!"
        image="/01-image.png"
        order="reverse"
      />
    
      <Footer/>
    </HomeContainer>
  )
}
