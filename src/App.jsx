import { useState } from 'react'
import './style.css'
import $ from 'jquery'
import Portuguese from './Portuguese'
import Matematica from './Matematica'
import Historia from './Historia'
import Biologia from './Biologia'
import Geografia from './Geografia'
import Quimica from './Quimica'
import Fisica from './Fisica'

function App() {

  const [valor, setValor] = useState('')

 
  

  const ola = (event) => {
    setValor(event.target.id)
  }

  
  

  

  return (
    <>
      <div className='app'>
        <div className="navbar">
          <i class="fa-solid fa-language" id='portuguese'onClick={ola}></i>
          <i class="fa-solid fa-plus-minus" id='matematica'onClick={ola}></i>
          <i class="fa-solid fa-dna" id='biologia'onClick={ola}></i>
          <i class="fa-solid fa-vector-square" id='fisica'onClick={ola}></i>
          <i class="fa-solid fa-book-atlas" id='geografia'onClick={ola}></i>
          <i class="fa-solid fa-flask" id='quimica'onClick={ola}></i>
          <i class="fa-solid fa-landmark" id='historia'onClick={ola}></i>
        </div>

        <div className='todo'>

            <div className='olas'></div>
        

          <div className="container-conteudo">


            {
              valor == '' &&
              <div className='sem-nada' style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center',
              justifyContent: 'center'}}>
                <h1 style={{fontSize: '100px'}}>VAMOS COMEÇAR!</h1>
              </div>
            }

            { 
              valor == 'portuguese' &&
              <Portuguese></Portuguese>
            }

            {
              valor == 'matematica' &&
              <Matematica></Matematica>
            }

            {
              valor == 'historia' &&
              <Historia></Historia>
            }

            {
              valor == 'biologia' &&
              <Biologia></Biologia>
            }

            {
              valor == 'quimica' &&
              <Quimica></Quimica>
            }

            {
              valor == 'fisica' &&
              <Fisica></Fisica>
            }

            {
              valor == 'geografia' &&
              <Geografia></Geografia>
            }







            
            

            

            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
