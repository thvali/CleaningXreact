import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Section from './Components/Section/Section';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';
import Card from './Components/Card/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Section/>
      <Menu/>
      <About/>
      <Card/>  
    </div>
  );
}

export default App;
