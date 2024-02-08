import React from "react";
import "./detailsBanner.scss";
import useFetch from "../../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/img";

import PosterFallback from "../../../assets/no-poster.png";
import dayjs from "dayjs";
import CircleRating from "../../../components/circleRating/CircleRating";
import { PlayIcon } from "../PlayButton";

const DetailsBanner = ({ video, crew }) => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const { url } = useSelector((state) => state.home);

  const _geners = data?.genres?.map((gen) => {
    {
      return (
        <>
          <span className="genres" key={gen.id}>
            {gen.name}
          </span>
        </>
      );
    }
  });

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );
  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <>
              <div className="backdrop-img">
                <Img src={url.backdrop + data.backdrop_path} />
              </div>
              <div className="opactiy-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data.poster_path ? (
                      <Img
                        src={url.backdrop + data.poster_path}
                        className="posterImg"
                      />
                    ) : (
                      <Img src={PosterFallback} className="posterImg" />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">{`${
                      data.title || data.name
                    } (${dayjs(data.relese_date).format("YYYY")})`}</div>
                    <div className="subtitle">{data.tagline}</div>
                    <span style={{ marginBottom: "25px" }}>{_geners}</span>
                    <div className="row">
                      <CircleRating
                        className="circleRating"
                        rating={data.vote_average.toFixed(1)}
                      />
                      <div className="playbtn" onClick={() => {}}>
                        <PlayIcon />
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>
                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data.overview}</div>
                    </div>
                    <div className="info">
                      {data.status && (
                        <div className="infoItem">
                          <span className="text bold">Status</span>
                          <span className="text">{data.status}</span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="infoItem">
                          <span className="text bold">Release Date</span>
                          <span className="text">
                            {dayjs(data.release_date).format("MMM DD, YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="infoItem">
                          <span className="text bold">Runtime</span>
                          <span className="text">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>
                    {director?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Director : </span>
                        <span className="text">
                          {director?.map((d, index) => {
                            return (
                              <>
                                <span>
                                  {d.name}
                                  {director.length - 1 !== index && ", "}
                                </span>
                              </>
                            );
                          })}
                        </span>
                      </div>
                    )}
                    {writer?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Writer : </span>
                        <span className="text">
                          {writer?.map((d, index) => {
                            return (
                              <>
                                <span>
                                  {d.name}
                                  {writer.length - 1 !== index && ", "}
                                </span>
                              </>
                            );
                          })}
                        </span>
                      </div>
                    )}
                    {data?.created_by?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Creator : </span>
                        <span className="text">
                          {data?.created_by?.map((d, index) => {
                            return (
                              <>
                                <span>
                                  {d.name}
                                  {data?.created_by.length - 1 !== index &&
                                    ", "}
                                </span>
                              </>
                            );
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </ContentWrapper>
            </>
          )}
        </>
      ) : (
        <>
          <div className="detailsBannerSkeleton">
            <ContentWrapper>
              <div className="left skeleton"></div>
              <div className="right">
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row skeleton"></div>
              </div>
            </ContentWrapper>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsBanner;
