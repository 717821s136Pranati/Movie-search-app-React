import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import poster from "../images/poster.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${poster})` }}>
        <div className="headerContainer">
          <h1>ENTERTAINMENT HUB</h1>
          <p>Know about your favourite movies & Tv shows </p>
          <Link to="/menu">
            <button>Let's go</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
