import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skil from './components/Skil/Skil';
import Work from './components/Work/Work';
import ContactMe from './components/ContactMe/ContactMe';
import Hero from './components/Hero/Hero';
import Paralex from './components/Paralex/Paralex';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowDown':
        case 's': // Scroll down
          window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth',
          });
          break;
        case 'ArrowUp':
        case 'w': // Scroll up
          window.scrollBy({
            top: -window.innerHeight,
            left: 0,
            behavior: 'smooth',
          });
          break;
        default:
          break;
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <section id='home'>
        <Header /> 
        <Hero /> 
      </section>
      <section> <Paralex title='About Me'/> </section>
      <section id='aboutme'><AboutMe/></section>
      <section id ='mySkils'> <Paralex title='My Skils'/> </section>
      <section id='skils'> <Skil /></section>
      <section> <Paralex title='Projects'/> </section>
      <section id='work'> <Work/> </section>
      <section> <Paralex title='Contact'/> </section>
      <section id='contact'><ContactMe/> </section>
    </div>
  );
}

export default App;
