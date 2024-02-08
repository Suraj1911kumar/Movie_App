import React from "react";
import HeroBanner from "./Herobanner/HeroBanner";
import Trending from "./Trending/Trending";
import "./Home.scss";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      {/* <div style={{ height: 1000 }}></div> */}
    </div>
  );
};

export default Home;
