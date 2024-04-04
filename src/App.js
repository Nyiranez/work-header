
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../src/components/header'
import { Footer } from './components/footer';
import { Home } from './components/pages/home';
import { About } from './components/pages/about';
import { Error } from './components/pages/error';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />

    </div>
  );
}

export default App;
