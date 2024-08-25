import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skil from './components/Skil/Skil'
import Work from './components/Work/Work';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Paralex from './components/Paralex/Paralex';

function App() {
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
      <section>Paralerx </section>
      <section><Footer/> </section>
      
    </div>
  );
}

export default App;
