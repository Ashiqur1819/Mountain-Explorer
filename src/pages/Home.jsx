import AboutUs from "../components/AboutUs";
import Adventures from "../components/Adventures";
import Services from "../components/Services";
import Slider from "../components/Slider";



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <AboutUs></AboutUs>
            <Adventures></Adventures>
        </div>
    );
};

export default Home;