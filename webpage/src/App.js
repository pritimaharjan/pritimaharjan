import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Couple } from './components/Couple';
import { Title } from './components/Title';
import { Countdown } from './components/Countdown';
import { Ourstory } from './components/Ourstory';
import { Friend } from './components/Friend';
import { Lookingforward } from './components/Lookingforward';
import { Wedding } from './components/Wedding';
import { Content } from './components/Content';
import { Gallery } from './components/Gallery';
import { Question } from './components/Question';
import { Rsvp } from './components/Rsvp';
import { Gift } from './components/Gift';


function App() {
  return (
    <div className="App">
      <Home/>
<Couple/>
<Title/>
<Countdown/>
    <Ourstory/>
    <Friend/>
    <Lookingforward/>
    <Content/>
    <Wedding/>
    <Gallery/>
    <Question/>
    <Rsvp/>
 <Gift/>
    </div>
  );
}

export default App;
