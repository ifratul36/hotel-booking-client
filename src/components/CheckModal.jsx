// import React from 'react';

// const CheckModal = () => {
//     return (
//         <div className=''>
//             <div className='md:p-8 w-80 shadow-lg bg-white md:py-14'>
//                 <p className='text-md font-light mb-1'>ROOOMS & SUITES</p>
//                 <h2 className='text-2xl font-semibold mb-4'>Hotel Booking</h2>
//                 <div className='flex flex-col '><label className='text-sm font-semibold mb-2'>CHECK IN:</label>
//                 <input type="date" placeholder='11. Decmber 2024' className='mb-4 bg-[#f6f5f0] p-2' /></div>
//                 <div className='flex flex-col '>
//                 <label className='text-sm font-semibold mb-2'>CHECK OUT:</label>
//                 <input type="date" className='mb-4 bg-[#f6f5f0] p-2' placeholder='11. Decmber 2024' />
//                 </div>
//                 <div className='flex flex-col '>
//                 <label className='text-sm font-semibold mb-2'>Room:</label>
//                 <select className='mb-4 bg-[#f6f5f0] p-2'><option value="" >Standard room</option></select>
//                 </div>
//                 <button className=' mt-2 w-full  bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity'>Check Now</button>

//             </div>
//         </div>
//     );
// };

// export default CheckModal;




import React from 'react';

const CheckModal = () => {
    return (
        <div className="flex justify-center items-center py-8  px-4">
            <div className="w-full md:w-80 bg-white p-6  shadow-lg rounded-lg">
                <p className="text-md font-light mb-2">ROOOMS & SUITES</p>
                <h2 className="text-2xl font-semibold mb-4">Hotel Booking</h2>
                <div className="flex flex-col mb-4">
                    <label className="text-sm font-semibold mb-2">CHECK IN:</label>
                    <input
                        type="date"
                        placeholder="11. December 2024"
                        className="bg-[#f6f5f0] p-2 rounded-md"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-sm font-semibold mb-2">CHECK OUT:</label>
                    <input
                        type="date"
                        className="bg-[#f6f5f0] p-2 rounded-md"
                        placeholder="11. December 2024"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-sm font-semibold mb-2">Room:</label>
                    <select className="bg-[#f6f5f0] p-2 rounded-md">
                        <option value="">Standard room</option>
                    </select>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
                    Check Now
                </button>
            </div>
        </div>
    );
};

export default CheckModal;
