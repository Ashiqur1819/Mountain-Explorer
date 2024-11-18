

const Service = ({service}) => {
    const { service_name, image, description } = service;
    return (
        <div className="border p-6 rounded-lg shadow-md hover:-translate-y-3 duration-300">
            <img src={image} className="w-20 h-20" alt="" />
            <h2 className="text-xl font-semibold text-teal-600 mt-3">{service_name}</h2>
            <p className="text-gray-600 font-medium mt-2">{description}</p>
        </div>
    );
};

export default Service;