import { Header } from './components/header'
import { Aluno } from './components/aluno'
import { Footer } from './components/footer'

export default function App() {
  return(
    <div>
      <Header title='Curso React + Typescript'/>

      <Aluno Nome = "Max O." Idade={28}/>

      <Aluno Nome = "Katia C." Idade={23}/>

      <Aluno Nome = "Michele B." Idade={20}/>

      <Footer/>
    </div>
  )
}


