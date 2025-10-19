import { Link } from "react-router";

const Doctor = ({ doctor }) => {
    
    const {id, image, name, education, registration_number, experience } = doctor;
    return (
        <div>
            <div className="card bg-base-100 rounded-2xl shadow-sm p-8">
                <figure>
                    <img className="h-[250px] w-[340px] rounded-2xl"
                        src={image}     
                        alt="Shoes" />
                </figure>
                <div className="card-body p-0 space-y-3">
                    <div className="flex gap-3 mt-4 font-medium text-[14px]">
                        <div>
                        <p className="text-[#09982F] rounded-[99px] bg-[rgba(9,152,47,0.1)] py-2 px-3">Available</p>
                        </div>
                        <div>
                            <p className="text-[#176AE5] rounded-[99px] py-2 px-3 bg-[rgba(23,106,229,0.1)]">{experience} experience</p>
                        </div>
                    </div>
                    <h2 className="card-title text-2xl font-extrabold text-[#0F0F0F] ">{name}</h2>
                    <p className="border-b-2 pb-2 text-[rgba(15,15,15,0.6)] font-medium text-[18px] border-dashed ">{education}</p>
                    <div>
                        <p>{registration_number}</p>
                    </div>
                    <div>
                        <Link to={`/doctorDetails/${id}`}><button className=" w-full border-1 py-3 text-[#176AE5] hover:bg-[rgba(23,106,229,1)] hover:text-white font-bold text-[20px] rounded-[99px]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;