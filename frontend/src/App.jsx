// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import BlogList from './pages/BlogList';
import AdminPostsPage from './pages/AdminPostsPage';
import Landinpage from './pages/landingPage';
import AboutPage from './pages/AboutPage';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
           <Route path="/AboutPage" element={<AboutPage/>} />
          <Route path="/" element={<Landinpage />} />
          <Route path="/BlogList" element={<BlogList/>} />
          <Route path="/AdminPostsPage" element={<AdminPostsPage/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
