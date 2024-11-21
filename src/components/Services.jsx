import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-24">
      <h2 className="text-3xl md:text-4xl text-center font-bold">
        Our Top Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
