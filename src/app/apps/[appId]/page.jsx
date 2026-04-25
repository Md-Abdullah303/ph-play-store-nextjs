"use client"
import useMyApps from '@/hooks/MyApps';
import React, { use } from 'react';

const AppsDetailsPage = ({params}) => {
    const {appId} = use(params);
    const {myAllApps, spinner} = useMyApps()
    const expectedApp = myAllApps.find(app=> app.id === Number(appId));

    console.log(expectedApp);
    return (
        <div>
            apps details
        </div>
    );
};

export default AppsDetailsPage;