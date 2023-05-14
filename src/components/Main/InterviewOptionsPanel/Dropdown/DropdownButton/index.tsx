import { Dispatch, SetStateAction } from 'react';
import { DropDownSVG } from '../Svg';

type DropdownButtonProps ={
  selectedOption : string;
  setIsDropdownOpen :Dispatch<SetStateAction<boolean>>
}

const DropdownButton = ({ selectedOption, setIsDropdownOpen }:DropdownButtonProps) => {
  return (
    <button
      className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary sm:text-sm sm:leading-6"
      onClick={() => setIsDropdownOpen(prev => !prev)}
    >
      <span className="flex items-center">
        <span className="ml-3">{selectedOption || 'Select'}</span>
      </span>
      <span className="absolute inset-y-0 right-0 ml-3 flex items-center pr-2 pointer-events-none">
        <DropDownSVG />
      </span>
    </button>
  );
};

export default DropdownButton;
