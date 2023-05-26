import type { Dispatch, SetStateAction } from 'react';
import Dropdown from '@assets/Main/dropdown.svg'

type DropdownButtonProps ={
  selectedOption : string;
  setIsDropdownOpen :Dispatch<SetStateAction<boolean>>
}

const DropdownButton = ({ selectedOption, setIsDropdownOpen }:DropdownButtonProps) => {
  return (
    <button
      className="relative w-full rounded-md bg-white py-1.5 sm:py-1 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary sm:text-sm sm:leading-6"
      onClick={() => setIsDropdownOpen(prev => !prev)}
    >
      <span className="flex items-center">
        <span className="ml-3">{selectedOption || 'Select'}</span>
      </span>
      <span className="absolute inset-y-0 right-0 ml-3 flex items-center pr-2 pointer-events-none">
      <img src={Dropdown} alt="select" className="h-3.5 w-3.5 text-gray-400" />
      </span>
    </button>
  );
};

export default DropdownButton;
