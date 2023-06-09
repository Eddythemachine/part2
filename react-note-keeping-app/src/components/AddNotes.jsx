import { IndigoGradient, Close } from "./Sources";
import { Link } from "react-router-dom";

function AddNotes() {
  return (
    <div
      className="flex items-center justify-center bg-yellow-50 w-[100vw] h-[100vh] 
    top-0 bottom-0 right-0 left-"
    >
      <div
        className={`${IndigoGradient} w-[80%] h-[45%] rounded-xl p-5 relative`}
      >
        <Link to="/">
          <img src={Close} width="20px" alt="" />
        </Link>
        <h2 className="text-end uppercase text-5xl text-white underline">
          New List
        </h2>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mt-10 ml-10"
        >
          <div>
            <p className="text-white mb-4 text-xl">Enter List</p>
            <input
              type="enter-text"
              className="border-none rounded-sm text-xl"
            />
            <p className="text-red-600 bg-white opacity-70 rounded-sm px-2 mt-2">
              {/* Error */}
            </p>

            <div className="w-[100%] h-[100] flex justify-end mt-3 left-0 right-0">
              <button className="rounded-sm text-white bg-green-600 text-end p-2">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNotes;
