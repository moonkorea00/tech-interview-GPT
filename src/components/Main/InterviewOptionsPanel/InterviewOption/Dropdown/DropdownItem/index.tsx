import type { Dispatch, SetStateAction } from 'react';
import useURLSearchParams from '@components/Main/hooks/useURLSearchParams';
import Select from '@assets/Main/select.svg';

type DropdownItemProps = {
  options: { [key: string]: string };
  name: string;
  value: string;
  selectedOption: string;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

const DropdownItem = ({
  options,
  name,
  value,
  selectedOption,
  setIsDropdownOpen,
}: DropdownItemProps) => {
  const { setURLSearchParams } = useURLSearchParams(() =>
    setIsDropdownOpen(prev => !prev)
  );

  return (
    <li
      onClick={() => setURLSearchParams(name, value)}
      className="w-full relative py-2 sm:py-1.5 pl-3 pr-9 cursor-pointer hover:bg-indigo-100"
    >
      <div className="flex items-center">
        <span
          className={`${
            selectedOption === options[value] ? 'font-semibold' : 'font-normal'
          } ml-3 block`}
        >
          {options[value]}
        </span>
      </div>
      <span
        className={`${
          selectedOption === options[value] ? 'text-primary' : 'text-white'
        } absolute inset-y-0 right-0 flex items-center pr-4`}
      >
        {selectedOption === options[value] && (
          <img src={Select} alt="select" className="h-7 w-7" />
        )}
      </span>
    </li>
  );
};

export default DropdownItem;
