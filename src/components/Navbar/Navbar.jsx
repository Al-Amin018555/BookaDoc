import logo from '../../assets/logo.png';

const Navbar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>My Bookings</a></li>
        <li><a>Blogs</a></li>
        <li><a>Contact Us</a></li>
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
                    <a className="text-3xl font-extrabold text-[#0F0F0F] flex items-center gap-2"> <img src={logo} className='w-12' alt="logo" /> BookaDoc</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <a className="rounded-[99px] cursor-pointer py-4 px-8 text-white font-bold bg-[#176AE5]">Emergency</a>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Navbar;