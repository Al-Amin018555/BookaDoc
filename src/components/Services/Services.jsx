import doctors from '../../assets/success-doctor.png'
import reviews from '../../assets/success-review.png'
import patients from '../../assets/success-patients.png'
import stuffs from '../../assets/success-staffs.png'
import CountUp from 'react-countup';
const Services = () => {
    return (
        <div className="max-w-7xl mx-auto pb-10 md:pb-20">
            <div className="text-[#0F0F0F] space-y-4 text-center">
                <h2 className="font-extrabold text-2xl md:text-4xl">We Provide Best Medical Services</h2>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-4 md:mt-8'>

                <div className='space-y-3 bg-white shadow-sm rounded-2xl py-6 md:py-10 px-6 md:px-12'>
                    <img src={doctors} alt="" />
                    <div className='md:text-6xl text-4xl flex text-[#0F0F0F] font-extrabold'>
                        <CountUp
                            start={0}
                            end={199}
                            duration={3}
                        />
                        <p>+</p>
                    </div>
                    <p className='text-xs md:text-2xl' >Total Doctors</p>
                </div>

                <div className='space-y-3 bg-white shadow-sm rounded-2xl py-6 md:py-10 px-6 md:px-12'>
                    <img src={reviews} alt="" />
                    <div className='md:text-6xl text-4xl flex text-[#0F0F0F] font-extrabold'>
                        <CountUp
                            start={0}
                            end={467}
                            duration={3}
                        />
                        <p>+</p>
                    </div>
                    <p className='text-xs md:text-2xl' >Total Reviews</p>
                </div>

                <div className='space-y-3 bg-white shadow-sm rounded-2xl py-6 md:py-10 px-6 md:px-12'>
                    <img src={patients} alt="" />
                    <div className='md:text-6xl text-4xl flex text-[#0F0F0F] font-extrabold'>
                        <CountUp
                            start={0}
                            end={1900}
                            duration={3}
                        />
                        <p>+</p>
                    </div>
                    <p className='text-xs md:text-2xl' >Patients</p>
                </div>

                <div className='space-y-3 bg-white shadow-sm rounded-2xl py-6 md:py-10 px-6 md:px-12'>
                    <img src={stuffs} alt="" />
                    <div className='md:text-6xl text-4xl flex text-[#0F0F0F] font-extrabold'>
                        <CountUp
                            start={0}
                            end={300}
                            duration={3}
                        />
                        <p>+</p>
                    </div>
                    <p className='textarea-xl md:text-2xl' >Total Stuffs</p>
                </div>

            </div>

        </div>
    );
};

export default Services;