import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Ourcoffee from '../components/pages/Ourcoffee';
import Foryourpleasure from '../components/pages/Foryourpleasure';
import Home from '../components/pages/Home';
import PageForCard from '../components/pages/pageForCard';

function App() {
  let component;
  // eslint-disable-next-line default-case
  switch(window.location.pathname){
    case "/":
      component = <Home/>; 
      break;
    case "/pages/Ourcoffee":
      component = <Ourcoffee/>;
      break;
    case "/pages/Foryourpleasure":
      component = <Foryourpleasure/>;
      break;
    case "/pages/pageForCard":
      component = <PageForCard/>;
      break;
  }
  return (
    <>
      <Navbar />
      <div className='container'>
      {component}
      </div>
      
    </>
  );
}

export default App;
