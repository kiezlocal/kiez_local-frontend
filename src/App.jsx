import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes} from "react-router-dom";
import Kiez from "./pages/Kiez";
import KiezDetails from "./pages/KiezDetails";
import EventDetails from "./pages/EventDetails"

function App() {
  

  return (
    <>
      <Header/>

<Routes>
      <Route path="/"> </Route>
      <Route path="/kiezs" element={<Kiez/>}></Route>
      <Route path="/kiezs/:kiezId" element={<KiezDetails/>}></Route>
      <Route path="/events/:eventId" element={<EventDetails/>}></Route>
      <Route path="/about" element= {<About/>}></Route>
      {/* <Route path="*" element= {<NotFound/>}></Route> */}
      
</Routes>

      <Footer/>
</>
  );
}

export default App;
