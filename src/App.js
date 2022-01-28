import './app.scss';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';




function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="sections">
      <Intro></Intro>
      <Portfolio></Portfolio>
      <Contact></Contact>
      </div>

    </div>
  );
}

export default App;
