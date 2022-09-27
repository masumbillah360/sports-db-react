import './App.css';
import Home from './compo/Home/Home';
import Nav from './compo/Nav/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div>
        <Nav></Nav>
        <Home></Home>
    </div>
  );
}

export default App;
