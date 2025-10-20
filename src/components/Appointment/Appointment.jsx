const Appointment = ({ appoinment }) => {
    const { name, education, fee } = appoinment;
    return (
        <div className="max-w-7xl mx-auto">
            <div className="card bg-base-100 w-full p-4 md:p-8 rounded-2xl shadow-sm">
                <div className="card-body space-y-4">
                    <div className="md:flex items-center justify-between border-b-1 pb-4 border-[rgba(15,15,15,0.2)] border-dashed">
                        <div>
                            <h2 className="card-title text-[20px] font-bold text-[#0F0F0F]">{name}</h2>
                            <p className="font-medium textarea-lg text-[rgba(15,15,15,0.6)]">{education}</p>
                            
                        </div>
                        <div>
                            <p className="font-medium textarea-lg text-[rgba(15,15,15,0.6)]">Appointment Fee: {fee} Taka + Vat</p>
                        </div>
                    </div>

                    <div className="card-actions ">
                        <button className="  text-[#FF0000]  hover:bg-[#FF0000] hover:text-white font-semibold cursor-pointer text-lg w-full py-3 rounded-[99px] border-1">Cancel Appointment</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Appointment;