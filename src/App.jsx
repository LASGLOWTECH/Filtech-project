import Navbar from './Navbar'
import Home from './home';
import { Routes, Route } from "react-router-dom"
function App() {
 

  return (
    <div className="App  ">
      <Navbar/>
   {/* <Routes> */}


     <Home />
      {/* <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/causes' element={<Causes />} />
      <Route path='/team' element={<Team />} />
      <Route path='/Gallery' element={<Gallery />} /> */}
    {/* </Routes> */}

    {/* <Footer /> */}
  </div>
  )
}

export default App;
