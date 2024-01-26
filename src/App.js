import './App.css';
import Header from './components/Header';
import Stepper from './components/Stepper';
import { example1, example2, example3, example4 } from './components/HelperComponents';

function App() {
  const list = [example1, example2, example3, example4]
  return (
    <div className="App">
      <Header />
      <Stepper list={list}/>
    </div>
  );
}

export default App;
