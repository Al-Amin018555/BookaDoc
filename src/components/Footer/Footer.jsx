import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
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
                    <a href='https://www.facebook.com/mdalamin.510400' target='_blank'>
                        <img src={facebook} alt="" />
                    </a>
                    <a href='https://www.linkedin.com/in/md-al-amin-475792358/' target='_blank'>
                        <img src={linkedin} alt="" />
                    </a>
                    <a href='https://github.com/Al-Amin018555' target='_blank'>
                        <img src={github} className='w-12' alt="" />
                    </a>
                </div>
            </nav>

        </footer>
    );
};

export default Footer;