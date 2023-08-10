import './App.css';
import Nav from './components/Navigation/Nav';
import Hero from './components/HeroSection/Hero';
import Explore from './components/Explore/Explore';
import Experience from './components/Experience/Experience';
import About from './components/About/About';

function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <About />
            <Experience />
            <Explore />
        </div>
    );
}

export default App;
