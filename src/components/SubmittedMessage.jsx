import React from "react";
import { useNavigate } from "react-router";

function SubmittedMessage() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className="flex-col w-full h-screen flex justify-center items-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"
        className="w-16 h-16"
        alt=""
      />
      <h2 className="text-2xl mt-2 mb-2 text-purple-500">
        Thank you for giving the feedback
      </h2>
      <h4 className="mb-16">We will work towards improving your experience</h4>
      <button
        className="bg-purple-400 w-28 h-12 text-white"
        onClick={() => {
          handleClose();
        }}
      >
        Close
      </button>
    </div>
  );
}

export default SubmittedMessage;
