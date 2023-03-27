import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Results from './components/Results';
import { CategoryProvider } from './Context';


function App() {

  return (
    <CategoryProvider>
    <div className="App">
      <div className='content'>
        <Navbar />
        <Searchbar/>
      </div>
    </div>
    </CategoryProvider>
  );
}

export default App;
