import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getStoredAppointment } from "../../Utility/addToLS";
import Appointment from "../../components/Appointment/Appointment";


const Appointments = () => {
    const [allAppointments, setAllAppointments] = useState([]);
    const allData = useLoaderData();

    useEffect(() => {
        const storedAppointments = getStoredAppointment();
        const appoinments = allData.filter(appoinments => storedAppointments.includes(appoinments.id));
        setAllAppointments(appoinments);

    }, [])

    return (
        <div className="max-w-7xl mx-auto p-5 pt-12 md:pt-24">
            <div className="text-[#0F0F0F] text-center space-y-4 mb-8">
                <p className="text-[25px] md:text-[40px] font-extrabold">My Today Appointments</p>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>

            <div className="space-y-4 md:space-y-8 pb-12 md:pb-24">
                {
                    allAppointments.length > 0 ? allAppointments.map((appoinment, idx) => <Appointment key={idx} appoinment={appoinment}></Appointment>) : <div className="mt-10 text-center"> 
                    <p className="text-2xl font-bold">No Appointments Booked Yet!</p> 
                    <Link to='/'> <button className="mt-4 rounded-lg cursor-pointer py-3 px-6 text-white font-bold bg-[#176AE5]">Homepage</button> </Link>
                    </div>
                }


            </div>
        </div>
    );
};

export default Appointments;