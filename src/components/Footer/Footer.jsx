import logo from '../../assets/logo.png'
const Footer = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>My Bookings</a></li>
        <li><a>Blogs</a></li>
        <li><a>Contact Us</a></li>
    </>
    return (
        <footer className="footer footer-horizontal footer-center bg-white shadow-sm text-base-content rounded py-10 px-10 lg:py-24 lg:px-20">
            <div>
                <a className="text-3xl font-extrabold text-[#0F0F0F] flex items-center gap-2"> <img src={logo} className='w-12' alt="logo" /> BookaDoc</a>
            </div>
            <nav className="grid grid-flow-col gap-4">
                <ul className="flex gap-4">
                    {links}
                </ul>
            </nav>
           
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>

                    </a>
                    <a>

                    </a>
                    <a>

                    </a>
                </div>
            </nav>

        </footer>
    );
};

export default Footer;