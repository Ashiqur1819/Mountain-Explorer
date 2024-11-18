import AboutUs from "../components/AboutUs";
import Adventures from "../components/Adventures";
import Services from "../components/Services";
import Slider from "../components/Slider";



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Adventures></Adventures>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;