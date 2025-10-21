import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import { Link } from 'react-router';
const Footer = () => {
    const links = <>
        <Link to='/'><li className='mr-6 text-lg hover:border-b-[2px] hover:pb-1'>Home</li></Link>
        <Link to='appointments'><li className='mr-6 text-lg hover:border-b-[2px] hover:pb-1'>My Bookings</li></Link>
        <Link><li className='mr-6 text-lg hover:border-b-[2px] hover:pb-1'>Blogs</li></Link>
        <Link><li className='mr-6 text-lg hover:border-b-[2px] hover:pb-1'>Contact Us</li></Link>
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
                    <Link to="https://www.facebook.com/mdalamin.510400" target='_blank'>
                        <h3>
                            <img src={facebook} alt="" />
                        </h3>
                    </Link>
                    <Link to='https://www.linkedin.com/in/md-al-amin-475792358/' target='_blank' >
                        <h3>
                            <img src={linkedin} alt="" />
                        </h3>
                    </Link>
                    <Link to="https://github.com/Al-Amin018555" target='_blank'>
                        <h3 >
                            <img src={github} className='w-12' alt="" />
                        </h3>
                    </Link>


                </div>
            </nav>

        </footer>
    );
};

export default Footer;