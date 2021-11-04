import { Link } from "react-router-dom";

const Error = ({ dataName, pageName }) => (
  <div className="pl-52 h-screen -mt-32 flex items-center">
    <div>
      <h1 className="text-is-3 text-white">{dataName} doesn't exist</h1>
      <Link
        className="bg-highlight px-4 py-2 inline-flex items-center mt-2 text-dark rounded hover:text-white hover:bg-dark"
        to={`/${pageName}`}>
         Back
        to {pageName} Page
      </Link>
    </div>
  </div>
);

export default Error;