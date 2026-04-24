import Image from "next/image";
import React from "react";


/***
 * companyName:"Duolingo"
description:"Learn a new language for free with Duolingo. Practice speaking, reading, listening, and writing in a fun, bite-sized way. Duolingo helps you master over 30 languages like Spanish, French, German, and Japanese. With gamified lessons, streak tracking, and personalized goals, Duolingo makes learning addictive and effective for everyone."
downloads:"500M"
id:15
image:"https://i.pinimg.com/736x/52/b4/20/52b42001bcc7a0cb013c97eeb3ead223.jpg"
ratingAvg:4.7
ratings:(5) [{…}, {…}, {…}, {…}, {…}]
reviews:"14000K"
size:65
title: 
 */

const HomePageAppCard = ({ app }) => {
  console.log(app);
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          {/* <Image className="" src={app.image} alt={'app img'}></Image> */}
        </figure>
          <div className="h-40 bg-blue-300  rounded-lg shadow-sm"></div>
        <div className="card-body">
          <h2 className="card-title">
            {app.companyName}
          </h2>
          <div className="flex items-center justify-between">
            <div className="border border-green-600 bg-green-200 py-1 px-2 rounded-lg text-green-600">
              <p>{app.downloads}</p>
            </div>
            <div className="border border-red-600 bg-red-200 py-1 px-2 rounded-lg text-red-600">
              <p>{app.ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageAppCard;
