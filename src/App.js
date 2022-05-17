import React from "react";
import './styles/App-style/App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Profile />
        <Footer />
      </div>
  )
}

export default App;
