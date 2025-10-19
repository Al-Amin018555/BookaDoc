import { useLoaderData, useParams } from "react-router";
import regLogo from '../../assets/reg.png'

const DoctorDetails = () => {
    const { doctorId } = useParams();
    const doctorIdInt = parseInt(doctorId);
    const data = useLoaderData();

    const singleDoctor = data.find(doctor => doctor.id === doctorIdInt);
    console.log(singleDoctor);
    const { image, name, education, workplace, registration_number, availability, fee } = singleDoctor;
    return (
        <div className="max-w-7xl mx-auto space-y-4 py-7">

            <div className="text-center bg-white rounded-3xl shadow-white space-y-4 py-7 px-10 lg:px-[100px] lg:py-[70px] ">
                <h3 className="font-extrabold text-[#141414] text-2xl lg:text-3xl">Doctor’s Profile Details</h3>
                <p className="font-medium text-[rgba(20,20,20,0.7)]">Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus <br /> facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>

            <div>
                <div className="card p-8 flex flex-col lg:flex-row  bg-base-100 shadow-sm">
                    <figure>
                        <img className="rounded-xl h-[350px]"
                            src={image}
                            alt="doctor image" />
                    </figure>
                    <div className="card-body space-y-3">
                        <div>
                            <h2 className="card-title font-extrabold text-2xl text-[#0F0F0F] lg:text-3xl">{name}</h2>
                            <p className="font-medium text-[18px] text-[rgba(15,15,15,0.6)]">{education}</p>
                        </div>
                        <div>
                            <p className="font-medium text-xl text-[rgba(15,15,15,0.5)]">Working at</p>
                            <p className="font-bold text-xl text-[#0F0F0F]">{workplace}</p>
                        </div>
                        <div className="border-t-1 py-4 border-b-1 border-dashed  ">
                            <p className="font-medium text-[18px] flex gap-2 items-center text-[rgba(15,15,15,0.7)]"> <img src={regLogo} alt="" /> Reg No: {registration_number}</p>
                        </div>
                        <div className="flex">
                            <p className="font-bold text-[#0F0F0F]">Availability</p>
                            <div className="flex border-2 w-full ml-2">
                                {
                                    availability.map((availble, idx) => <p key={idx}>{availble}</p>)
                                }
                            </div>

                        </div>
                        <p> <span className="font-extrabold text-[#141414]">Counsutlation Fee:</span><span className="font-extrabold text-[#176AE5]"> Taka: {fee}</span> <span className="font-medium text-[rgba(20,20,20,0.5)]">(incl.vat)</span> <span className="text-[#176AE5] font-medium">Per consultation</span> </p>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default DoctorDetails;          