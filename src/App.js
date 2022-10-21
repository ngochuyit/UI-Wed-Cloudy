import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutimage1 from './images/Frame 19.png';
import aboutimage2 from './images/download.png';
import aboutimage3 from './images/documents.png';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Navbar/>
        <Header/>
        <Feature/>
        <About image={aboutimage1} title='Comes Wit All You Nedd For Daily Life'/>
        <About image={aboutimage2} title='Download And Get The App Now' />
        <About image={aboutimage3} title='Download And Get The App Now' />
        <Footer/>
    </div>
  )
}

export default App;
