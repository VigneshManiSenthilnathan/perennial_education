import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header.jsx'
import './App.css'
import './scss/main.scss'

function App() {

  return (
    <>
    
      <header className='headerstyle'>
        <Header />
      </header>

      <body>
        <section className='hero'>
          <div className='container'>
            <h1 className={styled}>Welcome to Perennial Education</h1>
          
          </div>
        </section>
      </body>


    </>
  )
}

export default App
