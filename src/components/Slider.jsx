import slide1 from "../assets/slide-01.jpg"
import slide2 from "../assets/slide-02.webp"
import slide3 from "../assets/slide-03.jpg"


const Slider = () => {
    return (
      <div>
        <div className="carousel w-full rounded-lg lg:mt-6">
          <div
            id="slide1"
            className="carousel-item relative w-full h-[400px] md:h-[600px]"
          >
            <img src={slide1} className="w-full object-cover" />
            <div
              style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
              className="absolute  w-full h-[400px] md:h-[600px]"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-400 max-w-3xl lg:max-w-4xl ml-6 md:ml-16 lg:ml-24 mt-20 md:mt-40">
                Breathtaking Views, Unforgettable Journeys
              </h2>
              <p className=" text-white max-w-3xl md:max-w-xl lg:max-w-3xl ml-6 md:ml-16 lg:ml-24 mt-6">
                Experience awe-inspiring landscapes and life-changing adventures
                that create lasting memories. From towering mountains to serene
                beaches and vibrant cityscapes, every journey invites you to
                discover the world in its most magnificent form.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full  h-[400px] md:h-[600px]"
          >
            <img src={slide2} className="w-full object-cover" />
            <div
              style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
              className="absolute  w-full h-[400px] md:h-[600px]"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold  text-amber-400 max-w-3xl lg:max-w-4xl ml-6 md:ml-16 lg:ml-24 mt-20 md:mt-40">
                Challenge the Mountains, Embrace the Adventure
              </h2>
              <p className=" text-white max-w-3xl md:max-w-xl lg:max-w-3xl ml-6 md:ml-16 lg:ml-24 mt-6">
                Discover the thrill of exploring the great outdoors and pushing
                your limits. Whether you're hiking rugged trails, conquering
                peaks, or immersing yourself in nature's beauty, this initiative
                inspires adventurers to embrace challenges and find their true
                strength. Adventure awaits—take the first step!
              </p>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full h-[400px] md:h-[600px]"
          >
            <img src={slide3} className="w-full object-cover" />
            <div
              style={{ backgroundColor: "rgba(0, 0, 0, .7)" }}
              className="absolute  w-full h-[400px] md:h-[600px]"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold  text-amber-400 max-w-3xl md:max-w-xl lg:max-w-4xl ml-6 md:ml-16 lg:ml-24  mt-16 md:mt-36">
                Find Solitude and Adventure Among the Peaks
              </h2>
              <p className=" text-white max-w-3xl md:max-w-xl lg:max-w-3xl ml-6 md:ml-16 lg:ml-24 mt-6">
                Experience the perfect blend of solitude and adventure as you
                journey through majestic peaks. Immerse yourself in nature's
                tranquility, conquer rugged trails, and discover the thrill of
                reaching new heights. Adventure and peace await among the
                mountains!
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Slider;