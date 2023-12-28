
import './App.css';
import Banner from './Components/Banner';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Middle from './Components/Middle';
import card1 from '../src/assets/Mask group.png'
import card2 from '../src/assets/Mask group (1).png'
import card3 from '../src/assets/Mask group (2).png'

function App() {
  return (
    <div className="App">
      <Banner/>
     <div className='crd'>
        <Cards cards={card1} description={'Explore large, destructible environments where no two games are ever the same.'}/>
        <Cards cards={card2} description={'Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royal'}/>
        <Cards cards={card3} description={'Discover even more ways to play across thousands of creator-made game genres'}/>
     </div>
      <Middle/>
      <Footer/>
    </div>
  );
}

export default App;
