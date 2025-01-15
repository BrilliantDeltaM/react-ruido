import React, { useState } from "react";
import Option from "./opcion";

const OptionsHolder = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option); // Guardamos la opción seleccionada completa
    onSelect(option); // Enviamos el objeto completo al padre
  };

  return (
    <div className="space-y-4">
      {options.map((option) => (
        <Option
          key={option.value}
          isSelected={selectedOption && selectedOption.value === option.value}
          onClick={() => handleSelect(option)} // Pasamos la opción completa
        >
          {option.label}
        </Option>
      ))}
    </div>
  );
};

export default OptionsHolder;
