import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Activities from './Activities';
import Favourites from './Favourites';
import Cardio from './Cardio';
import Functional from './Functional';
import Bodyweightworkout from './bodyweightworkout';
import Weightedworkout from './weightedworkout';
import Chest from './Chest';

export default function App() {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/activities">Activities</Link>{"  "}
          <Link to="/favourites">Favourites</Link>{"  "}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/Cardio" element={<Cardio />} />
          <Route path="/functional" element={<Functional />} />
          <Route path="/bodyweightworkout" element={<Bodyweightworkout />} />
          <Route path="/weightedworkout" element={<Weightedworkout />} />
          <Route path="/Chest" element={<Chest />} />
        </Routes>
      </Router>
    );
}

// export default App;
