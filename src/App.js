
import './App.css';
import Header from './components/headers/header';
import FirstComponent from './components/firstComponent/FirstComponent';
import Middle from './components/middle/middle';
import LastComponent from './components/lastComponent/lastComponent';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <Header/>
      <FirstComponent/>
      <Middle/>
      <LastComponent/>
      <button className='load'>Load More</button>
      <Footer/>
    </div>
  );
}

export default App;
