import { useState } from "react";
import Doctor from "../../components/Doctor/Doctor";

const Doctors = ({ data }) => {
    const [viewAllDoctor, setViewAllDoctor] = useState(false);
    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="text-center space-y-4 text-[#0F0F0F]">
                <h3 className="font-extrabold text-2xl lg:text-4xl">Our Best Doctors</h3>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className="mt-4 lg:mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    viewAllDoctor ? data.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>) : data.slice(0, 6).map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }


            </div>
            <div className="text-center mt-4 lg:mt-12 ">
                <button onClick={() => setViewAllDoctor(!viewAllDoctor)} className="rounded-[99px] cursor-pointer py-4 px-8 text-white font-bold bg-[#176AE5]">View All Doctor</button>
            </div>
        </div>
    );
};

export default Doctors;