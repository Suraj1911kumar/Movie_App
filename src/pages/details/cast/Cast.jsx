import React from "react";
import "./cast.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/img";

import avatar from "../../../assets/avatar.png";
const Cast = () => {
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="heading">Top Cast :</div>
        <div className="castInfoFull">
          <div className="castInfo">
            <Img src={avatar} />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Cast;
