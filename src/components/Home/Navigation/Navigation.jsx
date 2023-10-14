import { Link } from "react-router-dom";
import logo from '../../../assets/logo/logo.png';

const Navigation = () => {
    return (
        <div className="">
            <div className="navbar w-11/12 md:w-10/12 mx-auto p-6 md:pt-11 pb-16 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={`/`}>Home</Link></li>
                            <li><Link>Donation</Link></li>
                            <li><Link to={`/events`}>Events</Link></li>
                            <li><Link>Blog</Link></li>
                        </ul>
                    </div>
                    <Link className="w-[197px] h-[60px]">
                        <img src={logo} className="w-full h-full" alt="website logo" />
                    </Link>
                </div>




                <div className="navbar-end space-x-8">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal text-base text-[#0B0B0B] font-medium px-1">
                            <li><Link to={`/`}>Home</Link></li>
                            <li><Link>Donation</Link></li>
                            <li><Link to={`/events`}>Events</Link></li>
                            <li><Link>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                        <Link to={`/registration`} className="btn capitalize bg-[#3F90FC] text-white text-base font-avenir md:px-11 font-medium rounded-md border-none">Register</Link>
                        <Link to={`/login`} className="btn capitalize bg-[#434141] text-white text-base font-avenir md:px-11 font-medium rounded-md border-none">Admin</Link>
                    </div>
                </div>


                {/* <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link>Donation</Link></li>
                        <li><Link>Events</Link></li>
                        <li><Link>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <Link className="btn capitalize bg-[#3F90FC] text-white text-base font-avenir px-11 font-medium rounded-md border-none">Register</Link>
                    <Link className="btn capitalize bg-[#434141] text-white text-base font-avenir px-11 font-medium rounded-md border-none">Admin</Link>
                </div> */}




            </div>
        </div>
    );
};

export default Navigation;