"use client";
import React, { useEffect, useState } from "react";

const useMyApps = () => {
  const [spinner, setSpinner] = useState(true);
  const [myAllApps, setMyAllApps] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        // console.log(data);
        setMyAllApps(data);
      } catch (e) {
        console.log("error:", e);
      } finally {
        setSpinner(false);
      }
    };
    fetchApps();
  }, []);
  return { spinner, myAllApps };
};

export default useMyApps;
