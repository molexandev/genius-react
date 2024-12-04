import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contacts from './pages/contacts';
import NotFound from './pages/404';
import './App.css';

function App() {
   return (
      <Router>
         {' '}
         {/* Додаємо BrowserRouter */}
         <div className="App">
            <header className="App-header">
               <Link to="/">Home</Link>
               <Link to="/contacts">Contact</Link>
               <Link to="/about">About</Link>
            </header>
            <main>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />{' '}
                  {/* Універсальний шлях для 404 */}
               </Routes>
            </main>
         </div>
      </Router>
   );
}

export default App;
