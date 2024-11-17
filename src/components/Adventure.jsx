import { Link } from "react-router-dom";


const Adventure = ({adventure}) => {
    const { adventureTitle, image, ecoFriendlyFeatures } = adventure;
    return (
      <div className="border p-6 rounded-lg">
        <img
          src={image}
          className="w-full h-[200px] object-cover rounded-lg"
          alt=""
        />
        <h2 className="text-xl font-semibold mt-3">{adventureTitle}</h2>
        <p className="text-lg font-medium mt-3">
          Features:
          <span className="text-base font-normal text-gray-600">
            {ecoFriendlyFeatures.map((feature) => (
              <li>{feature}</li>
            ))}
          </span>
        </p>
        <button className="mt-6 w-full py-2 px-6 text-lg rounded-lg bg-teal-500 text-white cursor-pointer font-semibold hover:bg-teal-600">
          <Link
            to="/login">
            Explore Now
          </Link>
        </button>
      </div>
    );
};

export default Adventure;