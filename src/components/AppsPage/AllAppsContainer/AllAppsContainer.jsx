'use client'
import useMyApps from '@/hooks/MyApps';
import HomePageAppCard from '@/UI/HomePageAppCard/HomePageAppCard';
import React from 'react';

const AllAppsContainer = () => {
    const {myAllApps, spinner} = useMyApps();


    // console.log(myAllApps, spinner);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 '>
            {
                myAllApps.map(app => <HomePageAppCard key={app.id} app={app}></HomePageAppCard>)
            }
        </div>
    );
};

export default AllAppsContainer;