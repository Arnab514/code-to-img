'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import OutsideClickHandler from "react-outside-click-handler"

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

function Dropdown({ options, selectedOption, onOptionSelect }: DropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <OutsideClickHandler onOutsideClick={ () => setShowDropdown(false)}>
    <div onClick={toggleDropdown}>
      <div className='dropdown-title capitalize w-[120px]'>
        {selectedOption}
        <ChevronDown />
      </div>
      {showDropdown && (
        <div className='dropdown-menu w-[120px] top-[94px]'>
          {options.map((option, index) => (
            <div key={index}>
              <button
                className='dropdown-item text-left'
                onClick={() => onOptionSelect(option)}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </OutsideClickHandler>
  );
}

export default Dropdown;
