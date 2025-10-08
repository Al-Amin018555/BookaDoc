import bannerImg from '../../assets/banner-img-1.png'
const Banner = () => {
    return (
        <div className="hero h-auto flex flex-col lg:h-[750px]">
            <div className="hero-content max-w-[1500px] text-center bg-linear-to-b rounded-3xl from-[#EFEFEF] to-[#FFFFFF] border-2 border-white lg:px-[160px] lg:py-[60px]">
                <div>
                    <div>
                        <h1 className="hidden lg:flex font-medium text-[#0F0F0F]">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</h1>
                        <p className="py-6 text-2xl lg:text-5xl font-extrabold text-[#0F0F0F]">
                            Dependable Care, Backed by Trusted Professionals.
                        </p>

                    </div>
                    <div className="max-w-3xl mx-auto hidden lg:flex items-center gap-4">
                        <input className="bg-white p-4 h-[52px] flex-1 rounded-4xl" placeholder="Search any doctor...." type="text" />
                        <button className="rounded-4xl font-bold cursor-pointer text-white h-[52px] bg-[#176AE5] py-3 px-7">Search Now</button>

                    </div>
                    <div className='flex flex-col lg:flex-row gap-6 mt-6'>
                        <img className='object-contain' src={bannerImg} alt="" />
                        <img className='object-contain' src={bannerImg} alt="" />
                        {/* <img src={bannerImg} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;