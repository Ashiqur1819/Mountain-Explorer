import slide1 from "../assets/slide-01.jpg"
import slide2 from "../assets/slide-02.webp"
import slide3 from "../assets/slide-03.jpg"


const Slider = () => {
    return (
      <div>
        <div className="carousel w-full">
          <div
            id="slide1"
            className="carousel-item relative w-full h-[400px] md:h-[600px]"
          >
            <img src={slide1} className="w-full object-cover" />
            <div
              style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
              className="absolute  w-full h-[400px] md:h-[600px]"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl ml-6 md:ml-24 mt-6 md:mt-32">
                Breathtaking Views, Unforgettable Journeys
              </h2>
              <p className=" text-white max-w-3xl ml-6 md:ml-24 mt-6">
                Captures the essence of adventure and exploration, inviting
                travelers to experience awe-inspiring landscapes and
                life-changing experiences. Whether it's towering mountains,
                serene beaches, or vibrant cityscapes, each journey offers a
                chance to create lasting memories and discover the world in its
                most magnificent form.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
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
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl ml-6 md:ml-24 mt-6 md:mt-32">
                Breathtaking Views, Unforgettable Journeys
              </h2>
              <p className=" text-white max-w-3xl ml-6 md:ml-24 mt-6">
                Captures the essence of adventure and exploration, inviting
                travelers to experience awe-inspiring landscapes and
                life-changing experiences. Whether it's towering mountains,
                serene beaches, or vibrant cityscapes, each journey offers a
                chance to create lasting memories and discover the world in its
                most magnificent form.
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
              style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
              className="absolute  w-full h-[400px] md:h-[600px]"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl ml-6 md:ml-24 mt-6 md:mt-32">
                Breathtaking Views, Unforgettable Journeys
              </h2>
              <p className=" text-white max-w-3xl ml-6 md:ml-24 mt-6">
                Captures the essence of adventure and exploration, inviting
                travelers to experience awe-inspiring landscapes and
                life-changing experiences. Whether it's towering mountains,
                serene beaches, or vibrant cityscapes, each journey offers a
                chance to create lasting memories and discover the world in its
                most magnificent form.
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Slider;