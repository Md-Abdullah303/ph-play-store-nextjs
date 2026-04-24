import Banner from "@/components/HomePage/Banner/Banner";
import Stats from "@/components/HomePage/Banner/Stats/Stats";
import TrandingApps from "@/components/HomePage/TrandingApps/TrandingApps";


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats/>
            <TrandingApps/>
        </div>
    );
};

export default HomePage;