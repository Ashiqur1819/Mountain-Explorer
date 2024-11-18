import { Link, useLoaderData } from "react-router-dom";


const AdventureDetails = () => {

    const adventureDetails = useLoaderData();

    const {
      adventureTitle,
      image,
      categoryName,
      shortDescription,
      adventureCost,
      bookingAvailability,
      location,
      duration,
      adventureLevel,
      includedItems,
      ecoFriendlyFeatures,
      maxGroupSize,
      specialInstructions,
    } = adventureDetails;

    return (
      <div className="mt-6 border p-6 rounded-lg shadow-lg">
        <div className="flex gap-12 items-center ">
          <div>
            <img
              src={image}
              className="h-[550px] w-full object-cover rounded-lg object-center"
              alt=""
            />
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-teal-600">
              {adventureTitle}
            </h2>
            <p className="text-gray-600">{shortDescription}</p>
            <div className="flex items-center gap-3">
              <p className="font-bold">
                Category: <span className="font-semibold">{categoryName}</span>
              </p>
              <p className="bg-teal-100 px-4 py-2 rounded-2xl font-semibold inline-block">
                {bookingAvailability ? "Available" : "Not Available"}
              </p>
            </div>
            <p className="font-bold">
              Place:{" "}
              <span className="font-semibold text-gray-600">{location}</span>
            </p>
            <p className=" font-bold">
              Duration:{" "}
              <span className="font-semibold text-gray-600">{duration}</span>
            </p>
            <h3 className="font-bold">
              Cost:{" "}
              <span className="text-gray-600 font-semibold">
                ${adventureCost}
              </span>
            </h3>
            <p className="font-bold">
              Adventure Level:{" "}
              <span className="text-gray-600 font-semibold">
                {adventureLevel}
              </span>
            </p>
            <p className="font-bold">
              Included Items:
              <div>
                {includedItems.map((item, index) => (
                  <p
                    key={index}
                    className="inline mr-3 font-semibold text-gray-600"
                  >
                    | {item} |
                  </p>
                ))}
              </div>
            </p>
            <p className="font-bold">
              Eco-Friendly Features:
              <div>
                {ecoFriendlyFeatures.map((feature, index) => (
                  <p
                    key={index}
                    className="inline font-semibold text-gray-600 mr-3"
                  >
                    | {feature} |
                  </p>
                ))}
              </div>
            </p>
            <p className="font-bold">
              Max Group Size:{" "}
              <span className="font-semibold text-gray-600">
                {maxGroupSize}
              </span>
            </p>
            <p className="font-bold">
              Special Instructions:
              <div>
                {specialInstructions.map((instruction, index) => (
                  <p
                    key={index}
                    className="inline mr-3 font-semibold text-gray-600"
                  >
                    | {instruction} |
                  </p>
                ))}
              </div>
            </p>
          </div>
        </div>
        <button className="mt-12 mb-2 mx-auto  w-full">
          <Link className="py-2 px-6 text-lg rounded-lg bg-teal-500 text-white cursor-pointer font-semibold hover:bg-teal-600">
            Talk With Expert
          </Link>
        </button>
      </div>
    );
};

export default AdventureDetails;