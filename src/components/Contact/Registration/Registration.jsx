import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';

const Registration = () => {
    return (
        <div className='pt-11 pb-44 space-y-7'>
            <Link to={`/`} className=''>
                <img src={logo} className="w-[197px] h-[60px] mx-auto" alt="website logo" />
            </Link>
            <div className='space-y-12 pt-9 px-10 md:px-14 pb-16 border border-[#ABABAB] rounded md:w-[570px] md:mx-auto mx-5'>
                <h2 className='text-2xl font-bold text-black'>Register as a Volunteer</h2>
                <form className="card-bod space-y-9">
                    <div className="form-control">
                        <input type="text" placeholder="Full Name" className="input input-bordered border-t-0 border-e-0 border-s-0 border-b-[#C5C5C5] rounded-none ps-0 placeholder:text-black focus:outline-none placeholder:font-medium" />
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Email" className="input input-bordered border-t-0 border-e-0 border-s-0 border-b-[#C5C5C5] rounded-none ps-0 placeholder:text-black focus:outline-none placeholder:font-medium" />
                    </div>
                    <div className="form-control">
                        <input type="date" placeholder="Date" className="input input-bordered border-t-0 border-e-0 border-s-0 border-b-[#C5C5C5] rounded-none ps-0 placeholder:text-black focus:outline-none placeholder:font-medium" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Description" className="input input-bordered border-t-0 border-e-0 border-s-0 border-b-[#C5C5C5] rounded-none ps-0 placeholder:text-black focus:outline-none placeholder:font-medium" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Organize books at the library" className="input input-bordered border-t-0 border-e-0 border-s-0 border-b-[#C5C5C5] rounded-none ps-0 placeholder:text-black focus:outline-none placeholder:font-medium" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#3F90FC] text-white border-none capitalize font-medium text-base rounded-none">Registration</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;