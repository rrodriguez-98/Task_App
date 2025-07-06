import { BrowserRouter } from 'react-router-dom';

//Import components
import Header from './components/Header/Header'

//Import css and Bootstrap
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      </BrowserRouter>
      
    </>
  )
}

export default App
