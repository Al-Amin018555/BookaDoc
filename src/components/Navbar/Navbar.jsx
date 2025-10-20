import { Link } from 'react-router';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const links = <>
        <Link to='/'><li className='mr-2'>Home</li></Link>
        <Link to='appointments'><li className='mr-2'>My Bookings</li></Link>
        <li className='mr-2'>Blogs</li>
        <li className='mr-2'>Contact Us</li>
    </>
    return (
        <div className=' sticky top-0 z-10'>
            <div className="bg-base-100 shadow-sm">
                <div className='navbar max-w-7xl mx-auto'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <Link to='/'><h4 className="text-3xl font-extrabold text-[#0F0F0F] flex items-center gap-2"> <img src={logo} className='w-12' alt="logo" /> BookaDoc</h4></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <button className="rounded-[99px] cursor-pointer py-4 px-8 text-white font-bold bg-[#176AE5]">Emergency</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;