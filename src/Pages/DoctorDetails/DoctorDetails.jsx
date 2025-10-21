import { Link, useLoaderData, useParams } from "react-router";
import regLogo from '../../assets/reg.png'
import { PiWarningCircleThin } from "react-icons/pi";
import { saveToAppointment } from "../../Utility/addToLS";


const DoctorDetails = () => {
    const { doctorId } = useParams();
    const doctorIdInt = parseInt(doctorId);
    const data = useLoaderData();

    const singleDoctor = data.find(doctor => doctor.id === doctorIdInt);
  
    const { id, image, name, education, workplace, registration_number, availability, fee } = singleDoctor;
    return (
        <div className="max-w-7xl mx-auto space-y-4 py-7">

            <div className="text-center bg-white rounded-3xl shadow-sm space-y-4 py-7 px-10 lg:px-[100px] lg:py-[70px] ">
                <h3 className="font-extrabold text-[#141414] text-2xl lg:text-3xl">Doctor’s Profile Details</h3>
                <p className="font-medium text-[rgba(20,20,20,0.7)]">Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus <br /> facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>

            <div>
                <div className="card rounded-3xl p-8 flex flex-col lg:flex-row  bg-base-100 shadow-sm">
                    <figure>
                        <img className="rounded-xl md:h-[350px]"
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
                        <div className="flex flex-col items-center md:flex-row">
                            <div>
                                <p className="font-bold mb-4 md:mb-0 text-[#0F0F0F]">Availability</p>
                            </div>
                            <div className="flex space-x-4 ml-2">
                                {
                                    availability.map((availble, idx) => <div className="text-[#FFA000] font-medium bg-[rgba(255,160,0,0.1)] border-1 border-[rgba(255,160,0,0.2)] rounded-[99px] px-4 py-2" key={idx}>{availble}</div>)
                                }
                            </div>

                        </div>
                        <div>
                            <p> <span className="font-extrabold text-[#141414]">Counsutlation Fee:</span><span className="font-extrabold text-[#176AE5]"> Taka: {fee}</span> <span className="font-medium text-[rgba(20,20,20,0.5)]">(incl.vat)</span> <span className="text-[#176AE5] font-medium">Per consultation</span> </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="card rounded-3xl bg-base-100 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-4 mx-auto text-2xl font-extrabold text-[#141414]">Book an Appontment</h2>
                    <div className="py-4 flex  items-center justify-between border-t-1 border-b-1 border-dashed border-[rgba(15,15,15,0.2)]">
                        <div>
                            <p className="textarea-lg font-bold text-[#0F0F0F]">Availabilty</p>
                        </div>
                        <div>
                            <p className="bg-[rgba(9,152,47,0.1)] border-1 border-[rgba(9,152,47,0.2)] font-medium text-[#09982F] textarea-md py-2 px-4 rounded-[99px]">Doctor Available Today</p>
                        </div>
                    </div>

                    <div className="flex mt-4 items-center max-w-[975px] border-1 border-[rgba(255,160,0,0.2)] gap-2 px-4 py-2 bg-[rgba(255,160,0,0.1)] text-[#FFA000] font-medium rounded-[99px]">

                        <PiWarningCircleThin size={20} />
                        <p>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>

                    </div>

                    <div className="p-6 mt-4">
                        <Link to='/appointments'><button onClick={() => saveToAppointment(id,name)} className="cursor-pointer py-3 b font-bold bg-[#176AE5] text-white md:text-[20px] rounded-[99px] w-full">Book Appointment Now</button></Link>

                    </div>

                </div>
            </div>


        </div>

    );
};

export default DoctorDetails;          