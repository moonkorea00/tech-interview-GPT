import type { Dispatch, SetStateAction } from 'react';
import DropdownItem from '../DropdownItem';
import { Options } from '../types';

type DropdownListProps = {
  name: string;
  options: Options;
  selectedOption: string;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

const DropdownList = ({
  name,
  options,
  selectedOption,
  setIsDropdownOpen,
}: DropdownListProps) => {

  return (
    <ul className="absolute mt-1 max-h-60 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm overflow-y-scroll scrollbar-hide z-10">
      {Object.keys(options).map(value => (
        <DropdownItem
          key={value}
          name={name}
          options={options}
          value={value}
          selectedOption={selectedOption}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      ))}
    </ul>
  );
};

export default DropdownList;
