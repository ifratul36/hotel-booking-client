import React from "react";
import plant from "../assets/plant.png";
import sofa from "../assets/sofa.jpg";
import dining from "../assets/dininig.jpg";
import board from "../assets/board.jpg";
import plate from "../assets/plate.jpg";

const Welcome = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mt-4 mb-16">
        <h2 className="text-3xl font-semibold mb-4">HOTEX FACILITY</h2>
        <p className="text-lg font-normal w-[60%] mx-auto">
          Stay affordably at Hotel Luxurious! Enjoy premium amenities,
          personalized services, and one of the city's lowest rates. Book now!
        </p>
      </div>
      <div className="divider lg:w-96 mx-auto px-5">
        
        <img src={plant} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 text-start mt-20 w-[80%] md:w-[100%] mx-auto">
        {/* card1 */}
        <div className="md:flex md:justify-between md:items-start gap-2 ">
          <img src={dining} alt="" />
          <div>
            <h2 className=" text-sm font-bold">MAYFAIR HOTEL & SPA </h2>
            <p className="text-base font-light">
              Experience luxury with world-class amenities, elegant rooms, fine
              dining, rejuvenating spa services, and exceptional hospitality for
              relaxation or business.
            </p>
          </div>
        </div>
        {/* card2 */}
        <div className="md:flex md:justify-between md:items-start gap-2 ">
          <img src={sofa} alt="" />
          <div>
            <h2 className=" text-sm font-bold">Rooms </h2>
            <p className="text-base font-light">
              Rooms are individual spaces designed for functions like sleeping,
              studying, or working, essential for comfort and organization in
              buildings.
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="md:flex md:justify-between md:items-start gap-2 ">
          <img src={plate} alt="" />
          <div>
            <h2 className=" text-sm font-bold">AMENITIES </h2>
            <p className="text-base font-light">
              Amenities include utilities, recreational facilities, security,
              and services designed to enhance comfort, convenience, and overall
              quality of life.
            </p>
          </div>
        </div>
        {/* card4 */}
        <div className="md:flex md:justify-between md:items-start gap-2 ">
          <img src={board} alt="" />
          <div>
            <h2 className=" text-sm font-bold">ACTIVITIES </h2>
            <p className="text-base font-light">
              Luxurious Hotel offers spa treatments, fine dining, fitness
              centers, swimming pools, outdoor excursions, cultural experiences,
              live entertainment, and personalized services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
