// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import BlogList from './pages/BlogList';
import AdminPostsPage from './pages/AdminPostsPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/AdminPostsPage" element={<AdminPostsPage/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
