"use client";
import useMyApps from "@/hooks/MyApps";
import HomePageAppCard from "@/UI/HomePageAppCard/HomePageAppCard";
import React from "react";
import { HashLoader } from "react-spinners";

const TrandingApps = () => {
  const { myAllApps, spinner } = useMyApps();
  console.log(myAllApps, spinner);

  return (
    <div className="w-[70%] sm:container mx-auto">
      <div className="w-[50%] sm:w-[70%] mx-auto py-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
          Tending Apps
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus reprehenderit id, corrupti doloribus quasi magni
          perspiciatis distinctio, dicta ipsam, nesciunt nobis magnam
          blanditiis!
        </p>
      </div>
      <h1>Apps : {`${spinner ? "loading..." : myAllApps.length}`}</h1>
        {
            spinner ? <div className="flex justify-center items-center h-80"><span className="loading loading-ring loading-xl"></span></div> : 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {
                myAllApps.slice(0,8).map((app, ind)=> <HomePageAppCard key={ind} app={app}></HomePageAppCard>)
              }
            </div>
        }
    </div>
  );
};

export default TrandingApps;
