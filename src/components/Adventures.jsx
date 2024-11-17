import { useLoaderData } from "react-router-dom";
import Adventure from "./Adventure";


const Adventures = () => {

    const adventures = useLoaderData()

    return (
      <div className="mt-12">
        <h2 className="text-3xl md:text-4xl text-center font-bold">Adventure Experiences</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {
                adventures.map(adventure => <Adventure adventure={adventure}></Adventure>)
            }
        </div>
      </div>
    );
};

export default Adventures;