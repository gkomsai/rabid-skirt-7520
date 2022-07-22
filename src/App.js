
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import AllRoutes from './routes/AllRoutes';


function App() {
  return (
    <div className="App"w={"80vw"}  m="auto" >
    <Navbar/>
    <AllRoutes />
    <Footer />
    </div>
  );
}

export default App;
