// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login'; 
import KiezGrid from './pages/Kiez';
import EditEventForm from './pages/EditEventForm';
import EditKiezForm from './pages/EditKiezForm';
import Imprint from './pages/Imprint';
import TermsOfUse from './pages/TermsOfUse';

function App() {
  

  return (
    <>
<Router>
<Navbar/>
<div>
<Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/about" element= {<About/>}></Route> 
      <Route path="/register" element= {<Register/>}></Route> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/kiez" element={<KiezGrid/>}></Route>
      <Route path="/imprint" element={<Imprint />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/events/:eventId/edit" element={<EditEventForm />} />
      <Route path="/kiezs/:kiezId/edit" element={<EditKiezForm />} />
      {/* <Route path="/kiezs/:kiezId" element={<KiezDetails/>}></Route>
      <Route path="/events/:eventId" element={<EventDetails/>}></Route> */}
      
      {/* <Route path="*" element= {<NotFound/>}></Route> */}
      
</Routes>
</div>
</Router>
      <Footer/>
</>
  );
}

export default App;
