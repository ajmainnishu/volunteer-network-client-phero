const Search = () => {
    return (
        <div className="text-center space-y-6 w-10/12 mx-auto">
            <h1 className="uppercase font-bold text-4xl">I grow by helping people in need.</h1>
            <div className="flex justify-center items-center">
                <input type="text" placeholder="Type here" className="input input-bordered border-e-0 rounded-l-lg rounded-none w-full max-w-xs" />
                <button className="btn rounded-r-lg rounded-none capitalize bg-[#3F90FC] text-white border-0 font-medium text-base px-8">Search</button>
            </div>
        </div>
    );
};

export default Search;