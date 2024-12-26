// import React, { useState } from 'react';
// import bg3 from '../assets/bg3.jpg'

// const SpecialOfferModal = () => {
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
//           <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full md:max-w-xl">
//             {/* Background Image */}
//             <div
//               className="relative w-full h-64 bg-cover bg-center rounded-lg"
//               style={{
//                 backgroundImage:
//                   'url()',
//               }}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={closeModal}
//                 className="absolute top-2 right-2 text-xl text-white hover:text-red-500 z-10"
//               >
//                 &times;
//               </button>
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                 <div className="text-center text-white">
//                   <h2 className="text-3xl font-extrabold mb-2">Special Offer!</h2>
//                   <p className="text-lg">Today's offer is for a limited time only, order quickly!</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Home Page Content */}
//       <div className="container mx-auto py-10 text-center px-4">
//         <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Site!</h1>
//         <p className="mt-4 text-lg text-gray-600">Here you will find amazing offers and promotions.</p>
//       </div>
//     </div>
//   );
// };

// export default SpecialOfferModal;


import React, { useState } from 'react';
import bg3 from '../assets/offer.jpg'; // Importing the image

const SpecialOfferModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center rounded-lg justify-center bg-gray-600 bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-md w-96 md:max-w-xl">
            {/* Background Image */}
            <div
              className="relative w-full h-72 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${bg3})`, // Setting the background image here
              }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-xl text-white hover:text-red-500 z-10"
              >
                &times;
              </button>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl font-extrabold mb-2">Special Offer!</h2>
                  <p className="text-lg">"🎉 Special Offer Alert! 🎉 Get up to 30% OFF on your stay! 🏨✨ Book your room now and enjoy comfort at unbeatable prices! 💸 Hurry, limited rooms available! ⏳"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialOfferModal;
