import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Oval } from "react-loader-spinner";


const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#EEEEEE]">
                {isNavigating && <div className="max-w-7xl mx-auto min-h-screen flex justify-center items-center">
                    <Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="#176AE5"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;