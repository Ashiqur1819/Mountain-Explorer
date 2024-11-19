import { Link } from "react-router-dom";
import "animate.css";

const Adventure = ({adventure}) => {
    const {id, adventureTitle, image, ecoFriendlyFeatures } = adventure;
    return (
      <div className="p-6 rounded-lg shadow-md">
        <img
          src={image}
          className="w-full h-[200px] object-cover rounded-lg"
          alt=""
        />
        <h2 className="text-xl font-bold mt-3 text-teal-600">
          {adventureTitle}
        </h2>
        <p className="text-lg font-medium mt-3">
          Features:
          <span className="text-base font-normal text-gray-600">
            {ecoFriendlyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </span>
        </p>
        <button className="mt-6 w-full py-2 px-6 text-lg rounded-lg bg-purple-700 text-white cursor-pointer font-semibold hover:bg-purple-600">
          <Link to={`/adventureDetails/${id}`}>Explore Now</Link>
        </button>
      </div>
    );
};

export default Adventure;