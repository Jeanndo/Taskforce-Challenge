import React from "react";
import "../../App.css";
import Header from "../Header/Header";
import AppContents from "../Body_Section/AppContents";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
/**
 * @function Home 
 * @returns Returns a main component which render all our components
 */
const Home = () => {
  return (
    <div>
      <Header />
      <AppContents />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
