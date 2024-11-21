import { Link, useLoaderData } from "react-router-dom";
import consulting from "../assets/consulting.png";

const AdventureDetails = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const startHour = 10; 
  const endHour = 20; 

  const condition = currentHour >= startHour && currentHour < endHour;

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
    <div className="mt-6 border p-6 rounded-lg shadow-lg bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        <div>
          <img
            src={image}
            className="h-[250px] md:h-[400px] lg:h-[550px] w-full object-cover rounded-lg object-center"
            alt=""
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-teal-600">{adventureTitle}</h2>
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
          <div className="font-bold">
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
          </div>
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
            <span className="font-semibold text-gray-600">{maxGroupSize}</span>
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
      <button
        onClick={() => {
          condition
            ? window.open("https://meet.google.com", "_blank")
            : document.getElementById("my_modal_1").showModal();
        }}
        className="mt-12 mb-2 mx-auto  w-full"
      >
        <Link className="py-2 px-6 text-lg rounded-lg bg-purple-700 text-white cursor-pointer font-semibold hover:bg-purple-600">
          Talk With Expert
        </Link>
      </button>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box  bg-white">
          <img src={consulting} className="w-32 mx-auto" alt="" />
          <h3 className="font-bold text-3xl text-teal-500 text-center mt-3">
            {" "}
            Consultation Hours
          </h3>
          <p className="text-gray-600 text-center mt-4">
            We’re available to assist you during the following hours
          </p>
          <p className="text-lg text-center mt-3">
            <strong>Day:</strong> Monday to Sunday
          </p>
          <p className="text-lg text-center">
            <strong>Time: </strong>
            10:00 AM to 8:00 PM
          </p>
          <div className="modal-action justify-center">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button className="w-full py-2 px-6 text-lg rounded-lg bg-purple-700 text-white cursor-pointer font-semibold hover:bg-purple-600">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AdventureDetails;
