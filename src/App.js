import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import DetailView from './pages/DetailView';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqWNN6v56Vyof2q7BFItBAiWrqk-bPDLQ",
  authDomain: "asim-rahman.firebaseapp.com",
  projectId: "asim-rahman",
  storageBucket: "asim-rahman.appspot.com",
  messagingSenderId: "885905789215",
  appId: "1:885905789215:web:fb273707c7d26b1024e02a",
  measurementId: "G-95FCH4X815"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
function App() {
  return (
    <div>
      <Router>
        <SmoothScroll />
        <ScrollToTop />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/work/:slug' element={<DetailView />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

