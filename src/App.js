import Home from './component/home/Home'
import Service from './component/home/jobs/Service';
import CustomNav from './component/home/navs/Nav';
import Price from './component/home/pricing/Price';
import Footer from './component/home/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './component/home/Contact/Contact';

function App() {
  return (
    <div className="App">
      <>
      <Router>
      <div>
        <CustomNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path='/price' element={<Price/>}/>
          <Route exact path='/contact' element={<Contact/>}/>

        </Routes>
      </div>
    </Router>
      
    <Footer/>


      </>
    </div>
  );
}

export default App;
