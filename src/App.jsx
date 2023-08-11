import './App.css';
import Nav from './components/Navigation/Nav';
import Hero from './components/HeroSection/Hero';
import Explore from './components/Explore/Explore';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import ExploreTwo from './components/ExporeTwo/ExploreTwo';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <About />
            <Experience />
            <Explore />
            <ExploreTwo />
            <Footer />
        </div>
    );
}

export default App;
