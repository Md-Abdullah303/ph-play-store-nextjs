"use client";
import AllAppsContainer from "@/components/AppsPage/AllAppsContainer/AllAppsContainer";
import React from "react";

const AppsPage = () => {
  return (
    <div className="w-[70%] sm:container mx-auto">
      <div className="text-center space-y-3 py-10">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="w-[50%] mx-auto text-gray-400 font-semibold text-lg">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <AllAppsContainer></AllAppsContainer>
    </div>
  );
};

export default AppsPage;
