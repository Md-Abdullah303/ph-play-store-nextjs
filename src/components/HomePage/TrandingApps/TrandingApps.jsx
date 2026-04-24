"use client";
import MyApps from "@/hooks/MyApps";
import HomePageAppCard from "@/UI/HomePageAppCard/HomePageAppCard";
import React from "react";

const TrandingApps = () => {
  const { myAllApps, spinner } = MyApps();
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

      {/* {spinner ? (
        "loding..."
      ) : ( */}
        <div className="">
          {myAllApps.map((app, ind) => (
            <HomePageAppCard key={ind} app={app} />
          ))}
        </div>
      {/* )} */}
    </div>
  );
};

export default TrandingApps;
