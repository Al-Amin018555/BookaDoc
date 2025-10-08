import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Doctors from "../Doctors/Doctors";

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="bg-[#EEEEEE]">
            <Banner></Banner>
            <Doctors data={data}></Doctors>
        </div>
    );
};

export default Home;