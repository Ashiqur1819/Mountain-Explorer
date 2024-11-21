import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-12 text-center shadow-xl">
        <h1 className="mb-5 text-5xl font-bold">404</h1>
        <p className="text-gray-500 font-medium">
          Oops! The page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded text-lg bg-teal-500 px-6 py-2 font-semibold text-white hover:bg-teal-600"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
