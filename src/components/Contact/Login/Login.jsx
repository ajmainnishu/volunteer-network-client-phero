import { Link } from "react-router-dom";
import logo from '../../../assets/logo/logo.png';
import googleLogo from '../../../assets/images/login/google_logo.svg'

const Login = () => {
    return (
        <div className='pt-11 pb-64 space-y-16'>
            <Link to={`/`} className=''>
                <img src={logo} className="w-[197px] h-[60px] mx-auto" alt="website logo" />
            </Link>
            <div className='space-y-8 py-36 px-10 md:px-14 border border-[#ABABAB] rounded md:w-[570px] md:mx-auto mx-5'>
                <h2 className='text-2xl font-bold text-center text-black'>Login With</h2>
                <div className="space-y-4">
                    <Link className="flex btn bg-white rounded-full px-1.5">
                        <img src={googleLogo} alt="" />
                        <button className="font-medium mx-auto text-black text-base">Continue with Google</button>
                    </Link>
                    <p className="text-center font-medium text-black">Don’t have an account? <Link to={`/registration`} className="underline text-[#3F90FC]">Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;