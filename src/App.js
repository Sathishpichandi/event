import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import WelcomePage from './WelcomePage';
import Start from './Start';
import Modify from './Modify';
import Show from './Show';
import ThankYouPage from './ThankYouPage';
import AboutUs from './AboutUs';

function App() {
  return (
    <center>
    <div className="App">
      <BrowserRouter>
        

        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path="/Start" element={<Start />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/thankYouPage" element={<ThankYouPage />} />
          <Route path="/Show" element={<Show />} />
          <Route path="user/create" element={<Start />} />
          <Route path="/Show/user/:id/edit" element={<Modify />} />
        </Routes>
      </BrowserRouter>
    </div>
    </center>
  );
}

export default App;
