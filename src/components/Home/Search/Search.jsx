import { useEffect, useState } from "react";
import moment from 'moment';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from "../../../hooks/useTitle";

const Search = () => {
    // website title dynamic
    useTitle('Home');
    // get fetch data state
    const [volunteers, setVolunteers] = useState([]);
    // get fetch data from server
    useEffect(() => {
        fetch('http://localhost:5000/volunteers')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [volunteers])
    // moment js date
    const date = moment().format('D MMM, YYYY')
    // post event
    const handleClick = id => {
        const volunteerData = volunteers.find(volunteer => volunteer._id === id);
        const { img, title } = volunteerData;
        const data = { title, img, date };
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(() => {
                // sweetalert
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Done',
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch(error => {
                // toastify
                toast(error.message);
            })

    }
    return (
        <div className="w-10/12 mx-auto pb-24 space-y-12">
            {/* header title */}
            <div className="text-center space-y-6">
                <h1 className="uppercase font-bold text-3xl md:text-4xl">I grow by helping people in need.</h1>
                {/* search item */}
                <div className="flex justify-center items-center">
                    <input type="text" placeholder="Type here" className="input input-bordered border-e-0 rounded-l-lg rounded-none w-full max-w-xs" />
                    <button className="btn rounded-r-lg rounded-none capitalize bg-[#3F90FC] text-white border-0 font-medium text-base md:px-8">Search</button>
                </div>
            </div>
            {/* container mapping */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                {
                    volunteers.map(volunteer => <div key={volunteer._id} className="relative">
                        <img src={volunteer.img} alt="image" className="rounded-none w-full" />
                        <button onClick={() => handleClick(`${volunteer._id}`)} className="absolute bottom-0 bg-yellow-500 right-0 left-0 capitalize text-white text-xl border-0 rounded-b-lg px-2 flex justify-center items-center hover:cursor-pointer btn-block h-[80px] hover:bg-transparent text-center">{volunteer.title}</button>
                    </div>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Search;