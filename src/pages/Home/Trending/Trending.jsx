import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../Hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");
  const onTabChange = (tab) => {
    setEndPoint(tab === "day" ? "day" : "week");
  };
  const { data, loading } = useFetch(`/trending/all/${endPoint}`);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["day", "week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel  data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
