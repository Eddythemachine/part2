import { IndigoGradient } from "../Sources";
import ConfirmAction from "./ConfirmAction";
import { useState } from "react";
import EditNote from "./EditNote";

const datas = [
  {
    title: "Reill fill gas",
    date: "2023 May, 26th",
    state: true,
    id: "1",
  },
  {
    title: "Buy a new rug",
    date: "2023 April, 6th",
    state: false,
    id: "2",
  },
];

function NoteList({ showDone }) {
  const [delFlyer, setdelFlyer] = useState(false);
  const [editPopUp, seteditPopUp] = useState(false);

  const removeDelete = () => {
    setdelFlyer(!delFlyer);
  };
  const removeEditPopUp = () => {
    seteditPopUp(!editPopUp);
  };

  return (
    <div className={`mt-10 ${IndigoGradient} m-5 relative`}>
      <div>
        {" "}
        <ConfirmAction
          delFlyer={delFlyer}
          removeDelete={removeDelete}
          text={"Are you sure you want to delete this item"}
        />
      </div>
      <div>
        <EditNote removeEditPopUp={removeEditPopUp} editPopUp={editPopUp} />
      </div>
      <div className="text-white">
        <div className="p-3 flex flex-row gap-5 text-xl">
          <p>No</p>
          <h2 className="text-xl uppercase">Title</h2>
        </div>
      </div>
      {datas.map((data, index) => {
        const { title, date, state, id } = data;
        return (
          <div key={id} className="text-white flex justify-between px-5 mb-2">
            <div className="p-3 flex flex-col gap-5 text-xl md:flex-row sm:flex-row">
              <p>{index + 1}.</p>
              <h2 className="text-xl uppercase">{title}</h2>
              <p>Date</p>
            </div>

            <div className="flex gap-3 text-xl mb-2 flex-col sm:flex-row">
              <button
                className="bg-red-600 px-5 py-2 sm:px-3 rounded hover:bg-opacity-80"
                onClick={() => {
                  if (editPopUp) {
                    removeEditPopUp();
                  }
                  removeDelete();
                }}
              >
                Delete
              </button>
              <button
                className="bg-blue-600 px-3 py-2 sm:px-3 border-0 rounded hover:bg-opacity-80"
                onClick={() => {
                  removeEditPopUp();
                  if (delFlyer) {
                    removeEditPopUp();
                  }
                }}
              >
                Edit
              </button>
              <button
                className={`${
                  showDone ? "block" : "hidden"
                } px-3 py-2 sm:px-3 non rounded hover:bg-opacity-80 ${
                  state ? "bg-green-600" : "bg-gray-600"
                } `}
              >
                {state ? "Done" : "Pending"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NoteList;
