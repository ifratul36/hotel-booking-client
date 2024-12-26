// import React from "react";
// import team1 from "../assets/team1.jpg";
// import team2 from "../assets/team2.jpg";
// import team3 from "../assets/team3.jpg";
// import leaf from "../assets/twol.jpg";
// import watch from '../assets/watch.jpg'
// import mark from '../assets/mark.jpg'
// import contact from '../assets/contact.jpg'
// import CheckModal from "../components/CheckModal";

// const ContactSection = () => {
//   return (
//     <div className="">
//       {/* section 1 */}
//       <div className="max-w-7xl mx-auto md:mr-10 flex flex-col md:flex-row justify-center items-start gap-4">
//         {/* sec child 1 */}
//         <div>
//           {/* grand child 1 */}
//           <div className="text-center">
//             <p className="text-lg font-normal mb-3">Hotex Service</p>
//             <h1 className="text-4xl font-semibold mb-3">Expert Team Persons</h1>
//           </div>
//           {/* grand child 2 */}
//           <div className="flex flex-col md:flex-row justify-center items-center gap-2">
//             {/* team1 */}
//             <div className="w-[300px]">
//               <img src={team1} className="" alt="" />
//             </div>
//             {/* team2 */}
//             <div className="w-[300px]">
//               <img src={team2} alt="" />
//             </div>
//             {/* team3 */}
//             <div className="w-[300px]">
//               <img src={team3} alt="" />
//             </div>
//           </div>
//         </div>
//         {/* sec child 1 */}
//         <div>
//           <img src={leaf} alt="" />
//         </div>
//       </div>
//       {/* section 2 */}
//       <div className="md:ml-52 bg-[#f6f5f0]">




import React from "react";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import leaf from "../assets/twol.jpg";
import watch from '../assets/watch.jpg';
import mark from '../assets/mark.jpg';
import contact from '../assets/contact.jpg';
import CheckModal from "../components/CheckModal";

const ContactSection = () => {
  return (
    <div className="py-16">
      {/* section 1 */}
      <div className="md:mr-16 max-w-7xl mx-auto  flex flex-col md:flex-row justify-center items-start gap-6">
        {/* sec child 1 */}
        <div className="text-center">
          {/* grand child 1 */}
          <div>
            <p className="text-lg font-normal mb-3">Hotex Service</p>
            <h1 className="text-4xl font-semibold mb-6">Expert Team Persons</h1>
          </div>
          {/* grand child 2 */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* team1 */}
            <div className=" md:w-[300px]">
              <img src={team1} className="w-full h-auto rounded-lg" alt="Team 1" />
            </div>
            {/* team2 */}
            <div className=" md:w-[300px]">
              <img src={team2} className="w-full h-auto rounded-lg" alt="Team 2" />
            </div>
            {/* team3 */}
            <div className=" md:w-[300px]">
              <img src={team3} className="w-full h-auto rounded-lg" alt="Team 3" />
            </div>
          </div>
        </div>

        {/* sec child 2 */}
        <div className="">
          <img src={leaf} className="hidden md:block rounded-lg" alt="Leaf" />
        </div>
      </div>

      {/* section 2 */}
      <div className="md:ml-52 bg-[#f6f5f0] py-12 rounded-br-2xl">
        <div className=" max-w-6xl mx-auto p-4 flex flex-col md:flex-row items-start gap-6">
          {/* section child 1 */}
          <div className="w-full md:w-1/2">
            {/* contact form */}
            <CheckModal />
          </div>

          {/* section child 2 */}
          <div className="flex flex-col  justify-center items-center gap-6">
            {/*  child 1 */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
              <img src={contact} className="w-full h-96 md:w-1/2 rounded-lg" alt="Contact" />
              <div className="w-full md:w-1/2 text-left">
                <p className="text-lg text-light">HOTEL FACILITY</p>
                <h1 className="text-3xl font-semibold mb-4">Enjoy a Luxury <br /> Experience</h1>
                <p className="text-sm font-light mb-4">
                  Experience unparalleled luxury with every detail tailored to perfection. From elegant accommodations to world-class amenities,
                  indulge in a stay that promises ultimate comfort and style. 
                  <br />
                  <br />
                  Whether relaxing in serene surroundings or enjoying personalized services, every moment is crafted to ensure an extraordinary, 
                  unforgettable experience of sophistication and luxury.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <img src={watch} alt="Watch" className="w-12 h-12" />
                  <div>
                    <p className="font-semibold">Book Now</p>
                    <p className="text-sm">123456789</p>
                  </div>
                </div>
              </div>
            </div>

            {/* child 3 */}
            <div className="flex justify-center items-center gap-4 my-6">
              <img className="w-16 h-16" src={mark} alt="Mark" />
              <p className="text-2xl font-medium text-center">Contact Us for incredible interior & architect designs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
