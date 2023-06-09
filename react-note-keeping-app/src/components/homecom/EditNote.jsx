import { Close } from "../Sources";
import { useState } from "react";
import { IndigoGradient } from "../Sources";
import { Link } from "react-router-dom";

// Extra Inner Components
const AddedPopupHtml = function ({ added }) {
  if (added) {
    return (
      <p className="absolute bottom-0 left-0 rounded-xl p-2">Note Added</p>
    );
  } else {
    return <div></div>;
  }
};

function EditNote({ editPopUp, removeEditPopUp }) {
  // To remove delete pop up
  const [confirmDelete] = useState(false);
  const [added, setadded] = useState(false);
  const closeAddedpopUp = function () {
    return setTimeout(() => {
      let value = false;
      setadded(value);
      removeEditPopUp();
    }, 3000);
  };
  const showAddedNotification = function () {
    setadded(!added);
    closeAddedpopUp();
    console.log(`in show added function ${added}`);
  };

  if (!editPopUp) {
    return <div></div>;
  } else {
    return (
      <div
        className="absolute rounded-xl border border-black md:w-[50%] 
      translate-y-[-50%] translate-x-[50%] w-[60%]"
      >
        <div
          className={`${IndigoGradient} w-[100%] h-[45%] rounded-xl p-5 relative`}
        >
          <Link to="/">
            <img
              src={Close}
              onClick={() => {
                removeEditPopUp();
              }}
              width="20px"
              alt=""
            />
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
                className="border-none w-[70%] md:w-[100%] rounded-sm text-xl"
              />
              <p className="text-red-600 bg-white opacity-70 rounded-sm px-2 mt-2">
                {/* Error */}
              </p>

              <div className="w-[100%] h-[100] flex justify-end mt-3 left-0 right-0">
                <button
                  onClick={() => {
                    showAddedNotification();
                  }}
                  className="rounded-sm text-white bg-green-600 text-end p-2"
                >
                  Edit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <AddedPopupHtml added={added} />
        </div>
      </div>
    );
  }
}

export default EditNote;
