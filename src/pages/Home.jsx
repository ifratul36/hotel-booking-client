import Carousel from "../components/Carousel";
import HotelStyle from "../components/HotelStyle";
import SpecialOfferModal from "../components/SpecialOfferModal";
import Welcome from "../components/Welcome";
import ContactSection from "./ContactSection";
import FeaturedSixRooms from "./FeaturedSixRooms";
import NewsUpdate from "./NewsUpdate";
import MapSection from "../components/MapSection";
import Service from "./Service";
import Review from "../components/Review";

const Home = () => {
    return (
        <div>
            <Carousel />
            <SpecialOfferModal />
            <FeaturedSixRooms />
            <Welcome />
            <MapSection />
            <NewsUpdate />
            <HotelStyle />
            <ContactSection />
            <Service />
            <Review />
            
        </div>
    );
};

export default Home;