import './css/style.css';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import SideNav from './components/SideNav';
import { Shop } from './components/Shop';
import { Medicine } from './components/Medicine';

function App() {
  return (
    <div className="app">
      <div className="sideNav">
        <SideNav />
      </div>
      <div className="content">
        <Home />
        <Shop />
        <Medicine />
        <Contact />
      </div>
    </div>
  );
}

export default App;
