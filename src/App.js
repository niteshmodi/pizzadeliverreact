import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import {Routes , Route ,BrowserRouter} from 'react-router-dom';
import {Naavbar} from "./components"


function App() {
  return (
    <div>
    <Naavbar/>
      <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
     </Routes>

    </div>
   
 
   
  );
}

export default App;


//rafce is the shortcut