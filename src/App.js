
import { Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage/HomePage';
import SignIn from './page/SignIn/SignIn';
import Profile from './page/Profile/Profile';
import CreatePost from './page/CreatePost/CreatePost';
import EditPost from './page/EditPost/EditPost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/home" element={< HomePage/>} />
        <Route path="/signin" element={< SignIn/>} />
        <Route path="/profile" element={< Profile/>} />
        <Route path="/create" element={< CreatePost/>} />
        <Route path="/edit/:id" element={< EditPost/>} />
      </Routes>
    </div>
  );
}

export default App;
