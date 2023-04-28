import { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import DropDownOptions from './DropDownOptions';
import { DropDownSVG } from './Svg';
import useOnClickOutside from '@hooks/useOnClickOutside';

type InterviewOptionsProps = {
  label: string;
  name: string;
  options: { [key: string]: string };
};

const DropDown = ({ label, name, options }: InterviewOptionsProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [queryOptions] = useSearchParams();
  const optionRef = useRef(null);

  useOnClickOutside(optionRef, () => setIsDropDownOpen(false));

  const selectedOption = options[queryOptions.get(name) as string];

  return (
    <div className="relative w-[200px] m-4" ref={optionRef}>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <button
        className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
        onClick={() => setIsDropDownOpen(prev => !prev)}
      >
        <span className="flex items-center">
          <span className="ml-3">{selectedOption || 'Select'}</span>
        </span>
        <span className="absolute inset-y-0 right-0 ml-3 flex items-center pr-2 pointer-events-none">
          <DropDownSVG />
        </span>
      </button>
      {isDropDownOpen && (
        <DropDownOptions
          options={options}
          name={name}
          selectedOption={selectedOption}
          setIsDropDownOpen={setIsDropDownOpen}
        />
      )}
    </div>
  );
};

export default DropDown;
