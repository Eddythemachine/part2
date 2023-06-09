import { Avatar, Add, IndigoGradient } from "../Sources";
import { Link } from "react-router-dom";

function Mainhome() {
  return (
    <div className="flex justify-between mt-5 md:flex-nowrap flex-wrap px-5 gap-2">
      <div
        className={`relative ${IndigoGradient} h-[300px] md:w-[50%] w-[100%] p-4`}
      >
        <div>
          <img
            src={Avatar}
            width="100px"
            height="100px"
            className="absolute right-0"
            alt=""
          />
        </div>

        <div className="absolute bottom-[40px]">
          <p className="text-5xl mb-2">User Name</p>
          <p className="text-xl">Date</p>
          <p className="text-xl">Online</p>
        </div>
      </div>

      <div
        className={`cursor-pointer flex justify-center items-center relative ${IndigoGradient} h-[300px] md:w-[50%] w-[100%] p-4`}
      >
        <Link to="/addnote">
          <img
            src={Add}
            alt="add"
            className="cursor-pointer"
            width="100px"
            height="100px"
          />
        </Link>
      </div>
    </div>
  );
}

export default Mainhome;
