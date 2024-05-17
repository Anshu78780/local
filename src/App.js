import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';
import Pfund from './components/Pfund';
import Operformance from './components/Operformance';
import Opartner from './components/MultiItemAutoSlideCarousel';
import Mfund from './components/Mfund';
import Adminpage from './components/admin/Sidebar';
import Sidebar from './components/admin/Sidebar';
import Dashboard from './components/admin/Dashboard';
import Fqa from './components/Fqa';




function App() {
  return (
    <>
      <Header/>
      <Operformance/>
      <Pfund/>
      
      
      {/* <Opartner/> */}
      <Mfund/>
      {/* <Sidebar/> */}
      
      {/* <Dashboard/> */}
      <Fqa/>
      <Footer/>
    </>
  );
}

export default App;