import React from 'react';
import demoImg from "../assets/newsimg.jpg";

const NewsCards = ({ newsData }) => {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-72">
      <div className="relative h-40 sm:h-[200px] mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src={(!newsData.urlToImage) ? demoImg : newsData.urlToImage}
          className="h-full w-full object-cover"
          alt="news"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h5 className="block mb-2 font-sans text-sm sm:text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {newsData.title ? `${newsData.title.slice(0, 22)}....` : ""}
        </h5>
        <p className="block font-sans text-xs sm:text-base antialiased font-light leading-relaxed text-inherit">
          {newsData.content ? `${newsData.content.slice(0, 120)}....` : "No description available."}
        </p>
      </div>
      <div className="p-4 sm:p-6 pt-0">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs sm:text-xs py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          <a href={newsData.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </button>
      </div>
    </div>
  );
};

export default NewsCards;