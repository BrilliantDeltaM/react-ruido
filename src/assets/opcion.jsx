import React from "react";

const Option = ({ isSelected, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-2 cursor-pointer px-4 py-2 border-2 rounded-lg ${
        isSelected ? "" : "border-gray-300 bg-white"
      } hover:border-black`}
    >
      {/* Icono del checkbox */}
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 rounded ${
          isSelected ? "" : "border-gray-300 bg-white"
        }`}
      >
            {isSelected && (
            <span className="w-2 h-2 bg-black rounded-md"></span>
            )}
      </div>
      {/* Texto de la opción */}
      <span>{children}</span>
    </div>
  );
};

export default Option;
