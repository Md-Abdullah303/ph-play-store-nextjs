'use client'
import { InstalledAppContext } from "@/context/InstallAppProvider/InstallAppProvider";
import { use, useContext } from "react";



const InstallationPage = () => {

    const {installApp} = use(InstalledAppContext)
    console.log(installApp);
    return (
        <div className="w-[70%] sm:container mx-auto py-20 px-10">
            <h1 className="text-center text-2xl sm:text-5xl font-bold">Your Install Apps</h1>

            <div className="">
                <h3 className="text-xl sm:text-3xl">Installed App : {installApp.length}</h3>
                <div className="">
                    {
                        installApp.length === 0 ? 
                        "no data" :
                        "data dekhaitasi"
                    }
                </div>
            </div>
        </div>
    );
};

export default InstallationPage;