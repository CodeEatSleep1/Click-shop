import React  from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'



  
  function App() {
    // console.log("why I am rendered")
    
    


  return (
    <div className="scroll-smooth ">
    <Header/>
    <main className="mt-32">
      <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default App




