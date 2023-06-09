import React, { useState } from "react";
import { Close } from "../Sources";

function ConfirmAction({ delFlyer, removeDelete, text }) {
  const [confirmDelete] = useState(false);

  // To remove delete pop up

  if (!delFlyer) {
    return <div></div>;
  } else {
    return (
      <div className="bg-white rounded-md p-3 border border-black absolute translate-x-[50%] w-[50%] translate-y-[-50%]">
        <div
          onClick={removeDelete}
          className="border-b border-black flex justify-end p-2 cursor-pointer"
        >
          <img src={Close} alt="" width="20px" />
        </div>

        <div className="p-5">
          <div className="text-center mb-6">{text}</div>
          <div className="flex justify-end gap-4">
            <button
              className={`px-5 py-1 rounded hover:bg-opacity-80 ${
                confirmDelete ? "bg-green-600" : "bg-red-600"
              }`}
              onClick={() => {
                removeDelete();
              }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                removeDelete();
              }}
              className={`px-5 py-1 rounded hover:bg-opacity-80 ${
                confirmDelete ? "bg-green-600" : "bg-green-600"
              }
                `}
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmAction;
