import banner from "../assets/banner.png"

const AboutUs = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
        <figure>
          <img src={banner} className="h-5/6 w-full object-cover" alt="" />
        </figure>
        <div>
          <h4 className="text-teal-500 font-medium text-xl">WHO WE ARE</h4>
          <h2>We Are the Bridge to Your Ridge Trek Dreams.</h2>
          <p>
            Ultricies purus dapibus senectus netus nibh molestie nisi litora est
            malesuada. Mattis quis nisl ex feugiat scelerisque. Vitae torquent
            fusce faucibus at tempor nullam commodo ultrices scelerisque
            blandit.
          </p>
        </div>
      </div>
    );
};

export default AboutUs;