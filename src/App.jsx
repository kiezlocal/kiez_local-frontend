// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
      <Navbar/>
<Router>
<div>
<Routes>
      <Route path="/" element={<Homepage />}/>
      {/* <Route path="/kiezs" element={<Kiez/>}></Route>
      <Route path="/kiezs/:kiezId" element={<KiezDetails/>}></Route>
      <Route path="/events/:eventId" element={<EventDetails/>}></Route>
      <Route path="/about" element= {<About/>}></Route> */}
      {/* <Route path="*" element= {<NotFound/>}></Route> */}
      
</Routes>
</div>
</Router>

      <Footer/>
</>
  );
}

export default App;
