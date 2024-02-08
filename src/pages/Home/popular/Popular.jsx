import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../Hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  const { data, loading } = useFetch(`/${endPoint}/popular`);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "TV shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel endPoint={endPoint} data={data?.results} loading={loading} />
    </div>
  );
};

export default Popular;
