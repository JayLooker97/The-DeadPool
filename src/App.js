import { Route, Routes } from 'react-router-dom';
import { Footer, Navigation } from './components';
import { HomePage, DeadPoolPage, BetsPage, ContactPage} from './pages';
import './index.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='deadpool' element={< DeadPoolPage />} />
        <Route path='bets' element={< BetsPage />} />
        <Route path='contact' element={< ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
