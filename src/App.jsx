import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProviderWrapper } from './context/auth.context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import KiezGrid from './pages/Kiez';
import EditEventForm from './pages/EditEventForm';
import EditKiezForm from './pages/EditKiezForm';
import EventDetails from './pages/EventDetails';
import KiezDetails from './pages/KiezDetails';
import Imprint from './pages/Imprint';
import TermsOfUse from './pages/TermsOfUse';
import NotFound from './pages/NotFound';
import AddEventForm from './pages/AddEventForm';
import IsPrivate from './components/IsPrivate';
import LocalKiezLogo from './assets/LocalKiez.svg';
import PrivacyNotice from './pages/PrivacyNotice';


function App() {
  return (
    <ChakraProvider>
      <AuthProviderWrapper>
        <Router>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/">
              <img src={LocalKiezLogo} alt="LocalKiez Logo" style={{ height: "150px", marginRight: "150px" }} />
            </Link>
          </div>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/kiez" element={<KiezGrid />} />
              <Route path="/imprint" element={<Imprint />} />
              <Route path="/privacy" element={<PrivacyNotice />} />
              <Route path="/terms" element={<TermsOfUse />} />
              <Route path="/events/:eventId" element={<EventDetails />} />
              <Route path="/kiezs/:kiezId" element={<KiezDetails />} />
              <Route path="/events/:eventId/edit" element={<IsPrivate><EditEventForm /></IsPrivate>} /> 
              <Route path="/events/addevent" element={<IsPrivate><AddEventForm /></IsPrivate>} /> 
              <Route path="/kiezs/:kiezId/edit" element={<EditKiezForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </AuthProviderWrapper>
    </ChakraProvider>
  );
}

export default App;
