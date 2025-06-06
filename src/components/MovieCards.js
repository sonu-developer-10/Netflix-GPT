import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="flex">
      <div className="w-40">
        <img
          className="rounded-md"
          alt="movie card"
          src={IMG_CDN_URL + posterPath}
        />
      </div>
    </div>
  );
};

export default MovieCards;
