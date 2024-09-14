import React  from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'



  
  function App() {
    // console.log("why I am rendered")
    
    


  return (
    <div className="scroll-smooth dark:bg-slate-400 ">
    <Header/>
    <main className="pt-32">
      <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default App




