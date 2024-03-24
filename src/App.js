import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
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
const analytics = getAnalytics(app);
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact component={Home} element={<Home />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

