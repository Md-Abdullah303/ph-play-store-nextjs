"use client";
import { InstalledAppContext } from "@/context/InstallAppProvider/InstallAppProvider";
import useMyApps from "@/hooks/MyApps";
import Image from "next/image";
import React, { use, useContext } from "react";
import { ClockLoader } from "react-spinners";
import { toast } from "react-toastify";

/***
 * companyName:"WhatsApp LLC"
description:"WhatsApp Messenger is a free messaging app available for Android and other smartphones. WhatsApp uses your phone's Internet connection to let you message and call friends and family. Switch from SMS to WhatsApp to send and receive messages, calls, photos, videos, documents, and voice messages. Stay connected with people no matter where they are, safely and securely with end-to-end encryption."
downloads:"5000M"
id:1
image:"https://i.pinimg.com/736x/c6/09/0d/c6090df18193e2616a6a32076883b70c.jpg"
ratingAvg:4.5
ratings:(5) [{…}, {…}, {…}, {…}, {…}]
reviews:"172000K"
size:80
title:"WhatsApp Messenger"
 */

const AppsDetailsPage = ({ params }) => {
  const { appId } = use(params);
  const { myAllApps, spinner } = useMyApps();
  const expectedApp = myAllApps.find((app) => app.id === Number(appId));

  const { installApp, setInstallApp } = use(InstalledAppContext);

  const handleClicked = (receiveApp) => {
    if (!spinner) {
      const isExist = installApp.some((app) => app.id == receiveApp.id);
      if (isExist) {
        toast.error(`${receiveApp.title} are already installed`);
        
        return;
      } else if (!isExist) {
        setInstallApp([...installApp, receiveApp]);
        toast.success(`${receiveApp.title} are installed`);
      }
    }
  };

  return (
    <div className="w-[70%] md:container mx-auto p-10">
      {spinner ? (
        <div className="flex p-20 justify-center items-center">
          <ClockLoader />
        </div>
      ) : (
        <div className="flex items-start gap-10 bg-base-300 p-10 rounded-xl">
          <div className="bg-amber-100 rounded-xl overflow-hidden">
            <img className="w-40 sm:w-80 " src={expectedApp.image} alt="" />
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              {expectedApp.title}
            </h1>
            <p className="text-lg md:text-xl font-semibold">
              Developed by :
              <span className="font-normal ml-2">
                {expectedApp.companyName}
              </span>
            </p>
            {/* downloads, rating and total review */}
            <div className="flex items-center shadow-sm gap-4 py-5 border border-gray-200 rounded-2xl px-5">
              <div className="flex items-center gap-2 flex-col text-lg">
                <img
                  src="../../../images/icon-downloads.png"
                  alt="download img"
                ></img>
                <p>{expectedApp.downloads}</p>
              </div>
              <div className="flex items-center gap-2 flex-col text-lg">
                <img
                  src="../../../images/icon-ratings.png"
                  alt="rating img"
                ></img>
                <p>{expectedApp.ratingAvg}</p>
              </div>
              <div className="flex items-center gap-2 flex-col text-lg">
                <img
                  src="../../../images/icon-downloads.png"
                  alt="reviews img"
                ></img>
                <p>{expectedApp.reviews}</p>
              </div>
            </div>
            <button
              onClick={() => handleClicked(expectedApp)}
              className="mt-10 btn btn-ghost bg-purple-400 text-white"
            >
              Install Now {expectedApp.size}MB
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppsDetailsPage;
