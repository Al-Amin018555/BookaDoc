const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[500px] lg:h-[750px]">
            <div className="hero-content text-center">
                <div className="max-w-5xl">
                    <h1 className="font-medium text-[#0F0F0F]">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</h1>
                    <p className="py-6 text-2xl lg:text-5xl font-extrabold text-[#0F0F0F]">
                        Dependable Care, Backed by Trusted Professionals.
                    </p>
                    <div className="max-w-3xl mx-auto flex items-center gap-4">
                        <input className="bg-white p-4 h-[52px] flex-1 rounded-4xl" placeholder="Search any doctor...." type="text" />
                        <button className="rounded-4xl cursor-pointer text-white h-[52px] bg-[#176AE5] py-3 px-7">Search Now</button>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;